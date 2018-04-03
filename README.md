# react-log

[![Build Status][circleci-image]][circleci-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

## Installation

```bash
npm i @dreipol/react-log -S
```


## Usage

```jsx
import Logger from '@dreipol/react-log';
import React from 'react';
import { render } from 'react-dom';

function App({log, message}) {
    log(message);

    return <p>{message}</p>;
}

render(
    <Logger>
        {({log}) => <App log={log} message='Hello world'/>
    </Logger>,
    document.getElementById('root')
);
```

[circleci-image]:https://circleci.com/gh/dreipol/react-log/tree/master.svg?style=svg&circle-token=4fbc94f02a84443a9d0906866b3b858a0f45535c
[circleci-url]:https://circleci.com/gh/dreipol/react-log/tree/master

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE

[npm-version-image]:http://img.shields.io/npm/v/@dreipol/react-log.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/@dreipol/react-log.svg?style=flat-square
[npm-url]:https://npmjs.org/package/@dreipol/react-log

## API



