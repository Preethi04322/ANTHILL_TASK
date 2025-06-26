"use client"

import { useState } from "react"
import { Heart, ArrowRight, Fuel, Gauge, Settings } from "lucide-react"
import "./FeatureListing.css"
import Car1 from '../assets/car1.jpg'
import Car2 from '../assets/car2.jpg'
import Car3 from '../assets/car3.jpg'
import Car4 from '../assets/car4.jpg'
import Car5 from '../assets/car5.jpg'
import Car6 from '../assets/car6.jpg'

const carListings = [
  {
    id: 1,
    image: Car1,
    title: "Chevrolet suburban 2021",
    price: "₹27,000",
    fuelType: "Petrol",
    mileage: "15 km/l",
    transmission: "Automatic",
    category: "new",
  },
  {
    id: 2,
    image: Car2,
    title: "Chevrolet suburban 2021",
    price: "₹27,000",
    fuelType: "Petrol",
    mileage: "15 km/l",
    transmission: "Automatic",
    category: "used",
  },
  {
    id: 3,
    image: Car3,
    title: "Chevrolet suburban 2021",
    price: "₹27,000",
    fuelType: "Petrol",
    mileage: "15 km/l",
    transmission: "Automatic",
    category: "new",
  },
  {
    id: 4,
    image: Car4,
    title: "Chevrolet suburban 2021",
    price: "₹27,000",
    fuelType: "Petrol",
    mileage: "15 km/l",
    transmission: "Automatic",
    category: "used",
  },
  {
    id: 5,
    image: Car5,
    title: "Chevrolet suburban 2021",
    price: "₹27,000",
    fuelType: "Petrol",
    mileage: "15 km/l",
    transmission: "Automatic",
    category: "new",
  },
  {
    id: 6,
    image: Car6,
    title: "Chevrolet suburban 2021",
    price: "₹27,000",
    fuelType: "Petrol",
    mileage: "15 km/l",
    transmission: "Automatic",
    category: "used",
  },
]

const FeatureListing = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [favorites, setFavorites] = useState(new Set())

  const filteredCars = carListings.filter((car) => {
    if (activeFilter === "all") return true
    if (activeFilter === "new") return car.category === "new"
    if (activeFilter === "used") return car.category === "used"
    return true
  })

  const toggleFavorite = (carId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(carId)) {
      newFavorites.delete(carId)
    } else {
      newFavorites.add(carId)
    }
    setFavorites(newFavorites)
  }

  const handleViewDetails = (car) => {
    navigate("/homepage", { state: { car } });
  };

  return (
    <div className="feature-listing-section">
      <div className="feature-header">
        <h2>
          <span className="red-line">|</span>Feature listing
        </h2>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilter === "new" ? "active" : ""}`}
            onClick={() => setActiveFilter("new")}
          >
            New cars
          </button>
          <button
            className={`filter-btn ${activeFilter === "used" ? "active" : ""}`}
            onClick={() => setActiveFilter("used")}
          >
            Used cars
          </button>
        </div>
      </div>

      <div className="cars-grid">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-listing-card">
            <div className="car-image-wrapper">
              <img src={car.image || "/placeholder.svg"} alt={car.title} className="car-image" />
              <div className="featured-badge">Featured</div>
              <button
                className={`favorite-btn ${favorites.has(car.id) ? "active" : ""}`}
                onClick={() => toggleFavorite(car.id)}
              >
                <Heart size={20} />
              </button>
            </div>

            <div className="car-details">
              <div className="car-category">
                <span className="category-label">Mini cooper 3</span>
              </div>

              <h3 className="car-title">{car.title}</h3>
              <p className="car-price">{car.price}</p>

              <div className="car-specs">
                <div className="spec-item">
                  <Fuel size={16} className="spec-icon" />
                  <span className="spec-label">Fuel type</span>
                  <span className="spec-value">{car.fuelType}</span>
                </div>

                <div className="spec-item">
                  <Gauge size={16} className="spec-icon" />
                  <span className="spec-label">Mileage</span>
                  <span className="spec-value">{car.mileage}</span>
                </div>

                <div className="spec-item">
                  <Settings size={16} className="spec-icon" />
                  <span className="spec-label">Transmission</span>
                  <span className="spec-value">{car.transmission}</span>
                </div>
              </div>

             <button className="view-details-btn" onClick={() => handleViewDetails(car)}>
  View details
  <ArrowRight size={16} className="arrow-icon" />
</button>

            </div>
          </div>
        ))}
      </div>

      <div className="load-more-container">
        <button className="load-more-btn">Load more</button>
      </div>
    </div>
  )
}

export default FeatureListing
