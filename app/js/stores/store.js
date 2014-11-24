'use strict';
/**
 * A template store module.
 *
 * *NOTE:* This is not actually being used currently.
 */
var assign = require('object-assign');
var Constants = require('../constants/constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var http = require('http');

/**
 * Stores encapsulate API functionality and register callbacks with the
 * dispatcher. The callback will receive a payload from the dispatcher and
 * execute based upon the payload.
 *
 * Components register callbacks with stores as emissions listeners. When an
 * emission is generated, component callbacks will be invoked.
 */
var Store = assign(new EventEmitter(), {
    CHANGE_EVENT: 'BASE_CHANGE_EVENT',

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
     * Register a callback to be invoked upon CHANGE_EVENT emissions.
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
     * Register a callback with the dispatcher which will receive a payload
     * from the dispatcher. The callback will execute according to the payload.
     * The dispatcher's register method will return the index of the callback in
     * the dispatcher's list of callbacks.
     */
    dispatcherIndex: Dispatcher.register(function(payload) {
        var action = payload.action;
        switch(action.actionType) {
            /**
             * Register cases above to perform needed actions based on the action
             * received. Don't forget to call ``Store.emitChange`` when needed.
             */
            default:
                break;
        }
        return true;
    })
});

module.exports = Store;
