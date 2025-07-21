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
    <div className="categories">
       <Deals />
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categoriesData.map(category => (
          <div key={category.id} className="category-item">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
