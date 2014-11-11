/** @jsx React.DOM */
var _Dispatcher = require('./_dispatcher.js');
var merge = require('react/lib/merge');

var Dispatcher = merge(_Dispatcher.prototype, {
    handleViewAction: function(action) {
        console.log('action', action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
});

module.exports = Dispatcher;
