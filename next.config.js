const withImages = require('next-images');

module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'svg'],
  webpack(config, options) {
    return config;
  },
});
