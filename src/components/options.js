import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import { removeBookAPI } from '../API/Api';

const Options = ({ id }) => {
  const dispatch = useDispatch();

  const remove = () => {
    removeBookAPI(id);
    dispatch(removeBook({ item_id: id }));
  };

  return (
    <div className="book-options">
      <a href="/#">Comments</a>
      {' | '}
      <a href="/#" onClick={remove}>Remove</a>
      {' | '}
      <a href="/#">Edit</a>
    </div>
  );
};

Options.propTypes = ({
  id: PropTypes.string.isRequired,
});

export default Options;
