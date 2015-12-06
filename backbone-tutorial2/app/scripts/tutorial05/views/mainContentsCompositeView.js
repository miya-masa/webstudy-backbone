'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var userData = require('../data/userData.json');
var mainContentsCompositeTemplate = require('../templates/mainContentsCompositeTemplate.hbs');
var MainContentsCompositeChildView = require('../views/MainContentsCompositeChildView');
// !!Try!! ComositeViewを定義する
// childView属性を指定する(クラスを指定)
// childViewContainerとなるセレクターを指定する'.child-container'
// 子ビューのeventsをリスンする(childEvents)。remode:rowイベントをフックするように指定する
// イベントハンドラは'onChildRemoveRow'
var MainContentsCompositeView = Marionette.CompositeView.extend({
  template : mainContentsCompositeTemplate,
  //start
  //end
  events: {
    'click @ui.btnReset': 'onClickBtnReset'
  },
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

