'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var MainContentsView = require('../views/mainContentsView');
var MainContentsModel = require('../models/mainContentsModel');


var MainContentsRouter = Marionette.AppRouter.extend({

  routes: {
    'mainContents/main/:id': 'main',
    'mainContents/sub/:id': 'sub',
    'mainContents': 'foo'
  },
  main: function(id) {
    console.log('Hello Main');
    var mainContentsModel = new MainContentsModel({
      name: 'Miya',
      greeting: 'こんにちは'
    });
    var myContentsView = new MainContentsView({
      el: '#main-contents',
      model: mainContentsModel
    });
    myContentsView.render();
  },
  sub: function(id) {
    console.log('Hello Main');
  },
  foo: function(id) {}

});

module.exports = MainContentsRouter;
