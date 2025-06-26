import React, { useState } from 'react';
import './VerifyOtp.css';
import loginCar from '../assets/login_car.jpg';
import { Home } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    // Move to next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const gotohomepage = () => {
    Navigate ('/home')
  }

  return (
    <div className="otp-container">
      <div className="otp-box">
        <div className="otp-left">
          <img src={loginCar} alt="Car" />
        </div>
        <div className="otp-right">
          <div className="otp-header">
            <h1><span className="car">Car</span><span className="space">space</span></h1>
            <button className="close-btn">✖</button>
          </div>
          <h2>Verify your <br /> <span>Mobile</span></h2>
          <p>We have sent A 5 Digit OTP on +91 *******123</p>

          <div className="otp-inputs">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={e => handleChange(e.target, index)}
              />
            ))}
          </div>

          <div className="timer">00:20</div>
          <div className="resend">Didn’t receive OTP?</div>

          <button className="login-btn" onClick={<Home/>}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
