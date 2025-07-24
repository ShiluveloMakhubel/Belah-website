import React from 'react';
import './Deals.css';

const dealsData = [
  { id: 1, name: 'Special Weave Deal', price: 'R1,499', image: '/images/hair.jpeg' },
  { id: 2, name: 'Discounted iPhone 11', price: 'R7,999', image: '/images/phone.jpeg' },
  { id: 3, name: 'Stylish Sneakers Sale', price: 'R1,299', image: '/images/shoe.jpeg' },
];

const Deals = () => {
  return (
    <div className="deals-page">
      <h2 className="deals-title">🎉 Hot Exclusive Deals Just for You! 🎉</h2>
      <p className="deals-subtitle">Hurry! Limited time only 🔥</p>
      <div className="deals-grid">
        {dealsData.map(deal => (
          <div key={deal.id} className="deal-card animate-pop">
            <img src={deal.image} alt={deal.name} className="deal-image" />
            <div className="deal-info">
              <h3>{deal.name}</h3>
              <p className="deal-price">{deal.price}</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
