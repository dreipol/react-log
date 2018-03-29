import React from 'react';

// TODO: replace this object with the the logger API
const loggerAPI = {
    log() {

    },
};

export function wrap(Component) {
    class Logger extends React.Component {
        render() {
            return <Component {...this.props} {...this.context} />;
        }
    }

    Logger.contextTypes = loggerAPI;

    return Logger;
}
