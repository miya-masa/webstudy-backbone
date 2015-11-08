'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
// !!Try!! テンプレートの読み込み
var mainContentsTemplate = require('../templates/mainContentsTemplate.hbs');
// !!Try!! テンプレートを利用してViewを定義する
var MainContentsView = Marionette.ItemView.extend({
  template: mainContentsTemplate
});
// !!Try!! 作ったモジュールを公開する
module.exports = MainContentsView;
