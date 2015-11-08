'use strict';
var Backbone = require('backbone');
Backbone.$ = require('jquery');
// !!Try!! モデル定義を作成し、モジュールを公開しよう
var MainContentsModel = Backbone.Model.extend({
  defaults: {
    name: '太郎',
    greeting: 'Hello'
  }
});
module.exports = MainContentsModel;
