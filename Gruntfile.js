var path = require("path");

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            default: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: true,
                    sourceMap: false,
                    preserveComments: false,
                    report: "min",
                    except: []
                },
                files: {
                    'dist/js/bundle.js': ['dist/js/bundle.min.js'],
                }
            }
        },

        webpack: {
            bundle: require("./webpack.build.config.js"),
            worker: require("./webpack.worker.build.config.js"),
            workerDev: require("./webpack.worker.config.js")
        },

        "webpack-dev-server": {
            default: {
                publicPath: '/js/',
                // keepalive: false,
                webpack: require("./webpack.config.js"),
                contentBase: [
                    path.resolve('dist')
                ],
                port: 8888,
                historyApiFallback: {
                    index: 'index.html'
                }
            }
        },

        sass: {
            dist: {
                options: {
                    lineNumbers: true,
                    includePaths: [
                        './src/sass/'
                    ],
                    outputStyle: 'compact',
                    sourceMap: true,
                    'default-encoding': 'utf-8'
                },
                files: {
                    './dist/css/styles.css': './src/sass/styles.sass'
                }
            }
        },

        watch: {
            sass: {
                files: ['./src/**/*.sass'],
                tasks: ['sass']
            },
            serviceWorker: {
                files: ['./src/js/service-worker/*.js'],
                tasks: ['webpack:workerDev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-sass');


    grunt.registerTask('dev', [
        "sass",
        "webpack-dev-server",
        "watch"
    ]);

    grunt.registerTask('devCss', [
        "sass",
        "watch"
    ]);
};
