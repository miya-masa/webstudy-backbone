var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

var NavbarHeaderView = Marionette.ItemView.extend({
  template: '#region-navbar-header-template',
});
module.exports = NavbarHeaderView ;
