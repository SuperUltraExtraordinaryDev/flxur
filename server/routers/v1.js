'use strict';
/**
 * API v1 routes.
 */
var V1_BASE_PATH = '/api/v1';
var express = require('express');
var cartRouter = require('./cart-router.js');
var catalogRouter = require('./catalog-router.js');

/**
 * Register pertinent routers with given application instance.
 * @param {express} app - The express application instance to register routers with.
 */
module.exports = function(app) {
    app.use(V1_BASE_PATH, cartRouter);
    app.use(V1_BASE_PATH, catalogRouter);
};
