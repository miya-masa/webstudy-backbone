'use strict';
var Backbone = require('backbone');
Backbone.$ = require('jquery');

var MainContentsModel = Backbone.Model.extend({
  defaults: {
    name: '太郎',
    greeting: 'Hello'
  }
});
module.exports = MainContentsModel;
