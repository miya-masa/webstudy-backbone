'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var footerTemplate = require('../../templates/parts/FooterTemplate.hbs');
var FooterView = Marionette.ItemView.extend({
  template: footerTemplate
});
module.exports = FooterView;

