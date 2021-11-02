import React from 'react';
import data from './bookData';
import Options from './options';

const Books = () => (

  <ul className="bookList">
    {data.map((book) => (
      <li
        className="Book"
        key={book.id}
      >
        <div>
          <div>{book.category}</div>
          <div>{book.title}</div>
          <div>{book.author}</div>
          <Options />
        </div>
        <div>
          {book.percentage}
          <p>Completed</p>
        </div>
        <div>
          <p>CURRENT CHAPTER</p>
          <div>{book.chapter}</div>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </li>
    ))}
  </ul>

);

export default Books;
