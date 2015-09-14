var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

var NavLayoutView = Marionette.LayoutView.extend({
  template : '#layout-nav-view-template'
});

module.exports = NavLayoutView;
