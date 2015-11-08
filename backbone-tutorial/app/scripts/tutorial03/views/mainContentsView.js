'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var mainContentsTemplate = require('../templates/mainContentsTemplate.hbs');
// !!Try!! ボタンを押下したらフォームの値をViewに反映する
// !!Try!! View内のUIを定義する
// !!Try!! イベントリスナを定義する(UIイベント、モデルイベント)
var MainContentsView = Marionette.ItemView.extend({
  template: mainContentsTemplate
});
module.exports = MainContentsView;
