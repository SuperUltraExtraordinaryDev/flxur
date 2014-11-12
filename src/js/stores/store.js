var Dispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/constants.js');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

/**
 * The event code which is to be emitted on change.
 */
var CHANGE_EVENT = 'change';

/**
 * Don't have a database set up yet ... so here we go.
 */
var _catalog = [
    {id: 1, title: 'Widget #1', cost:1},
    {id: 2, title: 'Widget #2', cost:2},
    {id: 3, title: 'Widget #3', cost:3}
];

/**
 * An array of all items currently in the cart.
 */
var _cartItems = [];

/**
 * Remove an item form the cart.
 */
function _removeItem(index) {
    _cartItems[index].inCart = false;
    _cartItems.splice(index, 1);
}

/**
 * Increase quantity of an item in the cart.
 */
function _increaseItem(index) {
    _cartItems[index].qty++;
}

/**
 * Decrease the quantity of an item in the cart.
 */
function _decreaseItem(index) {
    if (_cartItems[index].qty > 1) {
        _cartItems[index].qty--;
    }
    else {
        _removeItem(index);
    }
}

/**
 * Add an item to the cart or increase it's quantity.
 */
function _addItem(item) {
    if (!item.inCart) {
        item['qty'] = 1;
        item['inCart'] = true;
        _cartItems.push(item);
    }
    else {
        _cartItems.forEach(function(cartItem, index) {
            if (cartItem.id === item.id) {
                _increaseItem(index);
            }
        });
    }
}

/**
 * Stores encapsulate API functionality and register callbacks with the
 * dispatcher. The callback will recieve a payload from the dispatcher and
 * execute based upon the payload.
 *
 * Components register callbacks with stores as emmisions listeners. When an
 * emmission is generated, component callbacks will be invoked.
 */
var Store = merge(EventEmitter.prototype, {
    /**
     * Emit the CHANGE_EVENT which will trigger any component callbacks
     * registered with this store.
     */
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * Register a callback to be invoked upon CHANGE_EVENT emmisions.
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * Remove a callback.
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    /**
     * Get items in cart. This would typically fetch data from a database.
     */
    getCart: function() {
        return _cartItems;
    },

    /**
     * Get catalog items. This would typically fetch data from a database.
     */
    getCatalog: function() {
        return _catalog;
    },

    /**
     * Register a callback with the dispatcher which will recieve a payload
     * from the dispatcher. The callback will execute according to the payload.
     * The dispatcher's register method will return the index of the callback in
     * the dispatcher's list of callbacks.
     */
    dispatcherIndex: Dispatcher.register(function(payload) {
        var action = payload.action;
        switch(action.actionType) {
            case Constants.ADD_ITEM:
                _addItem(payload.action.item);
                break;

            case Constants.REMOVE_ITEM:
                _removeItem(payload.action.index);
                break;

            case Constants.INCREASE_ITEM:
                _increaseItem(payload.action.index);
                break;

            case Constants.DECREASE_ITEM:
                _decreaseItem(payload.action.index);
                break;
        }
        Store.emitChange();
        return true;
    })
})

module.exports = Store;
