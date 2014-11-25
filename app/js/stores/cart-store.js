'use strict';
/**
 * Cart datastore interface.
 */
var assign = require('object-assign');
var Constants = require('../constants/constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');
var BaseStore = require('./store.js');
var http = require('http');

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
        item.qty = 1;
        item.inCart = true;
        _cartItems.push(item);
    }
    else {
        _cartItems.forEach(function(cartItem, index) {
            if (cartItem._id === item._id) {
                _increaseItem(index);
            }
        });
    }
}

/**
 * The cart datastore interface.
 */
var Store = assign(new BaseStore(), {
    CHANGE_EVENT: 'CART_CHANGE_EVENT',

    /**
     * Get items in cart. This would typically fetch data from a database.
     */
    getCart: function() {
        return _cartItems;
    },

    /**
     * Register with the dispatcher to handle cart related actions.
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

            default:
                return true;
        }

        // Emit change event if a registered action took place.
        Store.emitChange();
        return true;
    })
});

module.exports = Store;
