import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import pullBooks from './BookSlice';

const AddBook = () => {
  const [bookTitle, setTitle] = useState('');
  const [bookCategory, setCategory] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const dispatch = useDispatch();

  const submitBookToStore = async (e) => {
    const newBook = {
      id: uuidv4(),
      title: bookTitle,
      category: bookCategory,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
    await dispatch(pullBooks());
    document.location.reload(true);

    e.preventDefault();
  };

  return (
    <div className="Form">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore} className="FormInput">
        <input
          type="text"
          placeholder="Book title"
          value={bookTitle}
          onChange={handleTitleChange}
          className="book-title"
        />
        <br />
        <select
          className="categories"
          name="categories"
          id="categories"
          value={bookCategory}
          onChange={handleCategoryChange}
        >
          <option defaultValue="">Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <br />
        <button className="submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
