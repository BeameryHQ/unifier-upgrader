'use strict';

/**
 * @function getFileExtensionFromPath
 * @description Returns a file extension from full path
 * @param {String} source the URI value
 * @returns {String}
 */
function getFileExtensionFromPath(source) {

	if (!source || typeof(source) !== "string") return null;

    return require('path').extname(source).split('.')[1] || null
}

module.exports = getFileExtensionFromPath;

