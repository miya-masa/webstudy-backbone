'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var MainContentsRouter = require('./router/mainContentsRouter');

var app = new Marionette.Application();
app.on('start', function() {
  // !!Try!! Routerを初期化する
  Backbone.history.start();
});
app.start();
