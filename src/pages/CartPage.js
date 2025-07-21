import React, { useState } from 'react';
import './CartPage.css';

const initialCart = [
  { id: 1, name: '26" Frontal weave', price: 100, image: '/images/hair.jpeg' },
  { id: 2, name: 'Iphone 11', price: 500, image: '/images/phone.jpeg' },
  { id: 3, name: 'Zara Sandals', price: 80, image: '/images/shoe.jpeg' },
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map(product => (
              <li key={product.id} className="cart-item">
                <img src={product.image} alt={product.name} />
                <div className="cart-item-details">
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
