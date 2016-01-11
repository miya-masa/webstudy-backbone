'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = require('jquery');
var mainContentsCompositeChildTemplate = require('../templates/mainContentsCompositeChildTemplate.hbs');

var MainContentsCompositeChildView = Marionette.ItemView.extend({
  tagName: 'tr',
  template: mainContentsCompositeChildTemplate,
  ui: {
    'btnDelete': '.btn-delete'
  },
  events: {
    'click @ui.btnDelete': 'onClickBtnDelete'
  },
  onClickBtnDelete: function() {
    console.log('onClickBtnDelete:' + JSON.stringify(this.model));
    this.trigger('remove:row', this.model.get('id'));
  }
});

module.exports = MainContentsCompositeChildView;
