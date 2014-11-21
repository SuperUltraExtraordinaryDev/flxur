'use strict';
/**
 * Server routes.
 * Handle things like API calls and authentication. Route all other requests to frontend.
 */
var Catalog = require('./models/catalog');

module.exports = function(app) {

    /**
     * Return all catalog items.
     */
    app.get('/api/v1/catalog', function(req, res) {
        Catalog.CatalogItem.find({}, function(err, catalogItems) {
            // Send error if one occured.
            if (err) res.send(err);

            // Return all catalog items.
            res.json(catalogItems);
        });
    });

    /**
     * TODO(TheDodd): add route for create.
     */

    /**
     * TODO(TheDodd): add route for delete.
     */

    /**
     * Route all non API requests to frontend.
     */
    app.get('*', function(req, res) {
        res.sendfile('../dist/index.html');
    });
};
