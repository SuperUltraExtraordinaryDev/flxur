/** @jsx React.DOM */
var React = require('react');
var Store = require('../stores/store.js');
var RemoveFromCart = require('./removefromcart.js');
var Increase = require('./increase.js');
var Decrease = require('./decrease.js');

/**
 * A wrapper around the Store.getCart method to serialize the data as needed.
 */
function cartItems() {
    return {items: Store.getCart()};
}

/**
 * Shopping cart component.
 */
var Cart = React.createClass({
    getInitialState: function() {
        return cartItems();
    },
    componentWillMount: function() {
        Store.addChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState(cartItems());
    },
    render: function() {
        var total = 0;
        var items = this.state.items.map(function(item, index) {
            var subtotal = item.cost * item.qty;
            total += subtotal;
            return (
                <tr key={index}>
                    <td><RemoveFromCart index={index}/></td>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>
                        <Increase index={index}/>
                        <Decrease index={index}/>
                    </td>
                    <td>${subtotal}</td>
                </tr>
            );
        })
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
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
                        <td colSpan="4" className="text-right">Total</td>
                        <td>${total}</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
})

module.exports = Cart;
