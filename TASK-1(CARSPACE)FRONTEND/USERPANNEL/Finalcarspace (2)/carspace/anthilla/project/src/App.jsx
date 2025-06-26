import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyCars from './pages/MyCars';
import TestDrives from './pages/TestDrives';
import ContactDetails from './pages/ContactDetails';
import FavouriteCars from './pages/FavouritesCars';
import BookedCars from './pages/BookedCars';
// import VerifyOtp from './pages/VerifyOtp';
// import AuthForm from './Components/AuthForm';
import Home from './pages/Home'
import HomePage from './pages/HomePage'
import CarDetailPage from './pages/CarDetailPage';
import AboutUs from './Components/AboutUs'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Verification from './Components/Verification';
import Carcompare from './Components/Carcompare';



function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<AuthForm />} />
        <Route path="/signup" element={<AuthForm />} />
        <Route path="/otp" element={<VerifyOtp />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/verification" element={<Verification/>}/>
        
        <Route path="/my-cars" element={<MyCars />} />
        <Route path="/favourite-cars" element={<FavouriteCars />} />
        <Route path="/booked-cars" element={<BookedCars />} />
        
        <Route path="/test-drives" element={<TestDrives />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/home" element={<Home/>}/>
        <Route path='/homepage' element={<HomePage />}/>
        <Route path='/cardetailspage' element={<CarDetailPage />}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/carcompare' element={<Carcompare/>}/>
      </Routes>
    </Router>
  );
}

export default App;


