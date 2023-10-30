const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    devServer: {
        port: 3001,
    },
    webpack: {
        plugins: {
            add: [
                new ModuleFederationPlugin({
                    name: "copyrightapp",
                    exposes: {
                        "./Copyright": "./src/Copyright",
                    },
                    filename: "remoteEntry.js",
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
            output: {
                ...webpackConfig.output,
                publicPath: "auto",
            },
            optimization: {
                ...webpackConfig.optimization,
                chunkIds: 'named'
            }
        }),
    },
}