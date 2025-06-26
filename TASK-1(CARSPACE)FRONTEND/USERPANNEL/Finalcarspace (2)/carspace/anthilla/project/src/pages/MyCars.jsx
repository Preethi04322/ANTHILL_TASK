import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import
import Sidebar from '../Components/Sidebar';
// import Header from '../Components/Header';
import Footer from '../Components/Footer';
import carImage from '../assets/testdrive_car.jpg';
import './MyCars.css';
import CarspaceHeader from '../Components/CarspaceHeader';

const MyCars = () => {
  const [activeTab, setActiveTab] = useState('Watched');
  const navigate = useNavigate(); // ✅ Init

  return (
    <>
      {/* <Header /> */}
      <CarspaceHeader/>
      <div className="page-layout">
        <Sidebar />
        <div className="page-box">
          <h1 className="mycars-title">My Cars</h1>

          <div className="mycars-tabs">
            <button
              className={`tab-btn ${activeTab === 'Watched' ? 'active' : ''}`}
              onClick={() => setActiveTab('Watched')}
            >
              Watched (1)
            </button>

            <button
              className={`tab-btn ${activeTab === 'Favourited' ? 'active' : ''}`}
              onClick={() => navigate('/favourite-cars')}
            >
              Favourited (1)
            </button>

            <button
              className={`tab-btn ${activeTab === 'Bookings' ? 'active' : ''}`}
              onClick={() => navigate('/booked-cars')}
            >
              Bookings (0)
            </button>
          </div>

          {/* Show this only for Watched tab */}
          {activeTab === 'Watched' && (
            <div className="car-card">
              <img src={carImage} alt="Car" className="card-image" />
              <div className="card-details">
                <h2 className="car-title">Chevrolet suburban 2021</h2>
                <p className="car-description">
                  Effortlessly compare multiple properties side-by-side to make informed decisions...
                </p>

                <div className="car-info">
                  <span><strong>⛽ Fuel type:</strong> <span className="highlight">Petrol</span></span>
                  <span><strong>🛣️ Mileage:</strong> <span className="highlight">90 km</span></span>
                  <span><strong>⚙️ Transmission:</strong> <span className="highlight">Auto</span></span>
                </div>

                <div className="card-footer">
                  <div className="price">$550,000</div>
                  <button className="details-btn">View Details</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCars;
