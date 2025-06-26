import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaClipboardList,
  FaTruck,
  FaQuestion,
  FaBook,
} from "react-icons/fa";
import { GiPartyPopper } from 'react-icons/gi';

const Sidebar = () => {
  const location = useLocation();

  const linkStyle = {
    padding: "10px 16px",
    textDecoration: "none",
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 500,
    marginBottom: "8px",
    transition: "all 0.2s ease-in-out",
  };

  const activeStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
  };

  return (
    <div
      style={{
        width: "220px",
        padding: "24px 16px",
        backgroundColor: "#fff",
        height: "auto",
        boxShadow: "2px 0 6px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ color: " #f43f5e", marginBottom: "32px", fontSize: "32px" }}>Carspace</h2>

      <NavLink to="/" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
        <FaHome /> Home
      </NavLink>

      <NavLink to="/users" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
        <FaUsers /> Users
      </NavLink>

      <NavLink to="/responses" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
        <FaClipboardList /> Responses
      </NavLink>

      <NavLink to="/manage" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
        <FaTruck /> Manage Listing
      </NavLink>

      <NavLink to="/bookings" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
        <FaClipboardList /> Bookings
      </NavLink>

      <NavLink to="/faqs" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
        <FaQuestion /> FAQs
      </NavLink>

      <NavLink to="/blogs" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
        <FaBook /> Blogs
      </NavLink>

      {/* Show only when on '/blogs' */}
      {location.pathname === "/blogs" && (
        <NavLink to="/greetings" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
          <GiPartyPopper /> Send Greetings
        </NavLink>
      )}
    </div>
  );
};

export default Sidebar;
