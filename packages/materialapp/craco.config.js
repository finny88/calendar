const { ModuleFederationPlugin } = require("webpack").container;
const deps = require('./package.json').dependencies

module.exports = {
    webpack: {
        plugins: {
            add: [
                new ModuleFederationPlugin({
                    name: "materialapp",
                    remotes: {
                        copyrightapp: "copyrightapp@http://localhost:3001/remoteEntry.js",
                    },
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
            optimization: {
                ...webpackConfig.optimization,
                chunkIds: 'named'
            }
        }),
    },
}