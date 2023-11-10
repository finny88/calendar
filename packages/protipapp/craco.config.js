const {
  dependencies: deps,
  config: { port },
} = require('./package.json')
const { getPackageConfig } = require('../../cracoConfigBuilder')

module.exports = getPackageConfig({
  port,
  deps,
  mfParams: {
    name: 'protipapp',
    exposes: {
      './ProTip': './src/ProTip',
    },
  },
  isShell: false,
})
