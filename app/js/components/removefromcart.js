/** @jsx React.DOM */
var React = require('react');
var Actions = require('../actions/actions.js');

var RemoveFromCart = React.createClass({
    handleClick: function() {
        Actions.removeItem(this.props.index);
    },
    render: function() {
        return <button onClick={this.handleClick}>x</button>;
    }
});

module.exports = RemoveFromCart;
