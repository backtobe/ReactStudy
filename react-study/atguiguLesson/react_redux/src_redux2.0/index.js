import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './store/index';

import App from './components/app.jsx.js';

import './index.css';

function render() {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

render();

store.subscribe(function() {
  render();
});
