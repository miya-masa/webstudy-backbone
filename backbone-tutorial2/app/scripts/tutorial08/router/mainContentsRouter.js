'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');
var mainContentsController = require('./MainContentsController');

var MainContentsRouter = Marionette.AppRouter.extend({

  controller: mainContentsController,
  appRoutes: {
    'mainContents/showAll': 'showAll',
    'mainContents/showLayout': 'showLayout',
    'mainContents/:userId': 'showUser'
  },
});
module.exports = MainContentsRouter;
