'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');
var userData = require('../data/userData.json');
var mainContentsCompositeTemplate = require('../templates/mainContentsCompositeTemplate.hbs');
var MainContentsCompositeChildView = require('../views/MainContentsCompositeChildView');

var MainContentsCompositeView = Marionette.CompositeView.extend({
  template: mainContentsCompositeTemplate,
  childView: MainContentsCompositeChildView,
  childViewContainer: '.child-container',
  childEvents: {
    'remove:row': 'onChildRemoveRow'
  },
  ui: {
    'btnReset': '.btn-reset',
    'btnSave': '.btn-save'
  },
  events: {
    'click @ui.btnReset': 'onClickBtnReset',
    'click @ui.btnSave': 'onClickBtnSave'
  },
  onChildRemoveRow: function(childView) {
    // 削除する
  },
  onClickBtnReset: function() {
    this.collection.reset();
    var models = [];
    _.chain(userData).each(function(e) {
      models.push(e);
    });
    this.collection.add(models);
  },
  onClickBtnSave: function() {
    // すべて保存する
  }
});

module.exports = MainContentsCompositeView;
