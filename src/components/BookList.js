import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import pullBooks from './BookSlice';

const BookList = () => {
  const bStore = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pullBooks());
  }, []);

  let bookStore = useSelector((store) => store.booksReducer.books);
  if (bookStore.error) {
    bookStore = [];
  } else {
    const bookIDs = Object.keys(bookStore);
    bookIDs.forEach((id) => {
      bookStore[id].map((book) => (
        bStore.push(
          <Book
            className="Book"
            key={id}
            id={id}
            author={book.author}
            title={book.title}
            category={book.category}
          />,
        )
      ));
    });
  }

  return (
    <div className="bookList">
      {bStore}
    </div>
  );
};

export default BookList;
