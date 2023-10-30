const { ModuleFederationPlugin } = require("webpack").container;

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
                        react: { singleton: true },
                        "react-dom": { singleton: true },
                        "@mui/material": { singleton: true },
                        "@emotion/react": { singleton: true },
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