'use strict';
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var MainContentsModel = require('../models/mainContentsModel');

var MainContentsCollection = Backbone.Collection.extend({
  model: MainContentsModel
});
module.exports = MainContentsCollection;
