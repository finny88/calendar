const {
  dependencies: deps,
  config: { port },
} = require('./package.json')
const { getPackageConfig } = require('../../cracoConfigBuilder')

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
