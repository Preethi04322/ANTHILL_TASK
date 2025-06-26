import React from 'react';
import './Navbar.css';
import bgImage from '../assets/cars.jpg';
import profileImg from '../assets/profile_image.png';

const Navbar = () => {
  return (
    <div className="navbar" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="navbar-left">
        <h1 className="logo">Car<span>space</span></h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Certified Pre-Owned</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="compare-btn">Compare Cars</button>
        <img src={profileImg} alt="Profile" className="" />
      </div>
    </div>
  );
};

export default Navbar;
