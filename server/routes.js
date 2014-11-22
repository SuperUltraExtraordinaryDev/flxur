'use strict';
/**
 * Server routes.
 * Handle things like API calls and authentication. Route all other requests to frontend.
 */
var express = require('express');
var router = express.Router();
var Catalog = require('./models/catalog');

module.exports = function(app) {
    /**
     * Return all catalog items.
     */
    router.route('/v1/catalog')
        .get(function(req, res) {
            Catalog.CatalogItem.find({}, function(err, catalogItems) {
                // Send error if one occured.
                if (err) res.send(err);

                // Return all catalog items.
                console.log('Data fetched via mongoose:');
                console.log(catalogItems);
                res.json(catalogItems);
            });
        });

    /**
     * TODO(TheDodd): add route for create.
     */

    /**
     * TODO(TheDodd): add route for delete.
     */

    app.use('/api', router);
};
