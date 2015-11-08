'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var userData = require('../data/userData.json');
var MainContentsView = require('../views/mainContentsView');
var MainContentsModel = require('../models/mainContentsModel');

// !!Try!! APPRouterを定義する
// !!Try!! mainContents/:userIdで該当するユーザの情報を出力する
var MainContentsRouter = Marionette.AppRouter.extend({
});
module.exports = MainContentsRouter;
