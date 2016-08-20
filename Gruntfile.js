module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            bin: {
                options: {
                    banner: '\'use strict\';\n\n',
                    process: function (src, filepath) {
                        return (`/*    ${filepath}    */\n${src}\n`);
                    }
                },
                src: 'src/**/*.js',
                dest: 'bin/super-state.js'
            }
        },
        uglify: {
            bin: {
                options: {
                    banner: '/*    <%= pkg.name %> <%= pkg.version %> (Build date: <%= grunt.template.today(\'yyyy-mm-dd\') %>)    */\n'
                },
                src: 'bin/super-state.js',
                dest: 'bin/super-state.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', 'Build the angular super state project.', function () {
        grunt.task.run('concat:bin');
        grunt.task.run('uglify:bin');
    });

};