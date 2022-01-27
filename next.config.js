// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");
import {withPlugins} from 'next-compose-plugins';
import {optimizedImages} from 'next-optimized-images';

next-compose-plugins
module.exports = withPlugins([[optimizedImages, {}]], {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
});