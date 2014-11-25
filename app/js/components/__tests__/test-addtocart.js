'use strict';
/**
 * Tests for app/js/components/addtocart.js.
 */

describe('AddToCart', function() {
    it('is a <button/> with text "Add to Cart" and onClick listener', function() {
        jest.dontMock('../addtocart.js');
        var React = require('react/addons');
        var Actions = require('../../actions/actions.js');
        var AddToCart = require('../addtocart.js');
        var TestUtils = React.addons.TestUtils;

        // Render component.
        var item = {title: 'Test Item', cost: 1};
        var dom = TestUtils.renderIntoDocument(<AddToCart item={item}/>);
        var component = TestUtils.findRenderedComponentWithType(dom, AddToCart).getDOMNode();

        // Assert that component appears as expected.
        expect(component.textContent).toEqual('Add to Cart');
        expect(component.tagName).toEqual('BUTTON');

        // Simulate click and assert.
        TestUtils.Simulate.click(component);
        expect(Actions.addItem).lastCalledWith(item);
    });
});
