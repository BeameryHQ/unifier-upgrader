'use strict'

const _     = require('lodash');
const debug = require('debug')('generateFullExperienceObj');


const countriesList = require('./data/countriesKB');
const generateId = require('./generateId');
const cleanString = require('./cleanString');

/**
 * 
 * @param {Object} input 
 */
function generateFullExperienceObj(input){
    // If we don't have data, jump out
    if(!input.role && !input.organisationName){
        return {};
    }
    let result = { };
    const propertiesToSet = {
        "role"            : cleanString(input.role) ,
        "organisationName": cleanString(input.organisationName)
    };
    try{
        Object.assign(result, {
            "id"              : generateId(input.role, input.organisationName),
        });
        Object.keys(propertiesToSet).forEach( propName => {
            if(input[propName]){
                Object.assign(result, { [propName] : propertiesToSet[propName]})
            }
        })
        // If we have an organisationName in the input, clear the id as could have changed
        // TODO: are we sure no way to skip doing this in updates of full doc, without real change ?
        /* TEMP Comment out until organisation feature is live
        if(input.organisationName){
            Object.assign(result, { organisationId : null });
        }
        */
    } catch(e){
        console.error(e);
    }

    result = { [result.id] : result };

    return result;
}

module.exports = generateFullExperienceObj;

