'use strict';

const _ = require('lodash');

/**
 * Get values from algolia `places.js` suggestions object passed from front end.
 * Needed because if object.type is 'city', then the city name is at key 'name',
 * otherwise it is at key 'city'. The same applies for type 'country'.
 *
 * @param {Object} algoliaObject The object to query.
 * @param {Array|String} key key of the property to get.
 * @returns {any} The value returned which may be undefined.
 */

function getAlgoliaValue(object, key) {
    if (object.type === key) {
        return object.name;
    } else {
        return object[key];
    }
}

module.exports = getAlgoliaValue;
