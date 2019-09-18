import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';

render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);
