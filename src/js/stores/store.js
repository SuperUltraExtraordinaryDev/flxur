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
 * ...
 */
var Store = merge(EventEmitter.prototype, {
    /**
     * ...
     */
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * ...
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * ...
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    /**
     * ...
     */
    getCart: function() {
        return _cartItems;
    },

    /**
     * ...
     */
    getCatalog: function() {
        return _catalog;
    },

    /**
     * ...
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
