'use strict';

const _ = require('lodash');

const removeInnerReference = (values) => {
  // Upgrade: fields referenced directly no longer need "innerDocument: !"
  if (values.innerDocument === '!') {
    delete values.innerDocument;
  }
}

const changeKeysProperty = (keys) => {
  // Upgrade: keys require $push now and innerDocument is always an internal reference
  keys.innerDocument = '!values';
  keys.$push = true;
  keys.mappings = {'$value': 'id'};
  delete keys.value;
}

function replaceValueReference(values) {
  // Upgrade: Inner references of '$value' are now referred to using '!'
  _.each(values, function(value, key) {
    // Replace $value in mapping properties as well 
    if (key === 'mappings') {
      _.each(values.mappings, () => {
        // Recursion (max depth = 1)
        replaceValueReference(values.mappings);
      });
    }
    else {
      if (value.toString().includes('$value')) {
        values[key] = value.replace('$value', '!')
      }
    }
  });
}

const directlyAssignArrays = (obj) => {
  // Upgrade: Arrays no longer need to be mapped with an innerDocument and an output,
  // they can be assigned directly now
  if ('output' in obj && 'innerDocument' in obj) {
    if (_.isArray(obj.output) && obj.innerDocument === '!') {
      obj = obj.value;
    }
  } 
  return obj;
}

const upgradeKeyValueProperties = (obj) => {
  // Upgrade 'values' and 'keys' objects to v2 spec 

  if ('values' in obj && 'keys' in obj) {
    changeKeysProperty(obj.keys);

    if (_.isArray(obj.values)) {
      obj.values.forEach(element => {
        removeInnerReference(element);
        replaceValueReference(element);
      });
    }
    else {
      removeInnerReference(obj.values);
      replaceValueReference(obj.values);
    }
  }
}

// Upgrading mapping file
const upgradeMappingFile = (oldMapping) => {
  for (let property in oldMapping) {
    if (_.isObject(oldMapping[property])) {
      upgradeKeyValueProperties(oldMapping[property]);      
      oldMapping[property] = directlyAssignArrays(oldMapping[property]);
    }
  }
  // Modified in-place
  return oldMapping;
}


// console.log('-------------------------------');
// const data = require('../test/data');
// const fs = require('fs');
// const assert = require('assert');
// const ditto_v2 = require('json-ditto-v2');
// let upgradedMapping = upgradeMappingFile(data.api_plugin_unifier_test.oldMapping);
// let expectedResult = data.api_plugin_unifier_test.expectedResult;
// let sample = data.api_plugin_unifier_test.sample;
// // Replace just the mapping JSON from the file (keeps comments and the module.export structure)
// var upgradedMappingString = JSON.stringify(upgradedMapping, null, 4);
// var oldMappingFile = fs.readFileSync('/Users/nabil/Documents/GitHub/json-ditto-upgrader/test/data/oldMapping/api_plugin_unifier_test.js', 'utf8');
// // Using regex replace to preserve file's comments
// var upgradedMappingFileString = oldMappingFile.replace(/(module\.exports\s*=\s*)({[^]*})/, '$1' + upgradedMappingString);

// fs.writeFileSync('/Users/nabil/Documents/GitHub/json-ditto-upgrader/test.js', upgradedMappingFileString, 'utf8', null);

// console.log('-------------------------------');

// new ditto_v2(upgradedMapping).unify(sample).then((result) => {

//   var upgradedResultString = JSON.stringify(result, null, 4);
//   fs.writeFileSync('/Users/nabil/Documents/GitHub/json-ditto-upgrader/results.js', `'use strict';\n\nmodule.exports = ${upgradedResultString}`, 'utf8', null);

//   console.log(result["uniqueKeys"]);

//   console.log(expectedResult["uniqueKeys"]);
//   // for (let key in expectedResult) {
//   //   if (key === "id" || key === "createdAt") {
//   //     continue;
//   //   }
//   //   console.log(key);
//   //   assert.deepStrictEqual(result[key], expectedResult[key]);
//   // }
//   // console.log(_.isEqual(result, expectedResult))

// });


module.exports = upgradeMappingFile;