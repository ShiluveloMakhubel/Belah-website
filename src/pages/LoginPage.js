import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt', formData);
    // Add authentication logic here

     if (formData.email && formData.password) {
      console.log('Login successful', formData);
      navigate('/'); // Redirect to Home page
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Belah Login</h2>
        <p className="login-subtitle">Welcome back! Please login to your account.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button type="submit" className="login-btn" >Sign In</button>
        </form>

        <p className="register-text">
          Don’t have an account? <a href="signup">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
