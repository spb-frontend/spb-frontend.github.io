/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images');

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});
