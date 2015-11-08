'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var MainContentsView = require('./views/mainContentsView');
// !!Try!! モデルを読み込む
var MainContentsModel = require('./models/mainContentsModel');

var app = new Marionette.Application();
app.on('start', function() {
  // !!Try!! モデルからインスタンスを生成する
  var mainContentsModel = new MainContentsModel({
    name : 'Miya',
    greeting : 'こんにちは'
  });
  // !!Try!! 生成したモデルオブジェクトをビューと関連付ける。
  var myContentsView = new MainContentsView({
    el: '#main-contents',
    model: mainContentsModel
  });
  myContentsView.render();
});
app.start();
