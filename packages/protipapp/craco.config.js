const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies: deps, config: { port } } = require('./package.json')

module.exports = {
    devServer: {
        port,
    },
    webpack: {
        plugins: {
            add: [
                new ModuleFederationPlugin({
                    name: "protipapp",
                    exposes: {
                        "./ProTip": "./src/ProTip",
                    },
                    filename: "remoteEntry.js",
                    shared: {
                        react: { singleton: true, requiredVersion: deps['react'] },
                        "react-dom": { singleton: true, requiredVersion: deps['react-dom'] },
                        "@mui/material": { singleton: true, requiredVersion: deps['@mui/material'] },
                        "@emotion/react": { singleton: true, requiredVersion: deps['@emotion/react'] },
                        "@mui/system": { singleton: true, requiredVersion: '*' },
                    },
                }),
            ],
        },
        configure: (webpackConfig) => ({
            ...webpackConfig,
            output: {
                ...webpackConfig.output,
                publicPath: "auto",
            },
            optimization: {
                ...webpackConfig.optimization,
                chunkIds: 'named',
                splitChunks: false,
            }
        }),
    },
}