import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBookAPI } from '../API/Api';
import { getBook } from '../redux/books/books';

const BookList = () => {
  const bookStore = useSelector((store) => store.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBookAPI()
      .then((response) => dispatch(getBook(response)));
  }, []);

  const oneBook = bookStore.map((book) => (
    <Book
      className="Book"
      key={book.item_id}
      item_id={book.item_id}
      title={book.title}
      category={book.category}
    />
  ));

  return (
    <div className="bookList">
      {oneBook}
    </div>
  );
};

export default BookList;
