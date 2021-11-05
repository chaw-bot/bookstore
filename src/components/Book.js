/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import BookData from './bookData';
import Options from './options';
import Percentage from './Percentage';
import Progress from './Progress';

const Book = (
  {
    item_id, title, category,
  },
) => (
  <div className="Book">
    <div>
      <BookData title={title} category={category} />
      <Options id={item_id} />
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
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export default Book;
