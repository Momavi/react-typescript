import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import state from './redux/state'

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);