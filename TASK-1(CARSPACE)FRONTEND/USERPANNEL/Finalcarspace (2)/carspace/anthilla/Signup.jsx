import React from 'react';
import './Signup.css';
import bgImage from '../assets/background.jpg';
import carImage from '../assets/car-orange.jpg';

const Signup = () => {
  return (
    <div className="signup-bg" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="signup-wrapper">
        <div className="signup-card">
          {/* Left Image Section */}
          <div className="signup-left">
            <img src={carImage} alt="Car" />
          </div>

          {/* Right Form Section */}
          <div className="signup-right">
            <button className="close-btn">×</button>

            <h1 className="brand-logo">
              <span style={{ color: '#0047FF' }}>Car</span>
              <span style={{ color: 'red' }}>space</span>
            </h1>

            <div className="tabs">
              <button className="inactive-tab">Login</button>
              <button className="active-tab">Sign up</button>
            </div>

            <div className="form-group">
              <label>Enter your Name</label>
              <input type="text" placeholder="Full name" />
            </div>

            <div className="form-group">
              <label>Enter your Email ID</label>
              <input type="email" placeholder="Email address" />
            </div>

            <div className="form-group">
              <label>Enter your Mobile Number</label>
              <div className="input-wrapper">
                <span className="prefix">+91</span>
                <input type="text" placeholder="Mobile number" />
              </div>
            </div>

            <button className="continue-btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
