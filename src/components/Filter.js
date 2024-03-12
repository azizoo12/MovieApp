// Filter component to filter movies by title or rating
import React from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
    return (
      <div className="filter">
        <input type="text" placeholder="Filter by title" onChange={onTitleChange} />
        <input type="number" placeholder="Filter by rating" onChange={onRatingChange} />
      </div>
    );
  };
export default Filter;
