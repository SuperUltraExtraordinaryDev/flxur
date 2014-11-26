'use strict';
/**
 * Tests for app/js/components/decrease.js.
 */

describe('Decrease', function() {
    it('is a <button/> with text "-" and onClick listener', function() {
        jest.dontMock('../decrease.js');
        var React = require('react/addons');
        var Actions = require('../../actions/actions.js');
        var Decrease = require('../decrease.js');
        var TestUtils = React.addons.TestUtils;

        // Render component.
        var index = 0;
        var dom = TestUtils.renderIntoDocument(<Decrease index={index}/>);
        var component = TestUtils.findRenderedComponentWithType(dom, Decrease).getDOMNode();

        // Assert that component appears as expected.
        expect(component.textContent).toEqual('-');
        expect(component.tagName).toEqual('BUTTON');

        // Simulate click and assert.
        TestUtils.Simulate.click(component);
        expect(Actions.decreaseItem).lastCalledWith(index);
    });
});
