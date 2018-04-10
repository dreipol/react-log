(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.ReactLogger = {}),global.React));
}(this, (function (exports,React) { 'use strict';

/**
 * Just a noop
 */
function noop() {
    // NOTE: Intentionally do nothing
}

/**
 * Define loggers for vue instances
 * @param {Object} target - The host object
 * @param {Object} config - A config object for the logger instance
 * @param {Object} vm - A vue component instance that is allowed to influence part of the logging string
 * @return {Function} The original target object enhanced with a logger instance
 */
/* istanbul ignore next */
function createLogger(target, config, vm) {
    const { logger, proxy, levels, loggerArgs, context, filter } = config;

    return levels.reduce((host, level) => {
        return Object.defineProperty(host, level.name, {
            get() {
                if (!level.fn || !filter({ config, level, vm })) {
                    return noop;
                }

                if (proxy) {
                    const args = loggerArgs({ level, config, vm });
                    return level.fn.bind(logger, ...args);
                }

                return function(...statements) {
                    const args = loggerArgs({ level, config, vm, statements });
                    level.fn.call(logger, ...args);
                };
            },
        });
    }, target);
}

/* istanbul ignore next */
const presets = {
    logger: window.console,
    proxy: true,
    context: {},
    filter: () => true,
    levels: [
        {
            name: 'debug',
            fn: window.console.debug,
            label: '🗒',
            color: 'grey',
        },
        {
            name: 'log',
            fn: window.console.log,
            label: '📎',
            color: 'grey',
        },
        {
            name: 'info',
            fn: window.console.info,
            label: '💎️',
            color: '#6060BA',
        },
        {
            name: 'warn',
            fn: window.console.warn,
            label: '',
            color: '#817123',
        },
        {
            name: 'error',
            fn: window.console.error,
            label: '',
            color: '#A16666',
        },
    ],
    loggerArgs({ level, vm, config }) {
        const result = [];
        let { location } = config.context;
        const { label, color } = level;
        const styles = color ? `color: ${ color }` : '';

        if (!location && vm) {
            const tag = vm.$options._componentTag;
            location = `${ tag ? `${ tag } #${ vm._uid }` : `#${ vm._uid }` }` || 'unknown';
        }

        if (styles || label || location) {
            result.push([
                styles ? '%c' : '',
                label ? `${ label } ` : '',
                location ? `[${ location }]` : '',
            ].join(''));

            if (styles) {
                result.push(styles);
            }
        }

        return result;
    },
};

const loggerAPI = createLogger({}, presets);

/**
 * Logger context creation. It's an object containing the `<Provider/>` and the `<Consumer/>`
 * @type { Consumer, Provider }
 * @see {@link https://reactjs.org/docs/context.html#api}
 */
const Logger = React.createContext(loggerAPI);

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

exports.Logger = Logger;
exports.Provider = Provider;
exports.Consumer = Consumer;
exports['default'] = Consumer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
