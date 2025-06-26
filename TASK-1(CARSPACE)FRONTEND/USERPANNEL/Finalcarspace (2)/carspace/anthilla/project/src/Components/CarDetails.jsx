import React, { useState } from 'react';
import MercedeceHeaderSection from './MercedeceHeaderSection'
import "./CarDetails.css"

export default function CarDetails() {
  

  const images = [
  '/car-main.jpg',
  '/car-side.png',
  '/car-back1.png',
  '/car-back.png',
  '/car-front.png',
  '/car-side1.png',
];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="car-details-container">
      <MercedeceHeaderSection />

      {/* Image Section */}
      <div className="car-images">
        <img src={selectedImage} alt="Car" className="main-image" />
        <div className="thumbnail-row">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              className={`thumb ${selectedImage === img ? 'active' : ''}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="car-section">
        <h3><span className="highlight">▍</span> Description</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...
        </p>
      </div>

      {/* Overview */}
      <div className="overview-section">
        <h3><span className="highlight">▍</span> Car Overview</h3>
        <div className="overview-grid">
          <div><strong>Condition:</strong> New</div>
          <div><strong>Stock Number:</strong> N8990</div>
          <div><strong>VIN:</strong> 84HK192KJDC</div>
          <div><strong>Year:</strong> 2023</div>
          <div><strong>Mileage:</strong> 28,000</div>
          <div><strong>Transmission:</strong> Automatic</div>
          <div><strong>Engine:</strong> 4.8L</div>
          <div><strong>Drive:</strong> 2WD</div>
          <div><strong>Cylinders:</strong> 6</div>
          <div><strong>Fuel Type:</strong> Petrol</div>
          <div><strong>Color:</strong> Black</div>
          <div><strong>Seats:</strong> 4</div>
          <div><strong>City MPG:</strong> 18</div>
          <div><strong>Highway MPG:</strong> 28</div>
        </div>
      </div>

      {/* Features */}
      <div className="car-section">
        <h3><span className="highlight">▍</span> Features</h3>
        <ul className="features-grid">
          {[
            'A/C: Front', 'Central locking', 'Leather', 'Sports package', 'Navigation system',
            'Front fog light', 'Rain sensing wiper', 'Rear Spoilers', 'Sun roof', 'Navigation system',
            'Power steering', 'Trunk Light',
          ].map((feat, index) => (
            <li key={index}>✔ {feat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
