/** @jsx React.DOM */
var React = require('react');
var Store = require('../stores/store.js');
var AddToCart = require('./addtocart.js');

/**
 * A wrapper function to serialize data as needed.
 */
function getCatalog() {
    return {items: Store.getCatalog()};
}

/**
 * Catalog component.
 */
var Catalog = React.createClass({
    getInitialState: function() {
        return getCatalog();
    },
    render: function() {
        var items = this.state.items.map(function(item) {
            return (
                <tr>
                    <td>{item.title}</td>
                    <td>{item.cost}</td>
                    <td><AddToCart item={item}/></td>
                </tr>
            );
        })
        return (
            <table className="table table-hover">
                {items}
            </table>
        );
    }
})

module.exports = Catalog;
