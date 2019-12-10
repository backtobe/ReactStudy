import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom'

import App from './components/app.jsx';
//必须相对路径

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// BrowserRouter  浏览器路由
// HashRouter     哈希路由
// Route          路由
// Redirect       重定向
// Link           路由链接
// NavLink        导航路由链接
// Switch         切换路由