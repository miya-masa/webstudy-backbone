'use strict';
var Backbone = require('backbone');
Backbone.$ = require('jquery');
Backbone.LocalStrage = require('backbone.localstorage');
var MainContentsModel = require('../models/mainContentsModel');

var MainContentsCollection = Backbone.Collection.extend({
  model: MainContentsModel,
  localStorage: new Backbone.LocalStorage('userData')
});
module.exports = MainContentsCollection;
