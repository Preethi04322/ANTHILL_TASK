// src/Components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
        <li><NavLink to="/my-cars" className={({ isActive }) => isActive ? 'active' : ''}>My Cars</NavLink></li>
        <li><NavLink to="/test-drives" className={({ isActive }) => isActive ? 'active' : ''}>My Test Drives</NavLink></li>
        <li><NavLink to="/contact-details" className={({ isActive }) => isActive ? 'active' : ''}>Contact Details</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
