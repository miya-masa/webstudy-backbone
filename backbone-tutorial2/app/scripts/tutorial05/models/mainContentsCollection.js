'use strict';
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var MainContentsModel = require('../models/mainContentsModel');
// !!Try!! コレクションを定義する
// modelに子要素となる型を指定する
var MainContentsCollection = Backbone.Collection.extend({
});
module.exports = MainContentsCollection;
