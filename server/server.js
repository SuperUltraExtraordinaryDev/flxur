'use strict';
/**
 * Express server.
 */
var mode = process.env.config || 'dev';
var config = require('./config/' + mode);
var bodyParser = require('body-parser');

var express = require('express');
var routes = require('./routes');
var app = express();

// Use body-parser middleware.
app.use(bodyParser.json());

// Bind routes to this app.
routes(app);

// Listen for requests.
app.listen(config.port);

// Just log some shit.
console.log('Using configuration: ' + mode);
console.log('Serving on port: ' + config.port);

module.exports = {
    app: app,
    config: config
};
