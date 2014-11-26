'use strict';
/**
 * Tests for app/js/components/increase.js.
 */

describe('Increase', function() {
    it('is a <button/> with text "+" and onClick listener', function() {
        jest.dontMock('../increase.js');
        var React = require('react/addons');
        var Actions = require('../../actions/actions.js');
        var Increase = require('../increase.js');
        var TestUtils = React.addons.TestUtils;

        // Render component.
        var index = 0;
        var dom = TestUtils.renderIntoDocument(<Increase index={index}/>);
        var component = TestUtils.findRenderedComponentWithType(dom, Increase).getDOMNode();

        // Assert that component appears as expected.
        expect(component.textContent).toEqual('+');
        expect(component.tagName).toEqual('BUTTON');

        // Simulate click and assert.
        TestUtils.Simulate.click(component);
        expect(Actions.increaseItem).lastCalledWith(index);
    });
});
