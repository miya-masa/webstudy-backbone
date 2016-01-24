'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var userData = require('../data/userData.json');
var mainContentsCompositeTemplate = require('../templates/mainContentsCompositeTemplate.hbs');
var MainContentsCompositeChildView = require('../views/MainContentsCompositeChildView');

var MainContentsCompositeView = Marionette.CompositeView.extend({
  //ここから
  //ここまでの間に記述する
  onChildRemoveRow: function(childView, id) {
    this.collection.remove(id);
  },
  onClickBtnReset: function() {
    this.collection.reset();
    var models = [];
    _.chain(userData).each(function(e) {
      models.push(e);
    });
    this.collection.add(models);
  }

});

module.exports = MainContentsCompositeView;

