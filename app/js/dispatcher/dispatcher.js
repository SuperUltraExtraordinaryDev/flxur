/** @jsx React.DOM */
var FluxDispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var Dispatcher = assign(new FluxDispatcher(), {
    handleViewAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = Dispatcher;
