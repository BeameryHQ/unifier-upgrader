'use strict';

/**
 * @function getWorkdaySocialNetwork
 * @description Returns a normalized social network for workday
 * The code commented below is due to a unknown issue with workday. The social list is:
 * {"facebook": 'Facebook', "linkedin": 'LinkedIn', "twitter" : 'Twitter', "google"  : 'Google+' }
 *
 * @param {String} source the social network URI value
 * @returns {String}
 */

function getWorkdaySocialNetwork(source) {

	if (!source || typeof(source) !== "string") return null;

    return {
		linkedin: 'LinkedIn',
    }[source.replace(/\s\s+/g,"").trim().toLowerCase()];
}

module.exports = getWorkdaySocialNetwork;
