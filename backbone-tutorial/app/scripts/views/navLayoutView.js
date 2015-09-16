var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

var NavLayoutView = Marionette.LayoutView.extend({
  template: '#layout-nav-view-template',
  regions: {
    regionNavbarHeader: '#region-navbar-header',
    regionNavbar: '#region-navbar'
  }
});
module.exports = NavLayoutView;
