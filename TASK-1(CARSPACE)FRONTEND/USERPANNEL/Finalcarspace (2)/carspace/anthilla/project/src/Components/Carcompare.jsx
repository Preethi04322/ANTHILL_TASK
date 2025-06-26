import React from 'react';
import './Carcompare.css';
import car1Image from '../assets/carpic1.jpg'; // Import first car image
import car2Image from '../assets/carpic1.jpg'; // Import second car image
import { useNavigate } from 'react-router-dom'; // Add this import
import CarspaceHeader from './CarspaceHeader';
import Footer from './Footer';

const CarComparison = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleTestDriveClick = () => {
    navigate('/schedule-test-drive'); // Navigate to the test drive page
  };
  return (
    <>
    <CarspaceHeader/>
    <div className="car-comparison-app">    
      <div className="comparison-container">
        <h2>CarCompares</h2>
        <p>Select cars from the list below to compare their features, pricing, and specs.</p>

        <div className="location-selector">
          <button className="location-btn">
            <span className="location-icon">📍</span> Bangalore
          </button>
        </div>

        <div className="car-comparison-grid">
          <div className="car-card">
            <img src={car1Image} alt="Car Model 1" className="car-image" />
            <h3>Car Model 1</h3>
            <div className="button-group">
              <button className="compare-btn" onClick={handleTestDriveClick} // Add onClick handler
 >Schedule Test driver</button>
              <button className="location-btn-card">📍 Bangalore</button>
            </div>
            <ul className="car-specs">
              <li>Rating: ★★★★☆</li>
              <li>Type: SUV</li>
              <li>Year: 2023</li>
              <li>Fuel: Petrol</li>
              <li>Engine: 2.0L</li>
              <li>Seats: 5</li>
              <li>Top Speed: 220 km/h</li>
              <li>Transmission: Auto</li>
              <li>Drive: FWD</li>
              <li>Price: $35,000</li>
              <li>Mileage: 15 MPG</li>
            </ul>
          </div>

          <div className="car-card">
            <img src={car2Image} alt="Car Model 2" className="car-image" />
            <h3>Car Model 2</h3>
            <div className="button-group">
<button className="compare-btn" onClick={handleTestDriveClick} // Add onClick handler
 >Schedule Test driver</button>                            

              <button className="location-btn-card">📍 Bangalore</button>
            </div>
            <ul className="car-specs">
              <li>Rating: ★★★★☆</li>
              <li>Type: Sedan</li>
              <li>Year: 2024</li>
              <li>Fuel: Diesel</li>
              <li>Engine: 1.8L</li>
              <li>Seats: 5</li>
              <li>Top Speed: 210 km/h</li>
              <li>Transmission: Manual</li>
              <li>Drive: RWD</li>
              <li>Price: $30,000</li>
              <li>Mileage: 18 MPG</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CarComparison;