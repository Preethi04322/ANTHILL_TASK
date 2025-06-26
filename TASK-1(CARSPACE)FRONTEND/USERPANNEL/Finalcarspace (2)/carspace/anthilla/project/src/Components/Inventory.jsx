// "use client"

// import "./Inventory.css"

// const Inventory = () => {
//   return (
//     <div className="inventory-section">
//       <div className="inventory-container">
//         <div className="inventory-card">
//           <div className="card-content">
//             <div className="card-left">
//               <span className="card-label">CAR INVENTORY</span>
//               <h2 className="card-title">
//                 Search Over 18000+
//                 <br />
//                 Used Vehicles
//               </h2>
//               <a href="/inventory" className="view-inventory-link">
//                 View Inventory →
//               </a>
//             </div>
//             <div className="card-right">
//               <img src="/placeholder.svg?height=200&width=300" alt="Red SUV" className="car-image single-car" />
//             </div>
//           </div>
//         </div>

//         <div className="inventory-card">
//           <div className="card-content">
//             <div className="card-left">
//               <span className="card-label">CAR INVENTORY</span>
//               <h2 className="card-title">
//                 Looking to sell your
//                 <br />
//                 Used brand car?
//               </h2>
//               <a href="/sell-inventory" className="view-inventory-link">
//                 View Inventory →
//               </a>
//             </div>
//             <div className="card-right">
//               <div className="multiple-cars">
//                 <img src="/placeholder.svg?height=120&width=160" alt="White car" className="car-image car-1" />
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Inventory
"use client"

import "./Inventory.css"

const Inventory = () => {
  return (
    <div className="inventory-section">
      <div className="inventory-container">
        <div className="inventory-card">
          <div className="card-content">
            <div className="card-left">
              <span className="card-label">CAR INVENTORY</span>
              <h2 className="card-title">
                Search Over 18000+
                <br />
                Used Vehicles
              </h2>
              <a href="/inventory" className="view-inventory-link">
                View Inventory →
              </a>
            </div>
            <div className="card-right">
              <div className="car-image-bg single-car-bg"></div>
            </div>
          </div>
        </div>

        <div className="inventory-card">
          <div className="card-content">
            <div className="card-left">
              <span className="card-label">CAR INVENTORY</span>
              <h2 className="card-title">
                Looking to sell your
                <br />
                Used brand car?
              </h2>
              <a href="/sell-inventory" className="view-inventory-link">
                View Inventory →
              </a>
            </div>
            <div className="card-right">
              <div className="multiple-cars">
                <div className="car-image-bg car-1-bg"></div>
                <div className="car-image-bg car-2-bg"></div>
                <div className="car-image-bg car-3-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
