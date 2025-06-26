import React, { useState } from "react";
import { FaChevronDown, FaBell } from "react-icons/fa";
import "./Topbar.css"; // Reuse the same CSS

const NotificationAndProfile = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* Empty, since this topbar has no title */}
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

export default NotificationAndProfile;
