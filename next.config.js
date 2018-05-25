const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

var config = withImages(
  withSass({
    webpack(config, options) {
      return config;
    }
  })
);

module.exports = config;
