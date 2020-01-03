'use strict';

const _ = require('lodash');

/**
 * @function extractLinkByService
 * @description Extract a link value from a links array by a service type/service name
 *
 * @param {Object} links the links object
 * @param {String} service the string to of the social service to match
 * @returns {String}
 */
function extractLinkByService(links, service) {
	if (!!_.size(links)) {
		return _.get(_.filter(links, function(elem) { return elem.service == service }), "[0].value", null);
	} else return null;
}

module.exports = extractLinkByService;
