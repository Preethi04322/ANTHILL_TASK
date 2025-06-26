import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
// import Header from '../Components/Header';
import Footer from '../Components/Footer';
import testdrive_car from '../assets/testdrive_car.jpg'
import './TestDrives.css';
import CarspaceHeader from '../Components/CarspaceHeader';

const TestDrives = () => {
  const [activeTab, setActiveTab] = useState('Completed');

  return (
    <>
      {/* <Header /> */}
      <CarspaceHeader/>
      <div className="page-layout">
        <Sidebar />
        <div className="page-box">
          <h1 className="testdrive-title">My Test Drivers</h1>

          {/* Tabs */}
          <div className="testdrive-tabs">
            <button
              className={`tab-btn ${activeTab === 'Completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('Completed')}
            >
              Completed
            </button>
            <button
              className={`tab-btn ${activeTab === 'Upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('Upcoming')}
            >
              Upcoming
            </button>
          </div>

          {/* Card */}
          <div className="testdrive-card">
            <img
              src={testdrive_car}
              alt="Chevrolet suburban"
              className="card-image"
            />
            <div className="card-details">
              <h2 className="car-title">Chevrolet suburban 2021</h2>
              <p className="car-description">
                Effortlessly compare multiple properties side-by-side to make informed decisions...
              </p>

              <div className="car-info">
                <span><strong>🔥 Fuel type:</strong> <span className="highlight">Petrol</span></span>
                <span><strong>🚗 Mileage:</strong> <span className="highlight">90 km</span></span>
                <span><strong>⚙️ Transmission:</strong> <span className="highlight">Auto</span></span>
              </div>

              <div className="card-footer">
                <div className="price">$550,000</div>
                <button className="details-btn">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TestDrives;
