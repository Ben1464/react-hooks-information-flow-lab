import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';

const itemsData = [
  { id: 1, name: 'Item 1', category: 'Category 1' },
  { id: 2, name: 'Item 2', category: 'Category 2' },
  { id: 3, name: 'Item 3', category: 'Category 1' },
];

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === 'All'
    ? itemsData
    : itemsData.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      {filteredItems.map(item => (
        <Item key={item.id} name={item.name} />
      ))}
    </div>
  );
}

export default ShoppingList;