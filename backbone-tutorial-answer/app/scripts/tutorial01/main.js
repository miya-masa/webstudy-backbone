'use strict';
// Backbonejs等モジュールの読み込み
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
// !!Try!! Viewモジュールの読み込み
var MainContentsView = require('./views/mainContentsView');

// !!Try!! 1. アプリケーションを定義し、スタートさせる
// !!Try!! 2. startイベントをフックしてビューを表示しよう
var app = new Marionette.Application();
app.on('start', function() {
  console.log('Hello World!!!!!!!');
  var myContentsView = new MainContentsView({
    el: '#main-contents'
  });
  myContentsView.render();
});
app.start();
