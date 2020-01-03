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
  else if (_.isObject(obj.output)) {
    // If iterating over an object and the output is a [] or {}
    replaceValueReference(obj);
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

module.exports = upgradeMappingFile;