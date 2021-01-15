import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Store from './store';
ReactDOM.render(
    <Store><App /></Store>,
  document.getElementById('root')
);
