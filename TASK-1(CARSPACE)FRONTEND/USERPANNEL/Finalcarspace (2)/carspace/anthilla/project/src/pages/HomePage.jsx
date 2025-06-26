import React, { useState, useEffect } from 'react';
import CarspaceHeader from '../Components/CarspaceHeader';
import Footer from '../Components/Footer';
import FilterSidebar from '../components/FilterSidebar';
import CarCard from '../components/CarCard';
import HeroSection from '../components/HeroSection'
import './HomePage.css'


const carData = [
  {
    id: 1,
    make: 'Mercedes-Benz C class',
    model: 'Suburban',
    year: 2021,
    bodyStyle: 'SUV',
    price: 859999,
    mileage: '25,000 km',
    location: 'Bangalore',
    image: '/car-front.png',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    type: 'used',
    zip: '560001',
  },
  {
    id: 2,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2022,
    bodyStyle: 'sunroof',
    price: 6000000,
    mileage: '18,000 km',
    location: 'Mumbai',
    image: '/car-front.png',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    type: 'new',
    zip: '400001',
  },
  {
    id: 3,
    make: 'Audi',
    model: 'Q5',
    year: 2020,
    bodyStyle: 'SUV',
    price: 4500000,
    mileage: '30,000 km',
    location: 'Hyderabad',
    image: '/car-side.png',
    transmission: 'Manual',
    fuelType: 'Petrol',
    type: 'used',
    zip: '500001',
  },
  {
    id: 4,
    make: 'BMW',
    model: 'X5',
    year: 2023,
    bodyStyle: 'SUV',
    price: 7200000,
    mileage: '10,000 km',
    location: 'Delhi',
    image: '/car-side1.png',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    type: 'new',
    zip: '110001',
  },
  {
    id: 5,
    make: 'Kia',
    model: 'Seltos',
    year: 2022,
    bodyStyle: 'sunroof',
    price: 1500000,
    mileage: '20,000 km',
    location: 'Chennai',
    image: '/car-side1.png',
    transmission: 'Manual',
    fuelType: 'Petrol',
    type: 'used',
    zip: '600001',
  },
  {
    id: 6,
    make: 'Toyota',
    model: 'Fortuner',
    year: 2021,
    bodyStyle: 'SUV',
    price: 3200000,
    mileage: '35,000 km',
    location: 'Pune',
    image: '/car-front.png',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    type: 'used',
    zip: '411001',
  },
];

export default function HomePage() {
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    zipCode: '',
    activeTab: 'used',
    bodyStyle: '',
    priceRange: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSaveSearch = () => {
    localStorage.setItem('savedSearch', JSON.stringify(filters));
    alert('Search saved successfully!');
  };

  // Optional: load saved search filters on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedSearch');
    if (saved) {
      setFilters(JSON.parse(saved));
    }
  }, []);

  const filteredCars = carData.filter((car) => {
    

    return (
      (!filters.make || car.make === filters.make) &&
      (!filters.model || car.model === filters.model) &&
      (!filters.zipCode || car.zip.includes(filters.zipCode)) &&
      (!filters.activeTab || car.type === filters.activeTab) 
    );
  });

  return (
    <>
      <CarspaceHeader />
      <HeroSection/>
      <div className="main-grid" style={{ display: 'flex', gap: '2rem', padding: '20px' }}>
        <FilterSidebar onFilterChange={handleFilterChange} />

        <div style={{ flex: 1 }}>
          {/* Save Search Button */}
          <div style={{
            marginBottom: '16px', display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <button
              onClick={handleSaveSearch}
              style={{
                backgroundColor: 'white',
                color: 'black',
                padding: '10px 16px',
                borderRadius: '25px',
                border: 'solid',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Save Search
            </button>
          </div>

          {/* Car Grid */}
          <div
            className="car-listing"
            style={{
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: 'repeat(2, 1fr)'
            }}
          >
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <CarCard key={car.id} car={car} isFeatured={true} />
              ))
            ) : (
              <p>No cars match your filters.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
