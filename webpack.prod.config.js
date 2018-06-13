const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const WORKER_FILE = path.resolve('src/js/service-worker/worker.js');

const pathsToClean = [
    './dist/js',
    './dist/worker.js'
];

// the clean options to use
const cleanOptions = {
    exclude:  ['.gitkeep'],
    verbose:  true,
    dry:      false,
    watch:    true
};

module.exports = {
    mode: "production",
    entry: [
        "babel-polyfill",
        path.resolve('src/js/main')
    ],
    watch: false,
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
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
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