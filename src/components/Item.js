import React, { useState } from 'react';

function Item({ name }) {
  const [inCart, setInCart] = useState(false);

  const addToCart = () => {
    setInCart(true);
  };

  return (
    <div className={`Item${inCart ? ' in-cart' : ''}`}>
      <p>{name}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Item;