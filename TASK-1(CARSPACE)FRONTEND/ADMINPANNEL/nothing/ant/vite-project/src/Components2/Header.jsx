import React, { useState } from 'react';
import './Header.css';
import profile_image from '../assets/profile_image.png';
import { useNavigate } from 'react-router-dom';
import CompareModal from './CompareModal';

const Header = () => {
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false)

  const handleCompareClick = () => {
    setIsCompareModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsCompareModalOpen(false)
  }
  const navigate = useNavigate();

  ;

  const handleProfileClick = () => {
    navigate('/contact-details');
  };

  return (
    <>
    <div className="header">
      <div className="header-left">
        <h2 className="logo">Car<span>space</span></h2>
        <ul className="nav-menu">
          <li><a href="/home">Home</a></li>
          <li>About Us</li>
          <li>Certified Pre-Owned</li>
        </ul>
      </div>
      <div className="header-right">
        <button className="compare-btn" onClick={handleCompareClick}>
          Compare Cars
        </button>
        <img
          src={profile_image}
          alt="User"
          className="profile-icon"
          onClick={handleProfileClick}
        />
      </div>
    </div>
     <CompareModal isOpen={isCompareModalOpen} onClose={handleCloseModal} />
     </>
  );
};

export default Header;
