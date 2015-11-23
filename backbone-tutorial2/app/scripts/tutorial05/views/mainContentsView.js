'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var mainContentsTemplate = require('../templates/mainContentsTemplate.hbs');
var MainContentsView = Marionette.ItemView.extend({
  template: mainContentsTemplate,

  ui: {
    buttonApply: '#apply',
    textName: '#name',
    textGreeting: '#greeting'
  },


  events: {
    'click @ui.buttonApply': 'onClickButtonApply'
  },

  modelEvents: {
    'change': 'render'
  },

  onRender: function() {
    console.log('onRender');
    this.ui.textGreeting.focus();
  },

  onClickButtonApply: function() {
    console.log('start onClickButtonApply');
    var name = this.ui.textName.val();
    var greeting = this.ui.textGreeting.val();
    console.log('name:%s', name);
    console.log('greeting:%s', greeting);
    this.model.set({
      name: name,
      greeting: greeting
    });
  }
});
module.exports = MainContentsView;
