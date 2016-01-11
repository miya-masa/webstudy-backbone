'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

var ShowMessageBehavior = Marionette.Behavior.extend({
  // 実装する
  onShowMessage: function(message) {
  },

});
module.exports = ShowMessageBehavior;

