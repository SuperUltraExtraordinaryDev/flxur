'use strict';
/**
 * The application dispatcher.
 */
var Constants = require('../constants/constants.js');
var FluxDispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var Dispatcher = assign(new FluxDispatcher(), {
    handleViewAction: function(action) {
        this.dispatch({
            source: Constants.VIEW_ACTION,
            action: action
        });
    }
});

module.exports = Dispatcher;
