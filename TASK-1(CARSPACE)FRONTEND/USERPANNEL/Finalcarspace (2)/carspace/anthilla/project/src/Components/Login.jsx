import React, { useState } from "react";
import "./Login.css";
// import car from "./car.jpg";
import { useNavigate } from "react-router-dom";
import supabase from '../supabaseClient';

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleSendOTP = async () => {
    const fullPhone = '+91' + phone;

    // Step 1: Check if phone exists in users table
    const { data: users, error: fetchError } = await supabase
      .from("users")
      .select("phone")
      .eq("phone", fullPhone);

    if (fetchError) {
      alert("Error checking user: " + fetchError.message);
      return;
    }

    if (!users || users.length === 0) {
      alert("Phone number not registered. Please sign up first.");
      return;
    }

    // Step 2: Send OTP
    const { error } = await supabase.auth.signInWithOtp({
      phone: fullPhone,
    });

    if (error) {
      alert("Failed to send OTP: " + error.message);
    } else {
      alert("OTP sent successfully!");
      navigate("/verification");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <img src='/loginpic.jpg' alt="Car" />
        </div>
        <div className="login-right">
          <button className="close-btn">×</button>
          <h1 className="logo">
            <span style={{ color: "#1E90FF" }}>Car</span>
            <span style={{ color: "#E60023" }}>space</span>
          </h1>

          <div className="tabs">
            <button className="active">Login</button>
            <button onClick={() => navigate("/signup")} className="inactive">
              Sign up
            </button>
          </div>

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

          <button onClick={handleSendOTP} className="continue-btn">
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;