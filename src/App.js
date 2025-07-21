import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import ProductDetails from './pages/ProductDetails';
import PostProduct from './components/PostProduct';
// Import other pages here as needed

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/postproduct" element={<PostProduct />} />
         
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
