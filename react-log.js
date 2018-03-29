(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.ReactLog = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// TODO: replace this object with the the logger API
const loggerAPI = {
    log() {}
};

function wrap(Component) {
    class Logger extends React.Component {
        render() {
            return React.createElement(Component, _extends({}, this.props, this.context));
        }
    }

    Logger.contextTypes = loggerAPI;

    return Logger;
}

exports.wrap = wrap;

Object.defineProperty(exports, '__esModule', { value: true });

})));
