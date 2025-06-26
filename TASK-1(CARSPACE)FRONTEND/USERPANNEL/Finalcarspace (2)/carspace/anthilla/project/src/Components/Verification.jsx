import React, { useState } from "react";
import "./Verification.css";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

const Verification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () =>{
    navigate ('/home')
  }
//   const handleVerify = async () => {
//     const phone = localStorage.getItem("carspacePhone");

//     if (!phone) {
//       alert("Phone number not found. Please login or signup again.");
//       navigate("/"); // redirect to login
//       return;
//     }

//     const { data, error } = await supabase.auth.verifyOtp({
//       phone,
//       token: otp,
//       type: "sms",
//     });

//     if (error) {
//       navigate("/home");
//     } else {
//       alert("Verification successful!");
//       navigate("/home"); // or "/" if dashboard not set up
//     }
//   };

  return (
    <div className="verification-container">
      <div className="verification-box">
        <div className="verification-left">
          <img src="/loginpic.css" alt="Car" />
        </div>
        <div className="verification-right">
          <button className="close-btn">x</button>
          <h1 className="logo">
            <span className="blue-text">Car</span>
            <span className="red-text">space</span>
          </h1>
          <h2 className="verify-title">
            Verify your <br />
            <span>Mobile</span>
          </h2>
          <p className="otp-info">
            We have sent a 6-digit OTP to your number.
          </p>

          <input
            className="otp-input"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button className="login-btn" onClick={handleVerify}>
            Verify & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;