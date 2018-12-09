const { createConfig } = require('@rollup-umd/documentation');
const config = createConfig(undefined, {
  favicon: 'bs',
  favicons: require('./lib/favicons'), // eslint-disable-line global-require
});

module.exports = config;
