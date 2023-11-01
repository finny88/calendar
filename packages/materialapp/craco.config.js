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
                    name: "materialapp",
                    remotes: {
                        copyrightapp: "copyrightapp@http://localhost:3001/remoteEntry.js",
                        protipapp: "protipapp@http://localhost:3002/remoteEntry.js"
                    },
                    shared: {
                        react: { singleton: true, requiredVersion: deps['react'] },
                        "react-dom": { singleton: true, requiredVersion: deps['react-dom'] },
                        "@mui/material": { singleton: true, requiredVersion: deps['@mui/material'] },
                        "@emotion/react": { singleton: true, requiredVersion: deps['@emotion/react'] },
                        "tss-react/mui": { singleton: true, requiredVersion: deps['tss-react'] },
                        "@mui/system": { singleton: true, requiredVersion: '*' }
                    },
                }),
            ],
        },
        configure: (webpackConfig) => ({
            ...webpackConfig,
            optimization: {
                ...webpackConfig.optimization,
                chunkIds: 'named',
                splitChunks: false,
            }
        }),
    },
}