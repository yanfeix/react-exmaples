import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './app';
import todoApp from './app/reducers';
import { logger, localStorager } from './app/middleware';

const store = createStore(
    todoApp,
    applyMiddleware(logger, localStorager),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
