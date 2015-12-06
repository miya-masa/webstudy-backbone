'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var mainContentsLayoutTemplate = require('../templates/mainContentsLayoutTemplate.hbs');

var MainContentsLayoutView = Marionette.LayoutView.extend({
  template: mainContentsLayoutTemplate,
  regions: {
    header: '#header',
    content: '#content',
    footer: '#footer'
  }
});
module.exports = MainContentsLayoutView;

