module.exports  = {
  facebook: {
    sample: require('./samples/facebook'),
    oldMapping: require('./oldMapping/facebook'),
    expectedResult: require('./oldResults/facebook'),
    expectedMapping: require('./newMapping/facebook'),
    upgradedMappingPath: './upgradedMapping/facebook',
    upgradedResultsPath: './upgradedResults/facebook'
  },
  facebookRaw: {
    sample: require('./samples/facebook_raw'),
    oldMapping: require('./oldMapping/facebook_raw'),
    expectedResult: require('./oldResults/facebook_raw'),
    expectedMapping: require('./newMapping/facebook_raw'),
    upgradedMappingPath: './upgradedMapping/facebook_raw',
    upgradedResultsPath: './upgradedResults/facebook_raw'
  },
  github: {
    sample: require('./samples/github'),
    oldMapping: require('./oldMapping/github'),
    expectedResult: require('./oldResults/github'),
    expectedMapping: require('./newMapping/github'),
    upgradedMappingPath: './upgradedMapping/github',
    upgradedResultsPath: './upgradedResults/github'
  },
  githubRaw: {
    sample: require('./samples/github_raw'),
    oldMapping: require('./oldMapping/github_raw'),
    expectedResult: require('./oldResults/github_raw'),
    expectedMapping: require('./newMapping/github_raw'),
    upgradedMappingPath: './upgradedMapping/github_raw',
    upgradedResultsPath: './upgradedResults/github_raw'
  },
  google: {
    sample: require('./samples/google'),
    oldMapping: require('./oldMapping/google'),
    expectedResult: require('./oldResults/google'),
    expectedMapping: require('./newMapping/google'),
    upgradedMappingPath: './upgradedMapping/google',
    upgradedResultsPath: './upgradedResults/google'
  },
  linkedin: {
    sample: require('./samples/linkedin'),
    oldMapping: require('./oldMapping/linkedin'),
    expectedResult: require('./oldResults/linkedin'),
    expectedMapping: require('./newMapping/linkedin'),
    upgradedMappingPath: './upgradedMapping/linkedin',
    upgradedResultsPath: './upgradedResults/linkedin'
  },
  linkedinRaw: {
    sample: require('./samples/linkedin_raw'),
    oldMapping: require('./oldMapping/linkedin_raw'),
    expectedResult: require('./oldResults/linkedin_raw'),
    expectedMapping: require('./newMapping/linkedin_raw'),
    upgradedMappingPath: './upgradedMapping/linkedin_raw',
    upgradedResultsPath: './upgradedResults/linkedin_raw'
  },
  // api_plugin_unifier_contactsv2: {
  //   sample: require('./samples/api_plugin_unifier_contacts.v2'),
  //   oldMapping: require('./oldMapping/api_plugin_unifier_contacts.v2'),
  //   expectedResult: require('./oldResults/api_plugin_unifier_contacts.v2'),
  // },
  api_plugin_unifier_test: {
    sample: require('./samples/api_plugin_unifier_test'),
    oldMapping: require('./oldMapping/api_plugin_unifier_test'),
    expectedResult: require('./oldResults/api_plugin_unifier_test'),
  }
};