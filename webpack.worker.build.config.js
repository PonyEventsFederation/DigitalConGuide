const path = require("path");
const webpack = require("webpack")

module.exports = {
    mode: "production",
    entry: path.resolve('src/js/service-worker/worker.js'),
    watch: false,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["env", {
                                targets: {
                                    "browsers": [
                                        "last 2 versions",
                                        "safari >= 7"
                                    ]
                                }
                            }]
                        ]
                    }
                }
            }
        ]
    },
    node: false,
    output: {
        path: path.resolve("dist/"),
        publicPath: "/",
        filename: 'worker.js'
    },
    resolve: {
        modules: [
            path.resolve('src/js'),
            path.resolve('node_modules')
        ],
        extensions: [
            '.jsx',
            '.js',
            '.json'
        ]
    }
};