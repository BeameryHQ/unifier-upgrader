'use strict';

const assert = require('assert');
const ditto_v2 = require('json-ditto-v2');
const { each } = require('lodash');

let unifierUpgrader = require('../index')
let data = require('./data');

describe('unifier upgrader', () => {
  describe('upgraded results should be identical to the expected results', () => {
    each(data, function(serviceObj, testService) {
      let sample = serviceObj.sample;
      let oldMapping = serviceObj.oldMapping;
      let upgradedMapping = unifierUpgrader.unifierUpgrader(oldMapping);
      let expectedResult = serviceObj.expectedResult;

      it(`${testService}: all fields should be identical to the expected result`, (done) => {
        new ditto_v2(upgradedMapping).unify(sample).then((result) => {
          for (let key in expectedResult) {
            if (key === "id" || key === "createdAt") {
              continue;
            }
            assert.deepStrictEqual(result[key], expectedResult[key])  
          }
          done();    
        }).catch(done);
      });
    });
  });
});