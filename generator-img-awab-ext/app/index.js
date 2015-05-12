'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Bem-vindo ao ' + chalk.green('Imagem WebApp Builder Extension') + '  generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Você deseja realizar o scaffold?',
      default: true
    }, {
      name: 'awabpath',
      message: 'Caminho do WebAppBuilder:',
      'default': 'C:\\Documentos\\arcgis-web-appbuilder-1.1'
    }, {
      name: 'appcode',
      message: 'Id da app de trabalho:',
      'default': '1'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
