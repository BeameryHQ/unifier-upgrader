"use strict";

const _        = require('lodash');
const URL      = require('url');

const urlUtils = require('beam-uri');

/**
 * @function getWorkdaySocialNetworkAccountURL
 * @description Create a url for input as a social network account url in workday
 * Workday will only allow social links of service linkedin with the url stripped from https:// .. crazy huh !
 *
 * @param {String}   value    the URI of the scoial network
 * * @param {String} service  the service name of the social network
 * @param {String}   type     the social network type (social, website)
 * @returns {String}
 */
function getWorkdaySocialNetworkAccountURL(value, service, type) {

    if (type !== 'social' || !_.isString(service) || !_.isString(value)) return null;

	// Check if the url passed does not contain http://
	if (URL.parse(value).protocol === null) value = "http://" + value;

    // Check if its a LinkedIn URI and get the canonical URI
    if (!!urlUtils.getDomain(value) && urlUtils.getDomainName(value).toLowerCase() == "linkedin") {
        return urlUtils.getCanonicalLinkedinUrl(value).replace(/https?:\/\//,'');
    } else return null;
}

module.exports = getWorkdaySocialNetworkAccountURL;




