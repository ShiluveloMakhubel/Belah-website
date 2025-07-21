import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import PromotionalBanner from '../components/PromotionalBanner';

const Home = () => {
  return (
    <div className="home">
      <PromotionalBanner />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
