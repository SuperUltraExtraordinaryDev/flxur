'use strict';
/**
 * Tests for app/js/actions/actions.js.
 */
var handleViewActionMock = jest.genMockFunction();
jest.setMock('../../dispatcher/dispatcher.js', {
    handleViewAction: handleViewActionMock
});
beforeEach(function() {
    handleViewActionMock.mockClear();
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

/**
 * Tests for Actions.removeItem.
 */
describe('Actions.removeItem', function() {
    it('calls Dispatcher.handleViewAction with expected object', function() {
        jest.dontMock('../actions.js');
        jest.dontMock('../../constants/constants.js');
        var Actions = require('../actions.js');
        var Constants = require('../../constants/constants.js');
        var Dispatcher = require('../../dispatcher/dispatcher.js');

        // Items passed around during function calls.
        var index = 0;
        var wrappedItem = {actionType: Constants.REMOVE_ITEM, index: index};

        // Call removeItem and assert.
        Actions.removeItem(index);
        expect(Dispatcher.handleViewAction).lastCalledWith(wrappedItem);
    });
});

/**
 * Tests for Actions.decreaseItem.
 */
describe('Actions.decreaseItem', function() {
    it('calls Dispatcher.handleViewAction with expected object', function() {
        jest.dontMock('../actions.js');
        jest.dontMock('../../constants/constants.js');
        var Actions = require('../actions.js');
        var Constants = require('../../constants/constants.js');
        var Dispatcher = require('../../dispatcher/dispatcher.js');

        // Items passed around during function calls.
        var index = 0;
        var wrappedItem = {actionType: Constants.DECREASE_ITEM, index: index};

        // Call decreaseItem and assert.
        Actions.decreaseItem(index);
        expect(Dispatcher.handleViewAction).lastCalledWith(wrappedItem);
    });
});

/**
 * Tests for Actions.increaseItem.
 */
describe('Actions.increaseItem', function() {
    it('calls Dispatcher.handleViewAction with expected object', function() {
        jest.dontMock('../actions.js');
        jest.dontMock('../../constants/constants.js');
        var Actions = require('../actions.js');
        var Constants = require('../../constants/constants.js');
        var Dispatcher = require('../../dispatcher/dispatcher.js');

        // Items passed around during function calls.
        var index = 0;
        var wrappedItem = {actionType: Constants.INCREASE_ITEM, index: index};

        // Call increaseItem and assert.
        Actions.increaseItem(index);
        expect(Dispatcher.handleViewAction).lastCalledWith(wrappedItem);
    });
});
