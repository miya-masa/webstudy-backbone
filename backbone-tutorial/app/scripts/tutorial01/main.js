var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var MainContentsView = require('./views/mainContentsView');
//var Handlebars = require('handlebars');
//Marionette.TemplateCache.prototype.compileTemplate = function() {
//  return Handlebars.compile(arguments);
//};

var app = new Marionette.Application();
app.on('start', function() {
  console.log('Hello World!!!!!!!');
  var myContentsView = new MainContentsView({
    el: '#main-contents'
  });
  myContentsView.render();
});
app.start();
