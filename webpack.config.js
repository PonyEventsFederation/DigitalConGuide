const path = require("path");
const webpack = require("webpack")

module.exports = {
    mode: "development",
    entry: [
        "babel-polyfill",
        path.resolve('src/js/main')
    ],
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "react",
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
    plugins: [
        new webpack.DefinePlugin(
            {
                'global': {}
            }
        ),
    ],
    node: false,
    output: {
        path: path.resolve("dist/js"),
        publicPath: "/js/",
        filename: 'bundle.js'
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