import React, { useState } from 'react';
import './ContactOwner.css';

export default function ContactOwner() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message Sent:', form);
    alert('Message sent to car owner!');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  
  const handleScheduleTestDrive = () => {
    alert('Test drive scheduled! The owner will contact you shortly.');
    // You can add further logic here (e.g., API call or redirect)
  };

  return (
    <div className="contact-owner-container">
      {/* ✅ Add the onClick */}
      <button className="btn-primary" onClick={handleScheduleTestDrive}>
        Schedule Test Driver
      </button>

      <button className="btn-outline">Make An Offer Price</button>

      <div className="owner-box">
        <div className="owner-header">
          <div className="owner-image" />
          <div>
            <strong>Name</strong>
            <p className="subtext">Owner of Car</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Description"
            rows="3"
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" className="btn-primary">Send message</button>
        </form>
      </div>
    </div>
  );
}