const path = require('path')
const { getPlugin, pluginByName } = require('@craco/craco')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  getPackageConfig: ({ port, deps, mfParams, isShell }) => ({
    devServer: {
      port,
      ...(isShell ? {} : { open: false }),
    },
    webpack: {
      plugins: {
        add: [
          new ModuleFederationPlugin({
            ...mfParams,
            filename: 'remoteEntry.js',
            shared: {
              react: { singleton: true, requiredVersion: deps['react'] },
              'react-dom': {
                singleton: true,
                requiredVersion: deps['react-dom'],
              },
              '@mui/material': {
                singleton: true,
                requiredVersion: deps['@mui/material'],
              },
              '@emotion/react': {
                singleton: true,
                requiredVersion: deps['@emotion/react'],
              },
              'tss-react/mui': {
                singleton: true,
                requiredVersion: deps['tss-react'],
              },
              '@mui/system': { singleton: true, requiredVersion: '*' },
            },
          }),
        ],
      },
      configure: (webpackConfig, { paths }) => {
        const { isFound, match: eslintWebpackPlugin } = getPlugin(
          webpackConfig,
          pluginByName('ESLintWebpackPlugin'),
        )

        if (isFound) {
          eslintWebpackPlugin.options.baseConfig.extends = [
            path.join(paths.appPath, '.eslintrc.js'),
          ]
        }

        return {
          ...webpackConfig,
          output: {
            ...webpackConfig.output,
            publicPath: 'auto',
          },
          optimization: {
            ...webpackConfig.optimization,
            chunkIds: 'named',
            splitChunks: false,
          },
        }
      },
    },
  }),
}
