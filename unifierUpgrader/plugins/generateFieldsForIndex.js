'use strict';

const _      = require('lodash');
const crypto = require('crypto');

/**
 * @function generateFieldsForIndex
 * @description Geenrate the fields required to build the search index by ignoring the deleted props and return their value
 *
 * @param {Obejct} source the main object that will be processed
 * @returns {Object}
 */
function generateFieldsForIndex(source) {

    let notDeletedObjs = _.toArray(source).filter( elm => !elm.deleted );

    if (!!notDeletedObjs && !!notDeletedObjs.length) {
	    const values = _.map(notDeletedObjs,function(obj){
	        return !!obj.value ?   { value: obj.value } : null;
	    });
	    return _.compact(values);
    } else return [];
}

module.exports = generateFieldsForIndex;
