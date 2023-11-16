const { getPackageConfig } = require('../../scripts/cracoConfigBuilder')
const {
  dependencies: deps,
  config: { port },
} = require('./package.json')

module.exports = getPackageConfig({
  port,
  deps,
  mfParams: {
    name: 'copyrightapp',
    exposes: {
      './Copyright': './src/Copyright',
    },
  },
  isShell: false,
})
