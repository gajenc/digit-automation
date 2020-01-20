const config = {
  default: {
    appUrl: 'https://egov-micro-qa.egovernments.org/',
  },
  integration: {
    appUrl: 'https://egov-micro-dev.egovernments.org/',
  },
  qa: {
    appUrl: 'https://egov-micro-qa.egovernments.org/'
    // TODO
  },
  pbuat: {
    appUrl: 'https://mseva-uat.lgpunjab.gov.in/'
    // TODO
  }
};

module.exports.get = function get(env ) {
  return config[env] || config.default;
};
