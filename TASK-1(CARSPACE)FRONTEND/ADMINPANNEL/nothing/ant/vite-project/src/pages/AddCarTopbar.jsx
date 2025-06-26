import React from "react";
import { FaChevronDown, FaBell } from "react-icons/fa";
// import "./Topbar.css";

const AddCarTopbar = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <div className="topbar">
      <div className="topbar-left">
        <h3 style={{ margin: 0 }}>Add Car Details</h3>
      </div>

      <div className="topbar-right">
        <div className="bell-box">
          <FaBell className="topbar-icon" />
        </div>

        <div className="profile-box" onClick={() => setShowDropdown(!showDropdown)}>
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

export default AddCarTopbar;
