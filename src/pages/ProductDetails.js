import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css'; // Custom CSS for styling and animations

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details on mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${productId}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // Add product to cart (localStorage)
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemExists = cart.find(p => p.id === product.id);
    if (!itemExists) {
      cart.push({ ...product, quantity: 1 });
    } else {
      itemExists.quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart.`);
  };

  // Go back to previous page
  const handleBack = () => {
    navigate(-1);
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details fade-in">
      <button className="back-btn" onClick={handleBack}>← Back</button>
      
      {/* Image path from public/images/ */}
      <img
        src={product.imageUrl} // Make sure product.image = 'hair.jpeg', etc.
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Specifications:</strong> {product.specifications}</p>
        <p><strong>Rating:</strong> {product.rating} / 5</p>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
