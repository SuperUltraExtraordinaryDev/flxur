'use strict';
/**
 * Tests for app/js/actions/actions.js.
 */
jest.setMock('../../dispatcher/dispatcher.js', {
    handleViewAction: jest.genMockFunction()
});

/**
 * Tests for Actions.addItem.
 */
describe('Actions.addItem', function() {
    it('calls Dispatcher.handleViewAction with expected object', function() {
        jest.dontMock('../actions.js');
        jest.dontMock('../../constants/constants.js');
        var Actions = require('../actions.js');
        var Constants = require('../../constants/constants.js');
        var Dispatcher = require('../../dispatcher/dispatcher.js');

        // Items passed around during function calls.
        var item = {testing: 'testing'};
        var wrappedItem = {actionType: Constants.ADD_ITEM, item: item};

        // Call addItem and assert.
        Actions.addItem(item);
        expect(Dispatcher.handleViewAction).lastCalledWith(wrappedItem);
    });
});
