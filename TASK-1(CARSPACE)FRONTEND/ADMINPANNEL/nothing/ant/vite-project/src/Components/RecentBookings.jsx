// src/Components/RecentBookings.jsx
import React from 'react';
import './RecentBookings.css'; // Import the CSS file

function RecentBookings() {
  const bookings = [
    {
      id: 1,
      name: 'Amelia Tuner',
      time: '10 hrs ago',
      avatar: 'https://placehold.co/40x40/FF7F50/FFFFFF?text=AT',
    },
    {
      id: 2,
      name: 'John Carter',
      time: '5 hrs ago',
      avatar: 'https://placehold.co/40x40/6A5ACD/FFFFFF?text=JC',
    },
  ];

  return (
    <div className="recent-bookings-container">
      <h3 className="recent-bookings-title">Recent Bookings</h3>

      <div className="recent-bookings-list">
        {bookings.map((booking, index) => (
          <div
            key={booking.id}
            className={`recent-booking-item ${
              index !== bookings.length - 1 ? 'with-border' : ''
            }`}
          >
            {/* Left: Avatar and Name */}
            <div className="booking-user">
              <img
                src={booking.avatar}
                alt={booking.name}
                className="booking-avatar"
              />
              <span className="booking-name">{booking.name}</span>
            </div>

            {/* Right: Time */}
            <span className="booking-time">{booking.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentBookings;
