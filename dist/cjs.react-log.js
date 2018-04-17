'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var abstractLog = require('@dreipol/abstract-log');

/**
 * Create a new logger instance with your custom params and configs
 * @param   {Object} target - target object that will be automatically extended with the logger methods
 * @see {@link https://github.com/dreipol/abstract-log#config}
 * @param   {Object} config - logger configuration
 * @return {Object} logger object
 */
const create = (target = {}, config = abstractLog.createConfig()) => abstractLog.createLogger(target, config);

/**
 * Logger context creation. It's an object containing the `<Provider/>` and the `<Consumer/>`
 * @type { Consumer, Provider }
 * @see {@link https://reactjs.org/docs/context.html#api}
 */
const Logger = React.createContext(create());

/**
 * Logger context Provider. It can be used to override the default log methods
 * @type { Provider }
 * @see {@link https://reactjs.org/docs/context.html#provider}
 * @example
 *
 * import { Consumer, Provider } from '@dreipol/react-log'
 *
 * <Provider value={console}>
 *     <Consumer>
 *          { ({log}) => <App log={log}/> }
 *     </Consumer>
 * </Provider>
 */

const Provider = Logger.Provider;
/**
 * Logger context consumer
 * @type { Consumer }
 * @see {@link https://reactjs.org/docs/context.html#consumer}
 * @example
 *
 * import { Consumer } from '@dreipol/react-log'
 *
 * <Consumer>
 *     { ({log}) => <App log={log}/> }
 * </Consumer>
 */
const Consumer = Logger.Consumer;

exports.create = create;
exports.Logger = Logger;
exports.Provider = Provider;
exports.Consumer = Consumer;
exports['default'] = Consumer;
