import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './components/bookstore.css';
// eslint-disable-next-line import/extensions
import Bookstore from './components/Bookstore';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Bookstore />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
