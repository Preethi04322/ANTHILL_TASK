// src/components/Card.jsx
import React from "react";
import { FaCar, FaUsers } from "react-icons/fa";
import "./Card.css";

const Card = ({
  title,
  count,
  type,
  progressText = "43 more to break last month record",
}) => {
  return (
    <div className="card">
      <div className="card-content">
        {/* Icon */}
        <div className="card-icon">
          {type === "cars" ? <FaCar size={20} /> : <FaUsers size={20} />}
        </div>

        {/* Info */}
        <div className="card-info">
          <p className="card-title">{title}</p>
          <h2 className="card-count">{count}</h2>

          {/* Progress */}
          <div className="progress-bar-container">
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{
                  width: type === "cars" ? "85%" : "60%", // can be dynamic
                }}
              />
            </div>
            <p className="progress-text">{progressText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
