import React from 'react';
import './AddCarDetails.css';
import { FaUserCircle } from 'react-icons/fa';
import profile from "../assets/profile.png"


const AddCarDetails = () => {
  return (
   


      // <div className="content">
      //   <div className="header">
      //     <h2>Add Car details</h2>
      //     <div className="user-info">
      //        <FaUserCircle className="profile-icon" /> 
      //         <span>Name</span>
      //     </div>
      //   </div>

        <form className="car-form">
          <div className="form-grid">
            <input type="text" placeholder="Car name" />
            <input type="text" placeholder="Owner name" />
            <input type="text" placeholder="Price" />
            <input type="text" placeholder="Year" />
            <input type="text" placeholder="Engine Size" />
            <input type="text" placeholder="Mileage" />
            <input type="text" placeholder="Driver Type" />
            <input type="text" placeholder="Cylinders" />
            <input type="text" placeholder="Seats" />
            <input type="text" placeholder="Fuel Type" />
            <input type="text" placeholder="Doors" />
            <input type="text" placeholder="Colour" />
          </div>

          <div className="description-row">
            <textarea placeholder="Description"></textarea>
            <div className="mpg-fields">
              <input type="text" placeholder="City MPG" />
              <input type="text" placeholder="Highway MPG" />
            </div>
          </div>

          <div className="address-row">
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Address Link (Google Maps)" />
          </div>

          <div className="media-upload">
            <div className="upload-box">
              <span className="upload-icon">⬆️</span>
              <p>Drop files here or click to upload.</p>
            </div>
            <input type="text" placeholder="Video (mp4)" />
          </div>

          <div className="features">
            <label><input type="checkbox" /> A/C Front</label>
            <label><input type="checkbox" /> CCTV</label>
            <label><input type="checkbox" /> Leather</label>
            <label><input type="checkbox" /> Navigation system</label>
            <label><input type="checkbox" /> Rain sensing wipe</label>
            <label><input type="checkbox" /> Sun roof</label>
            <label><input type="checkbox" /> Central locking</label>
            <label><input type="checkbox" /> CCTV</label>
            <label><input type="checkbox" /> Sports package</label>
            <label><input type="checkbox" /> Front fog light</label>
            <label><input type="checkbox" /> Rear Speakers</label>
            <label><input type="checkbox" /> Power steering</label>
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="reset" className="clear-btn">Clear</button>
          </div>
        </form>
      // </div>
    
  )
};

export default AddCarDetails;
