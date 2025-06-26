// import React from 'react';
// import './Home.css';
// import Header from '../components/Header';
// import bgImage from '../assets/cars.jpg';
// import ExploreCars from '../components/ExploreCars';
// import FeatureListing from '../components/FeatureListing';
// import GetInTouch from '../components/GetInTouch';
// import HearFromCommunity from '../components/HearFromCommunity';
// import RoadmapFAQ from '../components/RoadmapFAQ';
// import BlogSection from '../components/BlogSection';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// const Home = () => {
//   return (
//     <>
//     <div className="home" style={{ backgroundImage: `url(${bgImage})` }}>
//       <div className="overlay">
//         <Header />
//         {/* <Navbar/> */}

//         <div className="home-container">
//           <div className="home-left">
//             <h1>Find Quality-Assured <br />Cars Tailored to Your<br />Budget and<br />Preferences</h1>
//             <p>
//               Browse a Wide Range of Certified Used Cars from Trusted <br />
//               Dealers or Private Sellers.
//             </p>

//             <button className="book-btn">Book My Car</button>
//             <div className="rating">⭐ 4.9/5 (1000+ Happy Members)</div>
//           </div>

//           <div className="home-right">
//             <div className="search-box">
//               <div className="tabs">
//                 <button className="active">New Cars</button>
//                 <button>Used Cars</button>
//               </div>

//               <input type="text" placeholder="Make" />
//               <input type="text" placeholder="Model" />

//               <label className="price-label">Price Range</label>
//               <input type="range" min="1000" max="6000" />

//               <input type="text" placeholder="Body" />

//               <button className="search-btn">2334 Cars</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <ExploreCars/>
//     <FeatureListing/>
//     <HearFromCommunity/>
//     <GetInTouch/>
//     <RoadmapFAQ/>
//     <BlogSection/>
//     <Footer/>
    
//     </>
//   );
// };

// export default Home;

"use client"

import { useState ,useRef} from "react"
import "./Home.css"
import bgImage from "../assets/cars.jpg"
import ExploreCars from "../components/ExploreCars"
import FeatureListing from "../components/FeatureListing"
import GetInTouch from "../components/GetInTouch"
import HearFromCommunity from "../components/HearFromCommunity"
import RoadmapFAQ from "../components/RoadmapFAQ"
import BlogSection from "../components/BlogSection"
import Footer from "../Components/Footer"
import Inventory from "../components/Inventory"
import HomeHeader from "../Components/HomeHeader"

const Home = () => {

  const sliderTrackRef = useRef(null)
  // const [minVal,setMinVal] = useState(0)
  // const [maxVal , setMaxVal] = useState(0)
  
  const [activeTab, setActiveTab] = useState("new")
  const [priceRange, setPriceRange] = useState([1000, 5000])

   const handleRangeChange = (e, index) => {
    const newRange = [...priceRange]
     newRange[index] = Number.parseInt(e.target.value)
    setPriceRange(newRange)
 }

  // const handleMouseDown = (thumb)=> {
  //   const moveHandler = (e) =>{
  //     const track = sliderTrackRef.current
  //     const rect = track.getBoundingClienRect()
  //     const percent = (e.clientX - rect.left)/rect.width
  //     const value = Math.round(percent * maxLimit)

  //     if(thumb === "min" && value >=0 && value< maxVal) setMinVal(value)
  //     if(thumb === "max" && value > minVal && value <= maxLimit)  setMaxVal(value)
  //   }
  //       const upHandler = ()=>{
  //       document.removeEventListener("mousemove",moveHandler)
  //       document.removeEventListener("mouseup",upHandler)
  //    }
  // document.addEventListener("mouseup",moveHandler)
  // document.addEventListener("mouseup",upHandler)
  // }
  // const getLeft = () => `${(minVal/maxLimit) * 100}%`
  // const getRight = () => `${100 - (maxVal / maxLimit) * 100}%`
  
  

  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="overlay">
          <HomeHeader/>

          <div className="home-container">
            <div className="home-left">
              <h1>
                Find Quality-Assured
                <br />
                Cars Tailored to Your
                <br />
                Budget and
                <br />
                Preferences
              </h1>
              <p>
                Browse a Wide Range of Certified Used Cars from Trusted
                <br />
                Dealers or Private Sellers.
              </p>

              <button className="book-btn">Book My Car</button>
              <div className="rating">
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span className="rating-text">4.9/5 (1000+ Happy Members)</span>
              </div>
            </div>

            <div className="home-right">
              <div className="search-box">
                <div className="tabs">
                  <button className={activeTab === "new" ? "active" : ""} onClick={() => setActiveTab("new")}>
                    New cars
                  </button>
                  <button className={activeTab === "used" ? "active" : ""} onClick={() => setActiveTab("used")}>
                    Used cars
                  </button>
                </div>

                <input type="text" placeholder="Make" />
                <input type="text" placeholder="Models" />

                <div className="price-section-slidebar">
                  <label className="price-label">Price Range</label>
                  <div className="range-container-count">
                    <div className="range-values-sec">
                      <span>{priceRange[0].toLocaleString()}</span>
                      <span>{priceRange[1].toLocaleString()}</span>
                    </div>
                    <div className="dual-range-a">
                      {/* <div className="slider-range"
                      style={{left: getLeft(),right:getRight()}}>
                      </div>
                      <div className="thumb" 
                       style={{left:getLeft()}}
                       onMouseDown={()=>handleMouseDown("min")}></div>
                       <div className="thumb" 
                       style={{right:getRight()}}
                       onMouseDown={()=>handleMouseDown("max")}></div>*/}
                      <input
                        type="range"
                        min="1000"
                        max="10000"
                        value={priceRange[0]}
                        onChange={(e) => handleRangeChange(e, 0)}
                        className="range-min"
                      />
                      <input
                        type="range"
                        min="1000"
                        max="10000"
                        value={priceRange[1]}
                        onChange={(e) => handleRangeChange(e, 1)}
                        className="range-max"
                      />
                    </div>
                  </div>
                </div>

                <input type="text" placeholder="Body" />

                <button className="search-btn">2334 Cars</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExploreCars />
      <FeatureListing />
      <Inventory/>
      <HearFromCommunity />
      <GetInTouch />
      <RoadmapFAQ />
      <BlogSection />
      <Footer />
    </>
  )
}

export default Home


