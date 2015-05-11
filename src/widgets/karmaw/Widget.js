define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'karmaw',
    // this property is set by the framework when widget is loaded.
    // name: 'karmaw',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('karmaw::postCreate');
    }

    // startup: function() {
    //   this.inherited(arguments);
    //   console.log('karmaw::startup');
    // },

    // onOpen: function(){
    //   console.log('karmaw::onOpen');
    // },

    // onClose: function(){
    //   console.log('karmaw::onClose');
    // },

    // onMinimize: function(){
    //   console.log('karmaw::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('karmaw::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('karmaw::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('karmaw::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('karmaw::onPositionChange');
    // },

    // resize: function(){
    //   console.log('karmaw::resize');
    // }

//methods to communication between widgets:

  });

});
