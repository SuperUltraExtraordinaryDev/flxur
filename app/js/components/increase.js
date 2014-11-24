/** @jsx React.DOM */
'use strict';
/**
 * A component for increasing the quantity of a cart item.
 */
var React = require('react');
var Actions = require('../actions/actions.js');

var Increase = React.createClass({
    handleClick: function() {
        Actions.increaseItem(this.props.index);
    },
    render: function() {
        return <button onClick={this.handleClick}>+</button>;
    }
});

module.exports = Increase;
