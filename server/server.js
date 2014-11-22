'use strict';
/**
 * Express server.
 */
var mode = process.env.config || 'dev';
var config = require('./config/' + mode);
var routes = require('./routes');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var app = express();

// Configure MongoDB connections.
mongoose.connect(config.mongodb_url);

// Use body-parser middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use CORS middleware.
app.use(cors());

// Bind routes to this app.
routes(app);

// Set the root directory appropriately.
app.use(express.static(__dirname + '/../dist/'));

// Route all non API requests to frontend.
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: '/../dist/'});
});

// Listen for requests.
app.listen(config.port);

// Just log some shit.
console.log('Using configuration: ' + mode);
console.log('Serving on port: ' + config.port);
