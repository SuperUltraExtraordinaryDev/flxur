'use strict';
/**
 * Catalog models.
 */
var config = require('../config/' + (process.env.config || 'dev'));
var mongoose = require('mongoose');
mongoose.createConnection(config.mongodb_url);

/**
 * Schema and model for catalog items.
 */
var CatalogItemSchema = {
    title: String,
    cost: Number
};
var CatalogItem = mongoose.model('catalog', CatalogItemSchema);

module.exports = {
    CatalogItem: CatalogItem
};
