'use strict';

const _      = require('lodash');
const moment = require('moment');

/**
 * @function calculateDuration
 * @description Calculate the work experience duration in months
 *
 * @param {Date/Object} source the startDate of the experience
 * @param {Date/Object} target the endDate of the experience
 * @returns {Integer} the number of months a person has worked in between two dates (start data/end date)
 */
function calculateDuration(source, target) {

    if (!!source && _.size(source)) {

        let startDate;
        let endDate;

        // Check if the date passed is a plain object of year/month or a date object
        if (_.isPlainObject(source)) {
            startDate = source.year;
            startDate = source.month ? `"${startDate}-${source.month}"` : `${startDate}`;
        } else startDate = source;

        if (!!target) {

            // Check if the date passed is a plain object of year/month or a date object
            if (_.isPlainObject(target)) {
                endDate = target.year;
                endDate = target.month ? `"${endDate}-${target.month}"` : `${endDate}`;
            } else endDate = target;

            try {

                var momentStartDate = moment(new Date(startDate).toISOString());
                var momentEndDate   = moment(new Date(endDate).toISOString());

                return momentEndDate.diff(momentStartDate, 'months');

            } catch(err) {
                return null;
            }
        } else return null;

    // If there is no startDate then there is no valid duration
    } else return null;
}

module.exports = calculateDuration;
