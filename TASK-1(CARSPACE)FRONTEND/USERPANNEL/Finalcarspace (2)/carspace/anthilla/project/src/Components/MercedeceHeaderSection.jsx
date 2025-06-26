import React from "react";
import { Heart, Share2, Printer } from "lucide-react";
import "./MercedeceHeaderSection.css";


export default function HeaderSection() {
  const filterTags = [
    { label: "2023", active: true },
    { label: "Mercedes", active: true },
    { label: "C Class", active: true },
    { label: "Convertible", active: true },
    { label: "Used", active: true },
  ];

  return (
    <div className="header-container">
      <div className="header-left">
        <div className="indicator-line" />
        <div>
          <h1 className="car-title">Mercedes-Benz C class</h1>
          <div className="filter-tags">
            {filterTags.map((tag, index) => (
              <span
                key={index}
                className={`tag ${tag.active ? "tag-active" : "tag-inactive"}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="action-buttons">
          <button className="icon-button heart">
            <Heart size={20} />
          </button>
          <button className="icon-button share">
            <Share2 size={20} />
          </button>
          <button className="icon-button print">
            <Printer size={20} />
          </button>
        </div>

        <div className="price-section">
          <span className="current-price">₹659999</span>
          <span className="original-price">₹859999</span>
        </div>
      </div>
    </div>
  );
}