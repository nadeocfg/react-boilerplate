import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import HelloWorld from './components/HelloWorld';

import rootReducer from './store/reducers';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
  </Provider>,
  document.getElementById('root')
);
