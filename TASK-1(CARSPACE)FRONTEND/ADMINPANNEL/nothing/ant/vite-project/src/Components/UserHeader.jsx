import React, { useState } from "react";
import { FaChevronDown, FaBell } from "react-icons/fa";
import "./UserHeader.css";

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  return (
    <div className="topbar">
      <div className="topbar-left">
        <h2 className="topbar-title">Users</h2>
        <p className="topbar-subtitle">List of Users</p>
      </div>

      <div className="topbar-right">
        {/* Bell Icon */}
        <div className="bell-box">
          <FaBell className="topbar-icon" />
        </div>

        {/* Profile Box */}
        <div className="profile-box" onClick={toggleDropdown}>
          <img
            src="https://via.placeholder.com/40x32"
            alt="Profile"
            className="rect-avatar"
          />
          <span className="topbar-username">Name</span>
          <FaChevronDown className="dropdown-icon" />

          {showDropdown && (
            <div className="dropdown-menu">
              <p>Profile</p>
              <p>Settings</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
