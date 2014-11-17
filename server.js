/**
 * Express server.
 */
var express = require('express');
var app = express();

// Serve content from dist.
app.use("/", express.static(__dirname + "/dist/"));

// Just server the index.html when URL is requested.
app.get('/', function(req, res) {
    res.sendFile('index.html');
});

// Listen for requests.
app.listen(8080);
