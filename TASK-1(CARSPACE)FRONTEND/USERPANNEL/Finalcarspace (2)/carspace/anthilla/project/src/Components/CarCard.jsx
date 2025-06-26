import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Gauge, Fuel, Settings } from 'lucide-react';
import './CarCard.css';

export default function CarCard({ car, isFeatured = false }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    // Optional: store in localStorage
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!isFavorite) {
      favs.push(car.id);
    } else {
      favs = favs.filter(id => id !== car.id);
    }
    localStorage.setItem("favorites", JSON.stringify(favs));

    console.log(`${car.make} ${car.model} was ${!isFavorite ? 'added to' : 'removed from'} favorites.`);
  };

  const title = `${car.make} ${car.model} ${car.year}`;
  const formattedPrice = `₹ ${car.price.toLocaleString()}`;

  return (
    <div className="car-card">
      <div className="card-image">
        <img src={car.image} alt={title} className="car-img" />
        {isFeatured && <span className="badge">Featured</span>}
        <button onClick={handleFavoriteClick} className="fav-btn">
          <Heart className="heart-icon" fill={isFavorite ? "red" : "none"} />
        </button>
      </div>

      <div className="card-body">
        <div className="car-type">Mini cooper 3</div>
        <h3 className="car-title">{title}</h3>
        <div className="car-location">
          <MapPin className="icon" />
          {car.location}
        </div>
        <div className="car-price">{formattedPrice}</div>

        <div className="car-specs">
          <div><Fuel className="icon" /> {car.fuelType}</div>
          <div><Gauge className="icon" /> {car.mileage}</div>
          <div><Settings className="icon" /> {car.transmission}</div>
        </div>

        <div className="card-footer">
          <Link to={`/cardetailspage`} className="btn-details">View details →</Link>
          <button onClick={handleFavoriteClick} className="fav-btn-sm">
            <Heart className="heart-icon" fill={isFavorite ? "red" : "none"} />
          </button>
        </div>
      </div>
    </div>
  );
}
