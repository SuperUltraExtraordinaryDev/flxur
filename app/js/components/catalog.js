/** @jsx React.DOM */
var React = require('react');
var CatalogStore = require('../stores/catalog-store.js');
var AddToCart = require('./addtocart.js');

/**
 * A wrapper function to serialize data as needed.
 */
// function getCatalog() {
//     return {items: CatalogStore.getCatalog()};
// }

/**
 * Catalog component.
 */
var Catalog = React.createClass({
    componentWillMount: function() {
        CatalogStore.addChangeListener(this._onChange);
        CatalogStore.getCatalog();
    },
    getInitialState: function() {
        return {items: []};
    },
    _onChange: function(data) {
        this.setState({items: data});
    },
    render: function() {
        var items = this.state.items.map(function(item) {
            return (
                <tr key={'catalog-item-' + item._id}>
                    <td>{item.title}</td>
                    <td>{item.cost}</td>
                    <td><AddToCart item={item}/></td>
                </tr>
            );
        });
        return (
            <table className="table table-hover">
                {items}
            </table>
        );
    }
});

module.exports = Catalog;
