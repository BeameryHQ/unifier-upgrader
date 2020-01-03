'use strict';

const _ = require('lodash');
const getCountryName = require('./getCountryName');

/**
 * @function generateAddressString
 * @description Generate an address string based on city, state, and country (using an ISO lookup code)
 *
 * @param {String} city The city as a string
 * @param {String} state The state/province as a code
 * @param {String} countryCode The ISO3 Country Code
 * @returns {String} The address string
 */
function generateAddressString(city, state, countryCode) {

    // Init the return string...
    let address = []
    if (city) address.push(city);
    if (state) address.push(state);
    if (countryCode) {
        const countryName = getCountryName(countryCode);
        if (countryName) address.push(countryName);
    }
    return address.join(', ');

}

module.exports = generateAddressString;
