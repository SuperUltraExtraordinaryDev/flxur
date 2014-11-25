'use strict';
/**
 * Catalog datastore interface.
 */
var assign = require('object-assign');
var Constants = require('../constants/constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');
var BaseStore = require('./store.js');
var http = require('http');

/**
 * The catalog datastore interface.
 */
var Store = assign(new BaseStore(), {
    CHANGE_EVENT: 'CATALOG_CHANGE_EVENT',

    /**
     * Get catalog items.
     */
    getCatalog: function() {
        http.get('/api/v1/catalog', function(res) {
            res.on('data', function(data) {
                Store.emitChange(JSON.parse(data));
            });

            res.on('error', function(error) {
                console.log(error);
            });
        });
    },

    /**
     * Register with the dispatcher to handle catalog related actions.
     */
    dispatcherIndex: Dispatcher.register(function(payload) {
        var action = payload.action;
        switch(action.actionType) {

            default:
                break;
        }
        return true;
    })
});

module.exports = Store;
