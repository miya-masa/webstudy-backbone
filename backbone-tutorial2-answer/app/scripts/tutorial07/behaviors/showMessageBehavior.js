'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

var ShowMessageBehavior = Marionette.Behavior.extend({

  ui: {
    'message': '.message'
  },

  onShowMessage: function(message) {
    this.ui.message.text(message);
  }

});
module.exports = ShowMessageBehavior;

