import React from 'react';
import './Login.css';
import bgImage from '../assets/background.jpg';
import carImage from '../assets/car-orange.jpg';

function Login() {
  return (
    <div className="login-bg" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="login-wrapper">
        <div className="login-card">
          {/* Left Side - Car Image */}
          <div className="login-left">
            <img src={carImage} alt="Car" />
          </div>

          {/* Right Side - Login Form */}
          <div className="login-right">
            <button className="close-btn">×</button>

            <h1 className="brand-logo">
              <span style={{ color: '#0047FF' }}>Car</span>
              <span style={{ color: 'red' }}>space</span>
            </h1>

            <div className="tabs">
              <button className="active-tab">Login</button>
              <button className="inactive-tab">Sign up</button>
            </div>

            <div className="form-group">
              <label>Enter your Mobile Number</label>
              <div className="input-wrapper">
                <span className="prefix">+91</span>
                <input type="text" placeholder="Enter your number" />
              </div>
            </div>

            <button className="continue-btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
