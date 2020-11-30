const path = require('path');
const merge = require('deepmerge');

module.exports = {
  webpack: (config) => {
    const customAlias = merge(config.resolve.alias, {
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@components': path.resolve(__dirname, 'src/components/'),
    });

    config.resolve.alias = customAlias;

    return config;
  },
};
