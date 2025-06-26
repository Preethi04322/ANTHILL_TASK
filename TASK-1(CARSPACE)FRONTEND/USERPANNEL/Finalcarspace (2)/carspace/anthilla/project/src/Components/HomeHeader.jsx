import React, { useState } from 'react';
import './HomeHeader.css';
import profile_image from '../assets/profile_image.png';
import { useNavigate } from 'react-router-dom';
import CompareModal from './CompareModal';

const HomeHeader = () => {
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
    navigate('/dashboard');
  };

  return (
    <>
    <div className="header">
      <div className="header-left">
        <h2 className="logo">Car<span>space</span></h2>
        <ul className="nav-menu">
          <li><a href="/home">Home</a></li>
          <li><a href='/aboutus'>About Us</a></li>
          <li><a href="/cardetailspage">Certified Pre-Owned</a></li>
        </ul>
      </div>
      <div className="header-right-a">
        <button className="compare-btn-b" onClick={handleCompareClick}>
          Compare Cars
        </button>
        <img
          src={profile_image}
          alt="User"
          className="profile-icon-c"
          onClick={handleProfileClick}
        />
      </div>
    </div>
     <CompareModal isOpen={isCompareModalOpen} onClose={handleCloseModal} />
     </>
  );
};

export default HomeHeader;