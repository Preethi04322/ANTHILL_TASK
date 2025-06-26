import React from "react";
import Sidebar from '../Components/Sidebar';
// import Header from '../Components/Header';
import Footer from '../Components/Footer';


const FavouriteCars = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="page-layout">
        <Sidebar />
        <div className="page-box">
            <h1 className="mycars-title">My Cars</h1>
            <div style={{ padding: '40px' }}>
                <h1>🚗 Favourite Cars Page</h1>
                <p>List of favourited cars will appear here.</p>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FavouriteCars;
