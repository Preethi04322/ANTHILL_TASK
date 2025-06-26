import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AuthForm.css";
import loginCar from "../assets/login_car.jpg";

const AuthForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(location.pathname === "/login");

  useEffect(() => {
    setIsLogin(location.pathname === "/login");
  }, [location.pathname]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.mobile || (!isLogin && (!formData.name || !formData.email))) {
      alert("Please fill all fields");
      return;
    }

    if (isLogin) {
      alert(`Logging in with mobile: ${formData.mobile}`);
    } else {
      alert(
        `Signed up:\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}`
      );
    }

    // After successful signup or login, navigate to OTP page
    navigate("/otp");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-left">
          <img src={loginCar} alt="car" />
        </div>
        <div className="auth-right">
          <div className="auth-header">
            <h1>
              <span className="blue">Car</span>
              <span className="red">space</span>
            </h1>
            <button className="close-btn">×</button>
          </div>

          <div className="auth-tabs">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <label>Enter your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label>Enter your Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                />
              </>
            )}
            <label>Enter your Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="+91"
              value={formData.mobile}
              onChange={handleChange}
            />
            <button type="submit" className="continue-btn">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
