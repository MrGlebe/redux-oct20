import React, {} from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import './index.scss';
import {rootReducer} from './redux/rootReducer';
import forbiddenWords from './redux/middleware';
import {sagasWatcher} from './redux/sagas';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        forbiddenWords, saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagasWatcher);

render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
