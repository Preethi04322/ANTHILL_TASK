import "./ManageListing.css";
 import car1 from "../assets/car1.png";
 import car2 from "../assets/car2.png"
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import { useNavigate } from 'react-router-dom';
 
 import {FaBell, FaGasPump, FaCogs, FaCalendarAlt,FaEdit,FaTrash } from 'react-icons/fa';
import { BringToFront } from "lucide-react";


const ManageListings = () => {
  const navigate = useNavigate();

  const handleAddCar = () => {
    navigate('/addcardetails'); 
  };

  const cars = [
    {
      id: 1,
      image: car1,
      title: "Chevrolet suburban 2021",
      price: "₹ 27,000",
      fuel: "Petrol",
      transmission: "Manual",
      year: "2021",
      isPopular: true,
    },
    {
      id: 2,
      image: car2,
      title: "Chevrolet suburban 2021",
      price: "₹ 27,000",
      fuel: "Petrol",
      transmission: "Manual",
      year: "2021",
      isPopular: true,
    },
    {
      id: 3,
      image: car3,
      title: "Chevrolet suburban 2021",
      price: "₹ 27,000",
      fuel: "Petrol",
      transmission: "Manual",
      year: "2021",
      isPopular: true,
    },
    {
      id: 4,
      image: car4,
      title: "Chevrolet suburban 2021",
      price: "₹ 27,000",
      fuel: "Petrol",
      transmission: "Manual",
      year: "2021",
      isPopular: true,
    },
  ]

  return (
    <div className="manage-listings-container">

      {/* Main Content */}
      <div className="main-content">
        <div className="page-title-row">
          <h1>Manage listings</h1>
          <button onClick={handleAddCar} className="add-car-btn">Add Car</button>
        </div>
        <p className="subtitle">List of cars</p>
      </div>


        {/* Filters */}
        <div className="filters-section">
          <div className="tabs">
            <button className="tab active">New cars</button>
            <button className="tab">Used cars</button>
          </div>
          <div className="search-fields">
            <input placeholder="Make" />
            <input placeholder="Model" />
            <input placeholder="Body" />
          </div>

          <div className="filter-controls">
            <div className="price-range">
              <div className="price-input-group">
                <label>Min</label>
                <input type="text" defaultValue="1000" className="price-input" />
              </div>
              <div className="price-slider">
                <div className="slider-track">
                  <div className="slider-range"></div>
                </div>
              </div>
              <div className="price-input-group">
                <label>Max</label>
                <input type="text" defaultValue="5000" className="price-input" />
              </div>
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>

        {/* Car Listings Grid */}
        <div className="car-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image-container">
                <img src={car.image || "/placeholder.svg"} alt={car.title} className="car-image" />
                {car.isPopular && <div className="popular-badge">Most popular</div>}
              </div>

              <div className="car-details">
                <h3 className="car-title">{car.title}</h3>
                <p className="car-price">{car.price}</p>

                <div className="car-specs">
                  <div className="spec-item">
                    {/* <div className="spec-icon fuel-icon"></div> */}
                    <span>{car.fuel} <FaGasPump/></span>
                  </div>
                  <div className="spec-item">
                    {/* <div className="spec-icon transmission-icon"></div> */}
                    <span>{car.transmission} <FaCogs /></span>
                  </div>
                  <div className="spec-item">
                    {/* <div className="spec-icon calendar-icon"></div> */}
                    <span>{car.year} <FaCalendarAlt/> </span>
                  </div>
                </div>

                <div className="car-actions">
                  <a href="#" className="view-details">
                    View details →
                  </a>
                  <div className="action-buttons">
                    <button className="action-btn edit-btn">
                      <div className="edit-icon"> <FaEdit /></div>
                    </button>
                    <button className="action-btn delete-btn">
                      <div className="delete-icon"><FaTrash/> </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default ManageListings


