

// import "./ExploreCars.css"
// import sedan from '../assets/sedan.png';
// import campers from '../assets/campers.png';
// import cabriolet from '../assets/cabriolet.png';
// import pickup from '../assets/pickup.png';
// import supercar from '../assets/supercar.png';


// // You'll need to add your actual image imports here
// const cars = [
//   { name: "Sedan", image: sedan },
//   { name: "Campers", image: campers },
//   { name: "Cabriolet", image: cabriolet },
//   { name: "Pickup", image: pickup},
//   { name: "Supercar", image: supercar},
//   { name: "Minivans", image: pickup},
// ]

// const ExploreCars = () => {
//   return (
//     <div className="explore-section">
//       <div className="explore-header">
//         <h2>
//           <span className="red-line">|</span>Explore Our Cars
//         </h2>
//         <span className="view-more">View more</span>
//       </div>
//       <div className="car-types">
//         {cars.map((car, idx) => (
//           <div className="car-card" key={idx}>
//             <div className="car-image-container">
//               <img src={car.image || "/placeholder.svg"} alt={car.name} />
//             </div>
//             <p className="car-name">{car.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ExploreCars
"use client"

import { useNavigate } from "react-router-dom"
import "./ExploreCars.css"
import sedan from '../assets/sedan.png';
import campers from '../assets/campers.png';
import cabriolet from '../assets/cabriolet.png';
import pickup from '../assets/pickup.png';
import supercar from '../assets/supercar.png';
import minivans from '../assets/minivans.png';


const ExploreCars = () => {
  const navigate = useNavigate()

  const carCategories = [
    {
      id: 1,
      name: "Sedan",
      image: sedan,
    },
    {
      id: 2,
      name: "Campers",
      image: campers,
    },
    {
      id: 3,
      name: "Cabriolet",
      image: cabriolet,
    },
    {
      id: 4,
      name: "Pickup",
      image: pickup,
    },
    {
      id: 5,
      name: "Supercar",
      image: supercar,
    },
    {
      id: 6,
      name: "Minivans",
      image: minivans,
    },
  ]

  const handleCarClick = (categoryName) => {
    navigate("/homepage")
  }

  const handleViewMore = () => {
    navigate("/homepage")
  }

  return (
    <div className="explore-cars-section">
      <div className="explore-cars-container">
        <div className="section-header">
          <div className="header-left">
            <div className="red-accent-line"></div>
            <h2 className="section-title">Explore Our Cars</h2>
          </div>
          <button className="view-more-btn" onClick={handleViewMore}>
            View more
          </button>
        </div>

        <div className="cars-row">
          {carCategories.map((car) => (
            <div key={car.id} className="car-category-box" onClick={() => handleCarClick(car.name)}>
              <div className="car-image-container">
                <img src={car.image || "/placeholder.svg"} alt={car.name} className="car-image" />
              </div>
              <p className="car-name">{car.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreCars
