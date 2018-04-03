(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.ReactLogger = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

// TODO: replace this object with the the logger API
var loggerAPI = {
    log: function log(message) {
        return console.log(message);
    }
};

var Logger = React.createContext(loggerAPI);
var Provider = Logger.Provider;
var Consumer = Logger.Consumer;

exports.Logger = Logger;
exports.Provider = Provider;
exports.Consumer = Consumer;
exports['default'] = Consumer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
