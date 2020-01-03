'use strict';

const _ = require('lodash');

// Beamery resulting name on the left, amazon names on the right (or
// function which evaluates it).
const beameryFromAmazon = {
    firstName: 'firstName',
    lastName: 'lastName',
    fullName: timestamp =>
        Math.max(timestamp('firstName'), timestamp('lastName')),
    location: 'address',
    primaryPhoneNumber: 'phoneNumber',
    phoneNumbers: 'phoneNumber',
    primaryEmail: 'email',
    emails: 'email',
    doNotContact: 'doNotContact',
    // Confidential is a parent object for confidential sub-property, so we
    // take timestamp from parent object.
    confidential: 'confidentiality'
};

const toTimestamp = isoDateString => new Date(isoDateString).getTime();

/**
 * @function buildAmazonMetadata
 * @description Extracts timestamps from amazon contact object and returns
 * metadata with updateTimestamps array with all names translated, suitable
 * for sending over gRPC.
 *
 * @param {Object} data Amazon-format contact definition
 * @returns {Object} gRPC-compatible metadata format
 */
function buildAmazonMetadata(data) {
    const timestampGetter = property =>
        toTimestamp(_.get(data, [property, 'timestamp'], 0));

    const updateTimestamps = _.map(beameryFromAmazon, (amazonProp, key) => {
        const timestamp = typeof amazonProp === 'function'
            ? amazonProp(timestampGetter)
            : timestampGetter(amazonProp);

        return { key, timestamp };
    }).filter(update => update.timestamp !== 0);

    return { updateTimestamps };
};

module.exports = buildAmazonMetadata;
