const { createConfig } = require('@rollup-umd/documentation');
const options = require('./src/options');
const config = createConfig(undefined, {
  favicon: 'bs',
  favicons: require('./lib/favicons'), // eslint-disable-line global-require
  ...options,
});

module.exports = config;
