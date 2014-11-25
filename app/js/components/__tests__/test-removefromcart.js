'use strict';
/**
 * Tests for app/js/components/removefromcart.js.
 */

describe('RemoveFromCart', function() {
    it('is a <button/> with text "x" and onClick listener', function() {
        jest.dontMock('../removefromcart.js');
        var React = require('react/addons');
        var Actions = require('../../actions/actions.js');
        var RemoveFromCart = require('../removefromcart.js');
        var TestUtils = React.addons.TestUtils;

        // Render component.
        var index = 0;
        var dom = TestUtils.renderIntoDocument(<RemoveFromCart index={index}/>);
        var component = TestUtils.findRenderedComponentWithType(dom, RemoveFromCart).getDOMNode();

        // Assert that component appears as expected.
        expect(component.textContent).toEqual('x');
        expect(component.tagName).toEqual('BUTTON');

        // Simulate click and assert.
        TestUtils.Simulate.click(component);
        expect(Actions.removeItem).lastCalledWith(index);
    });
});
