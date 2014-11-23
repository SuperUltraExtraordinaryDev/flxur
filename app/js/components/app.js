/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/catalog.js');
var Cart = require('../components/cart.js');
var Actions = require('../actions/actions.js');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Catalog</h1>
                <Catalog/>
                <h1>Cart</h1>
                <Cart/>
            </div>
        );
    }
});

module.exports = App;
