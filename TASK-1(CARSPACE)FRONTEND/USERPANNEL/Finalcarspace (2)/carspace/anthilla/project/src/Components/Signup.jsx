import React, { useState } from "react";
import "./Signup.css";
// import car from "./image.png";
import { useNavigate } from "react-router-dom";
import supabase from '../supabaseClient';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = async () => {
    const fullPhone = '+91' + phone;

    const { error: otpError } = await supabase.auth.signInWithOtp({
      phone: fullPhone,
    });

    if (otpError) {
      alert("OTP sending failed: " + otpError.message);
      return;
    }

    // Redirect to verification and pass user info
    navigate("/verification", {
      state: {
        name,
        phone: fullPhone,
        email,
      },
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-left">
          <img src='/loginpic.jpg' alt="Car" />
        </div>
        <div className="signup-right">
          <button className="close-btn">×</button>
          <h1 className="logo">
            <span style={{ color: "#1E90FF" }}>Car</span>
            <span style={{ color: "#E60023" }}>space</span>
          </h1>

          <div className="tabs">
            <button onClick={() => navigate("/")}>Login</button>
            <button className="active">Sign up</button>
          </div>

          <label className="label">Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label">Email ID</label>
          <input
            type="email"
            className="input-field"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Mobile Number</label>
          <div className="input-box">
            <span>+91</span>
            <input
              type="text"
              placeholder="Enter number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button onClick={handleSignup} className="continue-btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;