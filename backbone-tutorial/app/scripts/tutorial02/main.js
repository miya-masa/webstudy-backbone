'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var MainContentsView = require('./views/mainContentsView');
// !!Try!! モデルを読み込む

var app = new Marionette.Application();
app.on('start', function() {
  // !!Try!! モデルからインスタンスを生成する
  // !!Try!! 生成したモデルオブジェクトをビューと関連付ける。
  var myContentsView = new MainContentsView({
    el: '#main-contents',
  });
  myContentsView.render();
});
app.start();
