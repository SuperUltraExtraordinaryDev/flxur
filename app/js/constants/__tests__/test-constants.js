'use strict';
/**
 * Tests for app/js/constants/constants.js.
 */

/**
 * Tests for Constants.VIEW_ACTION.
 */
describe('Constants.VIEW_ACTION', function() {
    it('is the string "VIEW_ACTION"', function() {
        jest.dontMock('../constants.js');
        var Constants = require('../constants.js');
        expect(Constants.VIEW_ACTION).toBe('VIEW_ACTION');
    });
});

/**
 * Tests for Constants.ADD_ITEM.
 */
describe('Constants.ADD_ITEM', function() {
    it('is the string "ADD_ITEM"', function() {
        jest.dontMock('../constants.js');
        var Constants = require('../constants.js');
        expect(Constants.ADD_ITEM).toBe('ADD_ITEM');
    });
});

/**
 * Tests for Constants.REMOVE_ITEM.
 */
describe('Constants.REMOVE_ITEM', function() {
    it('is the string "REMOVE_ITEM"', function() {
        jest.dontMock('../constants.js');
        var Constants = require('../constants.js');
        expect(Constants.REMOVE_ITEM).toBe('REMOVE_ITEM');
    });
});

/**
 * Tests for Constants.DECREASE_ITEM.
 */
describe('Constants.DECREASE_ITEM', function() {
    it('is the string "DECREASE_ITEM"', function() {
        jest.dontMock('../constants.js');
        var Constants = require('../constants.js');
        expect(Constants.DECREASE_ITEM).toBe('DECREASE_ITEM');
    });
});

/**
 * Tests for Constants.INCREASE_ITEM.
 */
describe('Constants.INCREASE_ITEM', function() {
    it('is the string "INCREASE_ITEM"', function() {
        jest.dontMock('../constants.js');
        var Constants = require('../constants.js');
        expect(Constants.INCREASE_ITEM).toBe('INCREASE_ITEM');
    });
});
