import React from "react";
import "./CarspaceHeader.css";

  // const handleProfileClick = () => {
  //   navigate('/contact-details');
  // };

const CarspaceHeader = () => {
    const handleProfileClick = () => {
    navigate('/contact-details');
  };
  return (
    <div className="carspace-container">
      {/* Background Image with overlay */}
      <div className="carspace-background">
        <div/>
      </div>

      {/* Header Content */}
      <header className="carspace-header">
        <div className="logo">
          CarSpace
          {/* <img src="/assets/logo.png" alt="Carspace Logo" /> */}
        </div>

        <nav className="carspace-nav">
          <a href="/home">Home</a>
          <a href="/aboutus">About us</a>
          <a href="/homepage">Certified Pre-Owned</a>
        </nav>

        <div className="header-right-x">
          <button className="compare-button-y">Compare Cars</button>
          <div className="avatar">
            <img src="/profile_image.png?height=40&width=40" alt="User" onClick={handleProfileClick}/>
            <span className="avatar-fallback">U</span>
          </div>
        </div>

      </header>
    </div>
  );
}

export default CarspaceHeader