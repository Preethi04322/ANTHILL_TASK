import React from 'react';
import CarCard from './CarCard'; // Adjust path if needed

// Example related cars data
const relatedCars = [
  {
    id: 1,
    make: 'Audi',
    model: 'A4',
    year: 2021,
    price: 3500000,
    image: '/car-front.png',
    mileage: '22,000 km',
    location: 'Delhi',
    transmission: 'Automatic',
    fuelType: 'Petrol',
  },
  {
    id: 2,
    make: 'BMW',
    model: '3 Series',
    year: 2022,
    price: 4200000,
    image: '/car-side.png',
    mileage: '18,000 km',
    location: 'Mumbai',
    transmission: 'Manual',
    fuelType: 'Diesel',
  },
  {
    id: 3,
    make: 'Mercedes',
    model: 'C-Class',
    year: 2020,
    price: 3900000,
    image: '/car-side1.png',
    mileage: '25,000 km',
    location: 'Bangalore',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
  },
];

export default function RelatedListings() {
  return (
    <section className="related-listings" style={{ padding: '20px' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Related Listings</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {relatedCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}