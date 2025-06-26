import React from "react";
import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
// import Header from '../Components/Header';
import Footer from '../Components/Footer';

const BookedCars = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="page-layout">
        <Sidebar />
        <div className="page-box">
            <h1 className="mycars-title">My Cars</h1>
            <div style={{ padding: '40px' }}>
                <h1>📝 Booked Cars Page</h1>
                <p>List of your bookings will appear here.</p>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookedCars;
