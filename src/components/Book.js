import React from 'react';
import PropTypes from 'prop-types';
import BookData from './BookData.js';
import Options from './Options.js';
import Percentage from './Percentage';
import Progress from './Progress';

const Book = (
  {
    id, title, author, category,
  },
) => (
  <div className="Book">
    <div>
      <BookData title={title} author={author} category={category} />
      <Options id={id} />
    </div>
    <div>
      <Percentage />
    </div>
    <div>
      <Progress />
    </div>
  </div>
);

Book.propTypes = ({
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
});

export default Book;
