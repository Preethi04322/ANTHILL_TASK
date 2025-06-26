// import React from 'react';
// import './CarDetails.css';

// const CarDetails = () => {
//   return (
//     <div className="add-car-form">
//       <h2>Add CarDetails</h2>
//       <form>
//         <div className="form-grid">
//           <input placeholder="Car name" />
//           <input placeholder="Owner name" />
//           <input placeholder="Price" />
//           <input placeholder="Year" />
//           <input placeholder="Engine size" />
//           <input placeholder="Mileage" />
//           <input placeholder="Drive type" />
//           <input placeholder="Color" />
//           <input placeholder="Fuel type" />
//           <input placeholder="City" />
//           <input placeholder="Description" />
//           <input placeholder="Highway MPG" />
//         </div>

//         <textarea placeholder="Address" />
//         {/* <input type="file" accept="" onChange={handleImageChange} /> */}
//         {/* {imagePreview && <img src={imagePreview} alt="Preview" className="preview-img" />} */}
//         <div className="upload-box">Drop files here or click to upload.</div>
        
//         <div className="features">
//           <label><input type="checkbox" /> AC</label>
//           <label><input type="checkbox" /> Leather</label>
//           <label><input type="checkbox" /> Sunroof</label>
//           {/* Add more as needed */}
//           </div>

//         <div className="btn-row">
//           <button type="submit" className="submit-btn">Submit</button>
//           <button type="reset" className="reset-btn">Clear</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CarDetails;

import React from 'react';
import './CarDetails.css';

const CarDetails = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-img" />
      <div className="car-details">
        <p className="model">{car.model}</p>
        <h3>{car.name}</h3>
        <p className="price">₹ {car.price}</p>
        <div className="specs">
          <span>⛽ {car.fuel}</span>
          <span>🛣️ {car.mileage} km</span>
          <span>⚙️ {car.transmission}</span>
        </div>
        <div className="actions">
          <button>View details →</button>
          <span>✏️</span>
          <span>🗑️</span>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

