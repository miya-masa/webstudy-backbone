'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var contentTemplate = require('../../templates/parts/ContentTemplate.hbs');
var ContentView = Marionette.ItemView.extend({
  template: contentTemplate
});
module.exports = ContentView;
