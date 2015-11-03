'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var mainContentsTemplate = require('../templates/mainContentsTemplate.hbs');
var MainContentsView = Marionette.ItemView.extend({
  template: mainContentsTemplate
});
module.exports = MainContentsView;
