/************************************
*
* Grunt
* WebAppBuilder
* Imagem / Professional Services
*
************************************/
module.exports = function(grunt) {

  // Substitua os para seus caminhos locais
  // ex:
  //var appDir = '/Users/vmachuca/Documents/Labs/arcgis-web-appbuilder-1.1/server/apps/2';
  //var stemappDir = '/Users/vmachuca/Documents/Labs/arcgis-web-appbuilder-1.1/client/stemapp';
  var appDir = '/Users/vmachuca/Documents/Labs/arcgis-web-appbuilder-1.1/server/apps/2';
  var stemappDir = '/Users/vmachuca/Documents/Labs/arcgis-web-appbuilder-1.1/client/stemapp';

  grunt.initConfig({
    watch: {
      main: {
        files: ['src/**'],
        tasks: ['sync'],
        options: {
          spawn: false
        }
      }
    },

    sync: {
      main: {
        files: [{
          cwd: 'src',
          src: ['**'],
          dest: appDir
        }, {
          cwd: 'src',
          src: ['**'],
          dest: stemappDir
        }],
        verbose: true // Exibe no log as menssagens quando copiar os arquivos
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sync');

  grunt.registerTask('default', ['sync', 'watch']);
};
