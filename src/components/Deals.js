import React from 'react';
import './Deals.css';

const dealsData = [
  { id: 1, name: 'Special Weave Deal', price: '$80', image: '/images/hair.jpeg' },
  { id: 2, name: 'Discounted iPhone 11', price: '$450', image: '/images/phone.jpeg' },
  { id: 3, name: 'Shoes Sale', price: '$70', image: '/images/shoe.jpeg' },
];

const Deals = () => {
  return (
    <div className="deals">
      <h2>Exclusive Deals</h2>
      <div className="deals-list">
        {dealsData.map(deal => (
          <div key={deal.id} className="deal-item">
            <img src={deal.image} alt={deal.name} />
            <h3>{deal.name}</h3>
            <p>{deal.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
