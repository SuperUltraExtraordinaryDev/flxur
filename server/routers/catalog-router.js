'use strict';
/**
 * Catalog routes.
 */
var express = require('express');
var Catalog = require('../models/catalog');
var catalogRouter = express.Router();
var objectid = require('objectid');

/**
 * ID parameter handler.
 */
catalogRouter.param('resourceId', function(req, res, next, id) {
    if (objectid.isValid(id)) {
        req.resourceId = id;
        next();
    } else {
        res.status(400).send('Invalid ID specifier: ' + id);
    }
});

/**
 * Catalog list resources.
 */
catalogRouter.route('/catalog')
    /**
     * Catalog list GET handler.
     */
    .get(function(req, res) {
        Catalog.CatalogItem.find({}, function(err, catalogItems) {
            // Send error if one occurred.
            if (err) res.send(err);

            // Return all catalog items.
            res.json(catalogItems);
        });
    })

    /**
     * Catalog list POST handler.
     */
    .post(function(req, res) {
        new Catalog.CatalogItem(req.body).save(function(err, product, numberAffected) {
            if (err) throw err;
            console.log(product);
            res.status(200).json(product);
        });
    });

/**
 * Catalog resource DELETE handler.
 */
catalogRouter.route('/catalog/:resourceId')
    .delete(function(req, res) {
        Catalog.CatalogItem.findByIdAndRemove(req.resourceId, function(product) {
            // Yea, this is jank, but product is not being properly populated.
            res.status(200).send('OK');
        });
    });

// Expose catalog router.
module.exports = catalogRouter;
