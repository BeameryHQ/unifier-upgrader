'use strict';

const _ = require('lodash');

/**
 * @function getExternalVacancyIdByIntegration
 * @description get vacancy by given integration.
 *
 * @param {Vacancy[]} vacancies
 * @param {String} integration
 * @returns {Vacancy}
 */
function getExternalVacancyIdByIntegration(vacancies, integration) {
    const vacancy = _.head(_.filter(vacancies, (vacancy) => _.has(vacancy, `integrations.${integration}`)));
    return _.get(vacancy, 'integrations.jazz.id');
}

module.exports = getExternalVacancyIdByIntegration;
