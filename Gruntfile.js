module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            default: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: false,
                    sourceMap: false,
                    preserveComments: false,
                    report: "min",
                    except: []
                },
                files: {
                    'dist/js/bundle.js': ['dist/js/bundle.js'],
                }
            }
        },

        webpack: {
            prod: require("./webpack.prod.config.js"),
            dev: require("./webpack.dev.config.js")
        },

        sass: {
            dist: {
                options: {
                    lineNumbers: false,
                    includePaths: [
                        './src/sass/'
                    ],
                    outputStyle: 'compressed',
                    sourceMap: false,
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
            js: {
                files: ['./src/**/*.js', './src/**/*.jsx'],
                tasks: ['webpack:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('dist', [
        'sass',
        'webpack:prod',
        'uglify'
    ]);

    grunt.registerTask('dev', [
        "sass",
        "webpack:dev",
        "watch"
    ]);
};
