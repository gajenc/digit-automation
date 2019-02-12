const config = {
  default: {
    appUrl: 'https://m.aboutyou.de/',
    username: 'gajendran.c@outlook.com',
    password: 'aboutyou27%'
  },
  integration: {
    appUrl: 'https://m.aboutyou.de/',
    username: 'gajendran.c@outlook.com',
    password: 'aboutyou27%'
  },
  qa: {
    appUrl: 'hhttps://qa.m.aboutyou.de/'
    // TODO
  },
  staging: {
    appUrl: 'hhttps://stage.m.aboutyou.de/'
    // TODO
  }
};

module.exports.get = function get(env ) {
  return config[env] || config.default;
};
