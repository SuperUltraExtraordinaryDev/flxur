'use strict';
/**
 * Tests for app/js/components/cart.js.
 */
jest.setMock('../../stores/cart-store.js', {
    addChangeListener: jest.genMockFunction(),
    getCart: jest.genMockFunction(),
    register: jest.genMockFunction()
});

/**
 * Tests for top-level Cart table nodes.
 */
describe('Cart', function() {
    it('is a <table> with <thead> <tbody> <tfoot>', function() {
        jest.dontMock('../cart.js');
        var React = require('react/addons');
        var Actions = require('../../actions/actions.js');
        var Cart = require('../cart.js');
        var TestUtils = React.addons.TestUtils;

        // Get mocked store to return needed values.
        var CartStore = require('../../stores/cart-store.js');
        CartStore.getCart.mockReturnValue([]);

        // Render component and get needed nodes for asserts.
        var dom = TestUtils.renderIntoDocument(<Cart/>);
        var component = TestUtils.findRenderedComponentWithType(dom, Cart).getDOMNode();
        var thead = component.firstChild;
        var tbody = thead.nextSibling;
        var tfoot = tbody.nextSibling;

        // Assert nodes are as expected.
        expect(component.tagName).toEqual('TABLE');
        expect(component.className).toEqual('table table-bordered table-condensed table-hover table-responsive table-striped');
        expect(thead.tagName).toEqual('THEAD');
        expect(thead.className).toEqual('');
        expect(tbody.tagName).toEqual('TBODY');
        expect(tbody.className).toEqual('');
        expect(tfoot.tagName).toEqual('TFOOT');
        expect(tfoot.className).toEqual('');
    });
});

/**
 * Tests for Cart.thead children.
 */
describe('Cart', function() {
    it('has a <thead> with expected headers', function() {
        jest.dontMock('../cart.js');
        var React = require('react/addons');
        var Actions = require('../../actions/actions.js');
        var Cart = require('../cart.js');
        var TestUtils = React.addons.TestUtils;

        // Get mocked store to return needed values.
        var CartStore = require('../../stores/cart-store.js');
        CartStore.getCart.mockReturnValue([]);

        // Render component and get needed nodes for asserts.
        var dom = TestUtils.renderIntoDocument(<Cart/>);
        var component = TestUtils.findRenderedComponentWithType(dom, Cart).getDOMNode();
        var thead = component.firstChild;
        var tr = thead.firstChild;
        var th0 = tr.firstChild,
            th1 = th0.nextSibling,
            th2 = th1.nextSibling,
            th3 = th2.nextSibling;

        // Assert nodes are as expected.
        expect(tr.tagName).toEqual('TR');
        expect(tr.className).toEqual('');

        expect(th0.tagName).toEqual('TH');
        expect(th0.className).toEqual('');
        expect(th0.textContent).toEqual('Item');

        expect(th1.tagName).toEqual('TH');
        expect(th1.className).toEqual('');
        expect(th1.textContent).toEqual('Qty');

        expect(th2.tagName).toEqual('TH');
        expect(th2.className).toEqual('');
        expect(th2.textContent).toEqual('');

        expect(th3.tagName).toEqual('TH');
        expect(th3.className).toEqual('');
        expect(th3.textContent).toEqual('Subtotal');
    });
});

/**
 * Tests for Cart.tbody children.
 */
describe('Cart', function() {
    it('has a <tbody> with no children when cart is empty', function() {
        jest.dontMock('../cart.js');
        var React = require('react/addons');
        var Actions = require('../../actions/actions.js');
        var Cart = require('../cart.js');
        var TestUtils = React.addons.TestUtils;

        // Get mocked store to return needed values.
        var CartStore = require('../../stores/cart-store.js');
        CartStore.getCart.mockReturnValue([]);

        // Render component and get needed nodes for asserts.
        var dom = TestUtils.renderIntoDocument(<Cart/>);
        var component = TestUtils.findRenderedComponentWithType(dom, Cart).getDOMNode();
        var tbody = component.firstChild.nextSibling;

        // Assert nodes are as expected.
        expect(tbody.firstChild).toEqual(null);
    });
});

/**
 * Tests for Cart.tfoot children.
 */
describe('Cart', function() {
    it('has a <tfoot> with expected children', function() {
        jest.dontMock('../cart.js');
        var React = require('react/addons');
        var Actions = require('../../actions/actions.js');
        var Cart = require('../cart.js');
        var TestUtils = React.addons.TestUtils;

        // Get mocked store to return needed values.
        var CartStore = require('../../stores/cart-store.js');
        CartStore.getCart.mockReturnValue([]);

        // Render component and get needed nodes for asserts.
        var dom = TestUtils.renderIntoDocument(<Cart/>);
        var component = TestUtils.findRenderedComponentWithType(dom, Cart).getDOMNode();
        var tfoot = component.firstChild.nextSibling.nextSibling;
        var tr = tfoot.firstChild;
        var td0 = tr.firstChild,
            td1 = td0.nextSibling;

        // Assert nodes are as expected.
        expect(tr.tagName).toEqual('TR');
        expect(tr.className).toEqual('');

        expect(td0.tagName).toEqual('TD');
        expect(td0.className).toEqual('text-right');
        expect(td0.colSpan).toEqual(3);
        expect(td0.textContent).toEqual('Total');

        expect(td1.tagName).toEqual('TD');
        expect(td1.className).toEqual('');
        expect(td1.textContent).toEqual('$0');
    });
});
