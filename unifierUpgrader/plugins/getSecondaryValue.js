'use strict';

const _  = require('lodash');

/**
 * @function getSecondaryValue
 * @description Get a secondary value (not primary) from a values object
 *
 * @param {Object}  data  the values object to extract secondary value from
 * @returns {String}
 */

function getSecondaryValue(source, primaryID) {
    // If the data size is only 1 that means we only have a primary value .. no secondary
    if (_.size(source) === 1 || !primaryID) return null;

    return _.filter(source, (iterable) => {
        return iterable.id !== primaryID
    })[0].value;

}

module.exports = getSecondaryValue;
