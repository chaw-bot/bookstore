import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import AddBook from './addBook';
import Categories from './categories';
import BookList from './BookList';

const Bookstore = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <BookList />
        <AddBook />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </Router>
);

export default Bookstore;
