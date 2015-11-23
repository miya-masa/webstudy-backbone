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
var MainContentsLayoutView = require('../views/mainContentsLayoutView');

var mainContentsController = {
  showUser: function(id) {
    var mainContentsModel = new MainContentsModel(userData[id]);
    var myContentsView = new MainContentsView({
      el: '#main-contents',
      model: mainContentsModel
    });
    myContentsView.render();
  },
  showLayout: function() {
    console.log('showLayout');
    var mainContentsLayoutView = new MainContentsLayoutView({
      el: '#main-contents'
    });
    mainContentsLayoutView.render();
  },

  showAll: function() {
    // 全ユーザ表示
    var mainContentsCollection = new MainContentsCollection();
    mainContentsCollection.fetch().done(function() {
      var mainContentsCompositeView = new MainContentsCompositeView({
        el: '#main-contents',
        collection: mainContentsCollection
      });
      mainContentsCompositeView.render();
    });
  }
};
module.exports = mainContentsController;
