/** @jsx React.DOM */
'use strict';
/**
 * A component for adding items to a user's cart.
 */
var React = require('react');
var Actions = require('../actions/actions.js');

var AddToCart= React.createClass({
    handleClick: function() {
        Actions.addItem(this.props.item);
    },
    render: function() {
        return <button onClick={this.handleClick}>Add to Cart</button>;
    }
});

module.exports = AddToCart;
