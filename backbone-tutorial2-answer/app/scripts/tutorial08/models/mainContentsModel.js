'use strict';
var Backbone = require('backbone');
Backbone.$ = require('jquery');
Backbone.LocalStrage = require('backbone.localstorage');

var MainContentsModel = Backbone.Model.extend({
  localStorage: new Backbone.LocalStorage('userData'),
  defaults: {
    name: '太郎',
    greeting: 'Hello'
  }
});
module.exports = MainContentsModel;
