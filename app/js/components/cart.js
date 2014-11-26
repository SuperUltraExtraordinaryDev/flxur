/** @jsx React.DOM */
'use strict';
/**
 * The cart component.
 */
var React = require('react');
var CartStore = require('../stores/cart-store.js');
var RemoveFromCart = require('./removefromcart.js');
var Increase = require('./increase.js');
var Decrease = require('./decrease.js');

/**
 * Shopping cart component.
 */
var Cart = React.createClass({
    getInitialState: function() {
        return {items: CartStore.getCart()};
    },
    componentWillMount: function() {
        CartStore.addChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState(CartStore.getCart());
    },
    render: function() {
        // TODO(TheDodd): need tests for this subroutine and tbody.
        var total = 0;
        var items = this.state.items.map(function(item, index) {
            var subtotal = item.cost * item.qty;
            total += subtotal;
            return (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>
                        <Increase index={index}/>
                        <Decrease index={index}/>
                        <RemoveFromCart index={index}/>
                    </td>
                    <td>${subtotal}</td>
                </tr>
            );
        });
        return (
            <table className="table table-bordered table-condensed table-hover table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th></th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-right">Total</td>
                        <td>${total}</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
});

module.exports = Cart;
