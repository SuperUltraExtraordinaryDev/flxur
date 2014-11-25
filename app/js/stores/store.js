'use strict';
/**
 * A template store module.
 */
var assign = require('object-assign');
var Constants = require('../constants/constants.js');
var EventEmitter = require('events').EventEmitter;

/**
 * Stores encapsulate API functionality and register callbacks with the
 * dispatcher. The callback will receive a payload from the dispatcher and
 * execute based upon the payload.
 *
 * Components register callbacks with stores as emissions listeners. When an
 * emission is generated, component callbacks will be invoked.
 *
 * Should create a new Store subclass for every different type of change event
 * to be subscribed to. Something like:
 * ``var NewStore = assign(new Store(), {...}``.
 */
function Store() {}
Store.prototype = assign(new EventEmitter(), {
    CHANGE_EVENT: 'BASE_CHANGE_EVENT',

    /**
     * Emit the CHANGE_EVENT which will trigger any component callbacks
     * registered with this store. Pass along any additional arguments
     * provided to this method as arguments to the callbacks.
     */
    emitChange: function() {
        var args = [this.CHANGE_EVENT, arguments[0]];
        this.emit.apply(this, args);
    },

    /**
     * Register a callback to be invoked upon CHANGE_EVENT emissions.
     */
    addChangeListener: function(callback) {
        this.on(this.CHANGE_EVENT, callback);
    },

    /**
     * Remove a callback.
     */
    removeChangeListener: function(callback) {
        this.removeListener(this.CHANGE_EVENT, callback);
    },

    /**
     * Register a callback with the dispatcher which will receive a payload
     * from the dispatcher. The callback will execute according to the payload.
     * The dispatcher's register method will return the index of the callback in
     * the dispatcher's list of callbacks.
     * Should look something like: ``Dispatcher.register(function(payload) {...}``.
     */
    dispatcherIndex: null
});

module.exports = Store;
