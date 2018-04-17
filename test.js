require('raf/polyfill');
require('jsdom-global')();

const assert = require('assert');
const React = require('react');
const { render } = require('react-dom');
const defaultExport = require('./').default;
const { Logger, Consumer, Provider, create } = require('./');

/* eslint-disable max-nested-callbacks, class-methods-use-this */

describe('react-log', () => {
    it('Make sure the lib public API is properly exported', () => {
        assert.ok(Logger);
        assert.ok(Consumer);
        assert.ok(Provider);
        assert.ok(create);
        assert.equal(Consumer, defaultExport);
    });

    it('The Logger Consumer provides the log API to any child Component', (done) => {
        const Elm = class extends React.PureComponent {
            componentDidMount() {
                const methods = ['log', 'warn', 'error', 'debug'];

                methods.forEach(method => {
                    assert.ok(this.props[method]);
                    assert.doesNotThrow(this.props[method]);
                });

                done();
            }
            render() {
                return React.createElement('span', null, 'hello world');
            }
        };

        const el = render(
            React.createElement('div', null, React.createElement(Consumer, null, ({ log, warn, error, debug }) => React.createElement(Elm, {
                log,
                warn,
                error,
                debug,
            }))),
            document.createElement('div')
        );

        assert.equal(el.querySelector('span').textContent, 'hello world');
    });
});
