import React from 'react';
import PropTypes from 'prop-types';

const BookData = ({ category, title }) => (
  <div>
    <p>{category}</p>
    <p>{title}</p>
  </div>
);

BookData.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookData;
