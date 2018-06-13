const path = require("path");
const WorkboxPlugin = require('workbox-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const WORKER_FILE = path.resolve('src/js/service-worker/worker.js');

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
                exclude: /node_modules|worker\.js|service-worker/,
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
        new WorkboxPlugin.InjectManifest({
            swSrc: WORKER_FILE,
            swDest: './../worker.js',
            importWorkboxFrom: 'local',
            globDirectory: './dist/',
            globPatterns: [
                'index.html',
                'manifest.json',
                'robots.txt',
                'img/*.svg',
                'css/*.css',
                'fonts/local/*.{woff,woff2}',
            ],
            modifyUrlPrefix: {
                '': '/'
            }
        }),
        new BrowserSyncPlugin({
            host: process.env.IP || 'localhost',
            port: process.env.PORT || 8888,
            server: {
                baseDir: ['./dist']
            }
        })
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