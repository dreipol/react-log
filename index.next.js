import React from 'react';
import { createLogger, createConfig } from '@dreipol/abstract-log';

/**
 * Create a new logger instance with your custom params and configs
 * @param   {object} target - target object that will be automatically extended with the logger methods
 * @see {@link https://github.com/dreipol/abstract-log#config}
 * @param   {object} config - logger configuration
 * @return {object} logger object
 * @example
 *
 * import { create } from '@dreipol/react-log'
 *
 * const logger = create()
 *
 * logger.warn('This is a warning!')
 */
export const create = (target = {}, config = createConfig()) => createLogger(target, config);

/**
 * Logger context creation. It's an object containing the `<Provider/>` and the `<Consumer/>`
 * @type { Consumer, Provider }
 * @see {@link https://reactjs.org/docs/context.html#api}
 */
export const Logger = React.createContext(create());

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

export const Provider = Logger.Provider;
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
export const Consumer = Logger.Consumer;

/**
 * Consumer alias
 * @name ReactLogger
 * @type { Consumer }
 * @see {@link https://reactjs.org/docs/context.html#consumer}
 * @example
 *
 * import ReactLogger from '@dreipol/react-log'
 *
 * <ReactLogger>
 *     { ({log}) => <App log={log}/> }
 * </ReactLogger>
 */
export default Consumer;
