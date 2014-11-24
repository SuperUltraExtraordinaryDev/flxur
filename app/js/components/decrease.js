/** @jsx React.DOM */
'use strict';
/**
 * A component for decreasing the quantity of a cart item.
 */
var React = require('react');
var Actions = require('../actions/actions.js');

var Decrease = React.createClass({
    handleClick: function() {
        Actions.decreaseItem(this.props.index);
    },
    render: function() {
        return <button onClick={this.handleClick}>-</button>;
    }
});

module.exports = Decrease;
