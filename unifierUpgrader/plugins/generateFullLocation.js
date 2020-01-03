'use strict'

const _     = require('lodash');
const debug = require('debug')('generateFullLocationObj');

const countriesList = require('./data/countriesKB');

const getCountryCode = (countryName) => {
    const lowerCaseCountry = countryName.toLowerCase();
    let countryKB = countriesList.find( country => country.name.toLowerCase() ===  lowerCaseCountry );
    if (!!countryKB && countryKB.alpha2Code) {
        return countryKB.alpha2Code.toLowerCase();
    } else {
        return null;
    }
}
/**
 * @function generateFullLocationObj
 * @description Generate a complete 'location' object, ensuring that:
 * - If there is no 'country', update should be ignored
 * - The 'address' property will be updated
 * - Fields that can't be set by this function ( countryCode, geometry, postalCode ) are set to 'null',
 * to remove them in case were already present in the contact being updated
 *
 * @param   {Obejct} input the main location object that will be processed
 * @returns {Object}
 */
function generateFullLocationObj(input){

    const fieldsToReset = {
        countryCode :   null,
        geometry    :   null,
        postalCode  :   null
    }

    let result = { };

    // If there is no country, we shall not update the location obj
    if (!input.country){
        if(input.address){
            result.address = input.address;
        }
        return result;
    }
    try {
        if(input.city){
            result = {
                address : input.address ? input.address : `${input.city}, ${input.country}`,
                country : input.country,
                city    : input.city,
            };
        } else {
            result = {
                address: input.address ? input.address : input.country,
                country: input.country,
            }
        }

        Object.assign(result, fieldsToReset);

        result.countryCode = getCountryCode(result.country);

    } catch(e){
        console.error(e);
    }
    return result;
}

module.exports = generateFullLocationObj;

