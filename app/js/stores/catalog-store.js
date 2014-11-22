'use strict';
/**
 * Catalog datastore interface.
 */
var assign = require('object-assign');
var Constants = require('../constants/constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var http = require('http');

/**
 * The catalog datastore interface.
 */
var Store = assign(new EventEmitter(), {
    CHANGE_EVENT: 'CATALOG_CHANGE_EVENT',

    /**
     * Emit the CHANGE_EVENT which will trigger any component callbacks
     * registered with this store. Pass along any additional arguments
     * provided to this method as arguments to the callbacks.
     */
    emitChange: function() {
        var args = [Store.CHANGE_EVENT, arguments[0]];
        this.emit.apply(this, args);
    },

    /**
     * Register a callback to be invoked upon CHANGE_EVENT emmisions.
     */
    addChangeListener: function(callback) {
        this.on(Store.CHANGE_EVENT, callback);
    },

    /**
     * Remove a callback.
     */
    removeChangeListener: function(callback) {
        this.removeListener(Store.CHANGE_EVENT, callback);
    },

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
