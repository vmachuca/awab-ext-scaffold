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

    this.log(yosay(
      'Bem-vindo ao ' + chalk.green('Imagem WebApp Builder Extension') + '  generator!'
    ));
    this.log(chalk.yellow('O gerador visa padronizar o processo de extensão e teste.'));

    var prompts = [{
      name: 'awabpath',
      message: 'Caminho do WebApp Builder:',
      'default': 'C:\\Documentos\\arcgis-web-appbuilder-1.1'
    }, {
      name: 'appcode',
      message: 'Id da app de trabalho:',
      'default': '1'
    }];

    this.prompt(prompts, function (props) {
      var isWin = /^win/.test(process.platform);
      this.props = props;
      this.steamapp = props.awabpath.trim().replace(/\\/gi,"/").trim() + ( isWin ? '/client/stemapp' : '/client/stemapp');
      this.apppath = props.awabpath.trim().replace(/\\/gi,"/").trim() + (isWin ? "/server/apps/" : "/server/apps/") + props.appcode.trim();
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('package.json')
      );

      this.fs.copyTpl(
        this.templatePath('gruntfile.js'),
        this.destinationPath('gruntfile.js'),
        { apppath: this.apppath, steamapp: this.steamapp }
      );

      this.fs.copy(
        this.templatePath('karma.conf.js'),
        this.destinationPath('karma.conf.js')
      );

      this.fs.copy(
        this.templatePath('src/.gitignore'),
        this.destinationPath('src/.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
