'use strict';
/**
 * Catalog models.
 */
var mongoose = require('mongoose');

/**
 * Schema and model for catalog items.
 */
var CatalogItemSchema = new mongoose.Schema({
    title: String,
    cost: Number
}, {collection: 'catalog'});
var CatalogItem = mongoose.model('CatalogItem', CatalogItemSchema);

module.exports = {
    CatalogItem: CatalogItem
};
