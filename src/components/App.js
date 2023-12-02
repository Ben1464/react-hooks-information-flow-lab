import React, { useState } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App${darkMode ? ' dark' : ''}`}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList />
    </div>
  );
}

export default App;