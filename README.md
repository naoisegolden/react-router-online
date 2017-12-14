# React Router Online
[![Build Status](https://travis-ci.org/naoisegolden/react-router-online.svg?branch=master)](https://travis-ci.org/naoisegolden/react-router-online)

A React Router middleware for online/offline window events.

## Usage

```js
import { applyRouterMiddleware, Router } from 'react-router';
import useOnline from 'react-router-online';

const useOnlineMiddleware = useOnline(
  () => console.log('App is online!'),
  () => console.log('App is offline!')
);

ReactDOM.render(
  <Router
    render={applyRouterMiddleware(useOnlineMiddleware)} />,
  container
);
```
