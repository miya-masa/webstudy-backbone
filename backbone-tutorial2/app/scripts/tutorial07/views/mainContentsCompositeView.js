'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');
var ShowMessageBehavior = require('../behaviors/showMessageBehavior');
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
    'btnSave': '.btn-save',
  },
  events: {
    'click @ui.btnReset': 'onClickBtnReset',
    'click @ui.btnSave': 'onClickBtnSave'
  },

  behaviors: {
    // 実装する
  },

  onChildRemoveRow: function(childView) {
    var childModel = childView.model;
    this.collection.remove(childModel.get('id'));
    var self = this;
    childModel.destroy().done(function() {
      // 削除後
    });
  },


  onClickBtnReset: function() {
    this.collection.reset();
    var models = [];
    _.chain(userData).each(function(e) {
      models.push(e);
    });
    this.collection.add(models, {
      silent: true
    });
    this.render();
  },

  onClickBtnSave: function() {
    var self = this;
    var d = new Backbone.$.Deferred();
    var p = d.promise();
    var savedId = [];
    this.collection.each(function(e) {
      p = p.then(function() {
        var d = new Backbone.$.Deferred();
        console.log('save' + e.get('id'));
        e.save().then(function() {
          savedId.push(e.get('id'));
          d.resolve();
        });
        return d.promise();
      });
    });
    p.then(function() {
      // 保存後
    });
    d.resolve();
  }
});

module.exports = MainContentsCompositeView;
