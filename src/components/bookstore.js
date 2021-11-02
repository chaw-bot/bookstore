import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import AddBook from './addBook';
import Categories from './categories';
import Books from './books';

const Bookstore = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Books />
        <AddBook />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </Router>
);

export default Bookstore;
