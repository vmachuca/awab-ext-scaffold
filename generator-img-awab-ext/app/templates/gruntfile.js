/************************************
*
* Grunt
* WebAppBuilder
* Imagem / Professional Services
*
************************************/
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-karma');
    var appDir = '<%= apppath %>';
    var stemappDir = '<%= steamapp %>';
    grunt.initConfig({
        watch: {
            main: {
                files: ['src/**'],
                tasks: ['sync'],
                options: { spawn: false }
            }
        },
        sync: {
            main: {
                files: [
                    {
                        cwd: 'src',
                        src: ['**'],
                        dest: appDir
                    },
                    {
                        cwd: 'src',
                        src: ['**'],
                        dest: stemappDir
                    }
                ],
                verbose: true    // Exibe no log as menssagens quando copiar os arquivos
            }
        },
        karma: {
            'unit': {
                'options': {
                    'autoWatch': false,
                    'browsers': [
                        'PhantomJS',
                        'Chrome',
                        'Firefox',
                        'Safari',
                        'IE'
                    ],
                    'configFile': './karma.conf.js',
                    'singleRun': true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');
    grunt.registerTask('default', [
        'sync',
        'watch'
    ]);
    grunt.registerTask('test', ['karma']);
};
