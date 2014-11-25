'use strict';
/**
 * Preprocessor to enable JSX in tests.
 */

var ReactTools = require('react-tools');

module.exports = {
    process: function(src) {
        return ReactTools.transform(src);
    }
};
