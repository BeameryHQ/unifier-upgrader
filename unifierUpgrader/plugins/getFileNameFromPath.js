'use strict';

/**
 * @function getFileNameFromPath
 * @description Returns a file name from full path
 * @param {String} source the URI value
 * @returns {String}
 */
function getFileNameFromPath(source) {

	if (!source || typeof(source) !== "string") return null;

    return require('path').basename(source)
}

module.exports = getFileNameFromPath;

