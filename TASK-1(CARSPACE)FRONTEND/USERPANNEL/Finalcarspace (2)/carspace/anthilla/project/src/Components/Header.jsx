import React from 'react';
import './Header.css';
import userIcon from '../assets/user-icon.png'; // replace with actual image

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <div className="logo">Carspace</div>

        <nav>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Certified Pre-Owned</li>
          </ul>
        </nav>

        <div className="header-actions">
            <button className="compare-btn">Compare cars</button>
            <div className="user-box">
                <img src={userIcon} alt="User" className="user-icon" />
            </div>
        </div>
    </div>
    </header>
  );
};

export default Header;