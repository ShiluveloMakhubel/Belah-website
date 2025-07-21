import React from 'react';
import './PromotionalBanner.css';

const PromotionalBanner = () => {
  return (
    <div className="promotional-banner">
      <img src="/images/logo.png" alt="Promotional Banner" />
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button type="button">Search</button>
      </div>
    </div>
  );
};

export default PromotionalBanner;
