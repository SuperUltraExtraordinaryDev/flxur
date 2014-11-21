/** @jsx React.DOM */
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
