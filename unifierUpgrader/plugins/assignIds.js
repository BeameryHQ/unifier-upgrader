'use strict';

const _ = require('lodash');

/**
 * @function assignIds
 * @description Group the unique keys of the various fields that can uniquely identify a contact
 * Those objects are the emails and the links. However, we need to do an extra processing
 * step for the links to make sure that we exclude any websites or blogs that can be generic
 * e.g., company website, company blog which do not uniquely identify a contact
 *
 * @param {Array}  target the target Array we will merge with
 * @param {Array}  source the source array to merge keys with
 * @returns {Array}
 */
function assignIds(target, source) {

    let uniqueIdValues = _.extend(_.cloneDeep(target), _.cloneDeep(source));

    if (!!_.toArray(uniqueIdValues).length) {
	    const keys  = _.map(_.toArray(uniqueIdValues).filter( elem => !!elem && !elem.deleted ),function(obj){
	        return obj.id ;
	    });
	    return _.compact(keys);
    } else return [];
}

module.exports = assignIds;
