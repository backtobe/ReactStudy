import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { store } from './store/index';
import App from './container/app'

import './index.css';

// function render() {
//   ReactDOM.render(<App store={store} />, document.getElementById('root'));
// }

// render();

// store.subscribe(function() {
//   render();
// });
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
