module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-beep');

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', '!src/clokan.min.js'],
            options: {
                globals: {
                    jQuery: false
                }
            }
        },
        bump: {
            files: ['package.json'],
            commit: false,
            createTag: false,
            tag: false,
            push: false,
        },
        cssmin: {
            prod: {
                files: {
                    'src/clokan.min.css': 'src/clokan.css'
                }
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: true,
                wrap: 'clokan',
                preserveComments: false
            },
            prod: {
                files: {
                    'src/clokan.min.js': [
                        //these are the js files to add to one
                        'src/elements.js',
                        'src/loader.js',
                        'src/events.js',
                        'src/clock.js',
                        'src/color.js'
                    ]
                }
            }
        },
        processhtml: {
            options: {
                process: true,
                strip: true
            },
            dev: {
                files: {
                    'index.html': ['src/index.html']
                }
            },
            prod: {
                files: {
                    'index.html': ['src/index.html']
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: true,
                singleRun: false,
                background: true
            }
        },
        watch: {
            files: ['<%= jshint.files %>', 'src/index.html'],
            tasks: ['jshint', 'beep:error:1', 'processhtml:dev', 'karma:unit', 'beep:error:3', 'beep:ok']
        }
    });
    //end initConfig


    grunt.registerTask('default', ['jshint', 'processhtml:dev', 'karma:unit']);
    grunt.registerTask('prepare', ['jshint', 'cssmin:prod', 'uglify:prod', 'processhtml:prod']);

};