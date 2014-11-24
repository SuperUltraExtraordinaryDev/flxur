'use strict';
/**
 * Catalog routes.
 */
var express = require('express');
var router = express.Router();
var Catalog = require('./models/catalog');
var objectid = require('objectid');

module.exports = function(app) {
    /**
     * Register everything on this router under '/api'.
     */
    app.use('/api', router);

    /**
     * ID parameter handler.
     */
    router.param('resourceId', function(req, res, next, id) {
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
    router.route('/v1/catalog')
        /**
         * Get all catalog items.
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
         * Create new catalog items.
         */
        .post(function(req, res) {
            new Catalog.CatalogItem(req.body).save(function(err, product, numberAffected) {
                if (err) throw err;
                console.log(product);
                res.status(200).json(product);
            });
        });

    /**
     * Individual catalog resources.
     */
    router.route('/v1/catalog/:resourceId')
        .delete(function(req, res) {
            Catalog.CatalogItem.findByIdAndRemove(req.resourceId, function(product) {
                // Yea, this is jank, but product is not being properly populated.
                res.status(200).send('OK');
            });
        });
};
