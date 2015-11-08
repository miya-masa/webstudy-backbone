'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var MainContentsView = require('./views/mainContentsView');
var MainContentsModel = require('./models/mainContentsModel');

var app = new Marionette.Application();
app.on('start', function() {
  var mainContentsModel = new MainContentsModel({
    name : 'Miya',
    greeting : 'こんにちは'
  });
  var myContentsView = new MainContentsView({
    el: '#main-contents',
    model: mainContentsModel
  });
  myContentsView.render();
});
app.start();
