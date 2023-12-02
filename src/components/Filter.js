import React from 'react';

function Filter({ onCategoryChange }) {
  const categories = ['All', 'Category 1', 'Category 2'];

  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
}

export default Filter;