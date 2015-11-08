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

  routes: {
    'mainContents/:userId': 'showUser',
  },
  showUser: function(id) {
    var mainContentsModel = new MainContentsModel(userData[id]);
    var myContentsView = new MainContentsView({
      el: '#main-contents',
      model: mainContentsModel
    });
    myContentsView.render();
  }
});
module.exports = MainContentsRouter;
