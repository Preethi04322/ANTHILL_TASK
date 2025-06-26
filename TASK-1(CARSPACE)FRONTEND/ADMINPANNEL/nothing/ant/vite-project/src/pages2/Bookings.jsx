import React, { useState } from "react";
import { FaBell ,FaCalendar } from "react-icons/fa";
import "./Bookings.css"; // CSS is now in a separate file

const bookings = [
  { id: "#01", customer: "Amelia Tuner", email: "amelia@gmail.com", time: "(406) 555-0120", status: "Pending" },
  { id: "#02", customer: "Amelia Tuner", email: " ", time: "", status: "Confirmed" },
  { id: "#03", customer: "Amelia Tuner", email: "", time: "", status: "Cancelled" },
  { id: "#04", customer: "Amelia Tuner", email: "", time: "", status: "" },
  { id: "#05", customer: "Amelia Tuner", email: "", time: "", status: "" },
  { id: "#06", customer: "Amelia Tuner", email: "", time: "", status: "" },
];




export default function Bookings() {
  const [filter, setFilter] = useState("");

  const filteredBookings = filter
    ? bookings.filter((b) => b.status === filter)
    : bookings;

  return (
    <div className="container">
        <div className="topbar">
        <div className="topbar-left">
            <h2 className="topbar-title">Test Drive Bookings</h2>
            <p className="topbar-subtitle">List of car enquiries made!</p>
        </div>

        <div className="topbar-right">
            <div className="bell-box">
            <FaBell />
            </div>

            <div className="profile-box">
            <img src="https://via.placeholder.com/40x32" alt="User" className="rect-avatar" />
            <span className="topbar-username">Name</span>
            <span className="dropdown-icon">▼</span>

            <div className="dropdown-menu">
                <p>Profile</p>
                <p>Logout</p>
            </div>
            </div>
        </div>
        </div>
   

     
        <div className="controls">
          <div className="left-controls">
            <input type="text" placeholder="🔍 Search" />
          </div>

          <div className="right-controls">
            <div className="calender"><FaCalendar /></div>
            <select onChange={(e) => setFilter(e.target.value)} defaultValue="">
              <option value="">Status</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>#Booking ID</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Car Model</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.customer}</td>
                <td>{booking.email}</td>
                <td>{booking.time}</td>
                <td><button className="view-btn">View</button></td>
                <td className={`status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

    </div>
  );
}
