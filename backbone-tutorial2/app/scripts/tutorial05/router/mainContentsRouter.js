'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var userData = require('../data/userData.json');
var MainContentsView = require('../views/mainContentsView');
var MainContentsCompositeView = require('../views/mainContentsCompositeView');
var MainContentsModel = require('../models/mainContentsModel');
var MainContentsCollection = require('../models/mainContentsCollection');

var MainContentsRouter = Marionette.AppRouter.extend({

  routes: {
    'mainContents/showAll': 'showAll',
    'mainContents/:userId': 'showUser'
  },
  showUser: function(id) {
    var mainContentsModel = new MainContentsModel(userData[id]);
    var myContentsView = new MainContentsView({
      el: '#main-contents',
      model: mainContentsModel
    });
    myContentsView.render();
  },
  showAll: function() {
    // 全ユーザ表示
    // !!Try!! コレクションを生成 userDataを詰め込む => _を利用してみる
    // !!Try!! CompositeViewインスタンスを生成し、elは#main-contents、collectionに生成したcollectionをセットする
    // レンダリングする(render)
  }
});
module.exports = MainContentsRouter;

