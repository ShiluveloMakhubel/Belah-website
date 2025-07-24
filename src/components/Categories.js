import React from 'react';
import './Categories.css';
import Deals from './Deals';

const categoriesData = [
  { id: 1, name: 'Hair Weave', price: '$100', image: '/images/hair.jpeg' },
  { id: 2, name: 'Smartphone', price: '$500', image: '/images/phone.jpeg' },
  { id: 3, name: 'Shoes', price: '$80', image: '/images/shoe.jpeg' },
];

const Categories = () => {
  return (
    <div className="categories-container">
      <Deals />
      <h2 className="categories-title">Shop by Category</h2>
      <div className="category-grid">
        {categoriesData.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-info">
              <h3>{category.name}</h3>
              <p className="category-price">{category.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
