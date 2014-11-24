'use strict';
/**
 * Application actions.
 */
var Constants = require('../constants/constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var Actions = {
    addItem: function(item) {
        Dispatcher.handleViewAction({
            actionType: Constants.ADD_ITEM,
            item: item
        });
    },
    removeItem: function(index) {
        Dispatcher.handleViewAction({
            actionType: Constants.REMOVE_ITEM,
            index: index
        });
    },
    decreaseItem: function(index) {
        Dispatcher.handleViewAction({
            actionType: Constants.DECREASE_ITEM,
            index: index
        });
    },
    increaseItem: function(index) {
        Dispatcher.handleViewAction({
            actionType: Constants.INCREASE_ITEM,
            index: index
        });
    }
};

module.exports = Actions;
