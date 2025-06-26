import React from 'react';
import Sidebar from '../Components/Sidebar';
// import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './ContactDetails.css';
import CarspaceHeader from '../Components/CarspaceHeader';

const ContactDetails = () => {
  return (
    <>
      {/* <Header /> */}
      <CarspaceHeader/>
      <div className="page-layout">
        <Sidebar />
        <div className="page-box">
          <div className="contact-header">
            <h2>Contact Details</h2>
            <button className="edit-btn">Edit details</button>
          </div>
          
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Jane cooper" required />
            <label>Email ID</label>
            <input type="email" placeholder="janecooper@gmail.com" required />
            <label>Mobile Number</label>
            <input type="text" placeholder="+91 406555-012012" required />

            <div className="row">
              <div className="field">
                <label>Pincode</label>
                <input type="text" placeholder="411047" required />
              </div>
              <div className="field">
                <label>City</label>
                <input type="text" placeholder="Pune" required />
              </div>
            </div>

            <div className="form-actions">
              <button className="save-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactDetails;