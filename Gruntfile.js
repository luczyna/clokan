module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-bump');

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: false
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'processhtml:dev']
        },
        bump: {
            files: ['package.json'],
            commit: false,
            createTag: false,
            push: false,
        },
        cssmin: {
            prod: {
                files: [{
                    expand: true,
                    src: ['*.css', '!*.min.css'],
                    dest: 'clokan',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            options: {
                mangle: true
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
            options: {},
            dev: {
                'index.html': 'src/index.html'
            },
            prod: {
                'index.html': 'src/index.html'
            }
        }
    });


    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('prepare', ['jshint', 'cssmin:prod', 'uglify:prod', 'processhtml:prod']);

};