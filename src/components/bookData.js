import React from 'react';
import PropTypes from 'prop-types';

const BookData = ({ category, title }) => (
  <div>
    <p className="bookCategory">{category}</p>
    <p className="bookTitle">{title}</p>
  </div>
);

BookData.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookData;
