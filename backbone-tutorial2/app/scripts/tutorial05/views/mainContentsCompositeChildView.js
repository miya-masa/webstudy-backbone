'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var mainContentsCompositeChildTemplate = require('../templates/mainContentsCompositeChildTemplate.hbs');

//!!Try!! コレクションの一要素分のViewを作成する.
// テーブルの一行を一要素とするためこのViewのHTMLタグは'tr'
// 削除ボタン押下イベントをフックしてイベント発火する.(remove:row)
// その際に一要素分のidを引数として渡す
var MainContentsCompositeChildView = Marionette.ItemView.extend({
  // here
});

module.exports = MainContentsCompositeChildView;

