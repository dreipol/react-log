import React from 'react';

// TODO: replace this object with the the logger API
const loggerAPI = console;

/**
 * Logger context creation. It's an object containing the `<Provider/>` and the `<Consumer/>`
 * @type { Consumer, Provider }
 * @link https://reactjs.org/docs/context.html#api
 */
export const Logger = React.createContext(loggerAPI);

/**
 * Logger context Provider. It can be used to override the default log methods
 * @type { Provider }
 * @link https://reactjs.org/docs/context.html#provider
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
 * @link https://reactjs.org/docs/context.html#consumer
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
 * @type { Consumer }
 * @link https://reactjs.org/docs/context.html#consumer
 * @example
 *
 * import Logger from '@dreipol/react-log'
 *
 * <Logger>
 *     { ({log}) => <App log={log}/> }
 * </Logger>
 */
export default Consumer;
