const { join } = require('path')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  getPackageConfig: ({ port, deps, mfParams, isShell }) => ({
    devServer: {
      port,
      open: isShell,
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
        const eslintWebpackPluginIndex = webpackConfig.plugins.findIndex(
          ({ key }) => key === 'ESLintWebpackPlugin',
        )
        webpackConfig.plugins[
          eslintWebpackPluginIndex
        ].options.baseConfig.extends = [join(paths.appPath, '.eslintrc.js')]

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
