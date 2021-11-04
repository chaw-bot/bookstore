// eslint-disable import/extensions
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import AddBook from './AddBook';
import Categories from './Categories';
import BookList from './BookList';
import store from '../redux/configureStore';

const Bookstore = () => (
  <Provider store={store}>
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
  </Provider>
);

export default Bookstore;
