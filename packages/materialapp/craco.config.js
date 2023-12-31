const { getPackageConfig } = require('../../scripts/cracoConfigBuilder')
const {
  dependencies: deps,
  config: { port },
} = require('./package.json')

module.exports = getPackageConfig({
  port,
  deps,
  mfParams: {
    name: 'materialapp',
    remotes: {
      copyrightapp: 'copyrightapp@http://localhost:3001/remoteEntry.js',
      protipapp: 'protipapp@http://localhost:3002/remoteEntry.js',
    },
  },
  isShell: true,
})
