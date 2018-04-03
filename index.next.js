import React from 'react';

// TODO: replace this object with the the logger API
const loggerAPI = {
    log(message) {
        return console.log(message);
    },
};


export const Logger = React.createContext(loggerAPI);
export const Provider = Logger.Provider;
export const Consumer = Logger.Consumer;

export default Consumer;
