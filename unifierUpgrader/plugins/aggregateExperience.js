'use strict';

const _ = require('lodash');

/**
 * @function aggregateExperience
 * @description Aggregate the total months of experience for the all experience objects
 *
 * @params  {Object}  experience  The experience object we need to loop in
 * @returns {Integer}
 */
function aggregateExperience(experience) {

	if (!!experience && !!experience.values && !!_.size(experience.values)) {

	    let totalExperience = 0;

	    _.each(experience.values, function(experience){
	        if (!!experience && !!experience.experienceDuration) totalExperience += experience.experienceDuration
	    })

	    return totalExperience == 0 ? null : totalExperience;
	} else return null;
}

module.exports = aggregateExperience;
