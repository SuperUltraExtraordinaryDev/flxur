'use strict';
/**
 * Tests for app/js/dispatcher/dispatcher.js.
 */

/**
 * Test Dispatcher.handleViewAction.
 */
describe('Dispatcher.handleViewAction', function() {
    it('calls dispatch with given action', function() {
        jest.dontMock('../../constants/constants.js');
        jest.dontMock('../dispatcher.js');
        jest.dontMock('flux');
        jest.dontMock('object-assign');
        var Constants = require('../../constants/constants.js');
        var Dispatcher = require('../dispatcher.js');
        var action = 'TEST_ACTION';
        var expectedCall = {action: action, source: Constants.VIEW_ACTION};

        // Take test action.
        Dispatcher.dispatch = jest.genMockFunction();
        Dispatcher.handleViewAction(action);

        // Assert call was made properly.
        expect(Dispatcher.dispatch).lastCalledWith(expectedCall);
    });
});
