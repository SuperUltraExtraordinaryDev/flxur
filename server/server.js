'use strict';
/**
 * Express server.
 */
var mode = process.env.config || 'dev';
var config = require('./config/' + mode);
var bodyParser = require('body-parser');
var cors = require('cors');

var express = require('express');
var routes = require('./routes');
var app = express();

// Use body-parser middleware.
app.use(bodyParser.json());

// Use CORS middleware.
// app.use(cors());

// Set the root directory appropriately.
app.use('/', express.static(__dirname + '/../dist/'));

// Bind routes to this app.
routes(app);

// Listen for requests.
app.listen(config.port);

// Just log some shit.
console.log('Using configuration: ' + mode);
console.log('Serving on port: ' + config.port);
