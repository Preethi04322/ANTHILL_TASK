import React from 'react';

const FilterBar = ({ onSearch }) => {
  return (
    <div className="filter-bar">
      <button className="tab">New cars</button>
      <button className="tab">Used cars</button>
      <div className="inputs">
        <input placeholder="Make" />
        <input placeholder="Model" />
        <input placeholder="Body" />
      </div>
      <div className="range">
        <label>Set price range</label>
        <input type="range" min="1000" max="5000" />
      </div>
      <button onClick={onSearch} className="search-btn">Search</button>
    </div>
  );
};

export default FilterBar;
