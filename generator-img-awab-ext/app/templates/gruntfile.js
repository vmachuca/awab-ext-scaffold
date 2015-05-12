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
        copy: {
            main: {},
            js: {
              expand: true,
              cwd: 'src/widgets',
              src: '**/*.js',
              dest: 'src/widgets',
              filter: function(filepath) {
                var path = require('path');
                var destFinal = filepath.split(path.sep).slice(0,filepath.split(path.sep).length -1).join(path.sep);
                grunt.log.writeln(("Criando o diretorio '"+destFinal+"'")["cyan"].bold);
                grunt.file.mkdir(destFinal.concat(path.sep).concat("specs"));
                return false;
              }
            }
        },
        watch: {
            main: {
                files: ['src/**'],
                tasks: ['copy:js','sync'],
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');
    grunt.registerTask('default', [
        'copy:js',
        'sync',
        'watch'
    ]);
    grunt.registerTask('test', ['karma']);
};
