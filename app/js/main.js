/** @jsx React.DOM */
'use strict';
/**
 * The application's entry point.
 */
var App = require('./components/app');
var React = require('react');

React.renderComponent(<App/>, document.getElementById('main'));
