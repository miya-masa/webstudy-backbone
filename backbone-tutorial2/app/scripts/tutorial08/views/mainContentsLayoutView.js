'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var mainContentsLayoutTemplate = require('../templates/mainContentsLayoutTemplate.hbs');

var MainContentsLayoutView = Marionette.LayoutView.extend({
  template: mainContentsLayoutTemplate,
  regions: {
    /** regionsを定義する **/
  }
});
module.exports = MainContentsLayoutView;

