// ProductsPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'PHONE', 'Hair', 'Cups', 'Sneakers', 'Shoes', 'Clothes', 'Watches'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        setProducts(data);
        console.log("here is your data",data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, []);

 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="products-page">
      <h2>Products</h2>

      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-thumbnail"
              />
            </Link>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
