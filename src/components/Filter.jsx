
import React from 'react';

const Filter = ({ onFilterChange, title, rating }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => onFilterChange('title', e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => onFilterChange('rating', e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default Filter;
