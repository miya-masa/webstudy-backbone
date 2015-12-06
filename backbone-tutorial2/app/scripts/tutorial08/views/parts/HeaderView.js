'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var headerTemplate = require('../../templates/parts/HeaderTemplate.hbs');
var HeaderView = Marionette.ItemView.extend({
  template: headerTemplate
});
module.exports = HeaderView;

