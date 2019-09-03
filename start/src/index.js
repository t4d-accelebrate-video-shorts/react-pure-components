import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import cars from './cars.json';

ReactDOM.render(
  <App cars={cars} />,
  document.querySelector('#root'),
);
