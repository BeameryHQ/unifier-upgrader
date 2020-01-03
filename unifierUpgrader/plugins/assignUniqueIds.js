'use strict';

const _ = require('lodash');

/**
 * @function assignUniqueIds
 * @description Group the unique keys of the various fields that can uniquely
 * identify a contact Those objects are the emails and the links. However, we
 * need to do an extra processing step for the links to make sure that we
 * exclude any websites or blogs that can be generic e.g., company website,
 * company blog which do not uniquely identify a contact.
 *
 * @param {links}  links the links object we will iterate on to extract social
 *                       value urls
 * @param {emails}  emailsKeys one more keys that will be appended separated by
 *                             a space to the source for the emails objects
 * @param {integrations} integartions Object with integration definitions, each
 *                                    having `externalId` as unique contact
 *                                    match.
 * @returns {Array} The array of unique Keys extracted from unique identifiers
 *                  (emails and social links)
 */

const filterValues = values =>
    _.filter(values, value => {
        if (value && !value.deleted) {
            if (_.isString(value.type)) {
                return value.type.toLowerCase() !== "website";
            }
            return true;
        }
    });

const mapIntegrations = integrations =>
    _.compact(_.map(integrations, (data, name) => {
        const intId = data.externalId || data.id;
        return intId ? { id: `${name}:${intId}` } : null;
    }));

const asObject = maybeObject =>
    _.isPlainObject(maybeObject) ? maybeObject : {};

function assignUniqueIds(links, emails, integrations) {
    const uniqueIdValues = filterValues([
        ...Object.values(asObject(links)),
        ...Object.values(asObject(emails)),
        ...mapIntegrations(asObject(integrations)),
    ]);

    return _.uniq(_.map(uniqueIdValues, 'id'));
}

module.exports = assignUniqueIds;
