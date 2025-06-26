// src/pages/UserDetails.jsx
import React from "react";
import "./UserDetails.css";


const user = {
  name: "Wade Warren",
  location: "Bangalore",
  phone: "(406) 555-0120",
  email: "felicia.reid@example.com",
  balance: "$3200",
};

const purchaseData = [
  { id: "01", name: "Name", date: "5/27/15", full: 130, paid: 130, balance: 0, status: "Delivered" },
  { id: "02", name: "Name", date: "7/1/19", full: 536, paid: 536, balance: 0 },
  { id: "03", name: "Name", date: "8/15/17", full: 600, paid: 600, balance: 0 },
  { id: "04", name: "Name", date: "8/21/15", full: 738, paid: 738, balance: 0 },
  { id: "05", name: "Name", date: "10/28/12", full: 177, paid: 177, balance: 0 },
  { id: "06", name: "Name", date: "10/6/13", full: 798, paid: 703, balance: 95 },
  { id: "07", name: "Name", date: "4/21/12", full: 703, paid: 703, balance: 0 },
];

export default function UserDetails() {
  return (
    <div className="user-details-container">

      {/* Header */}
      <div className="user-header-grid">
        <div className="row">
          <div className="left">
            <p className="user-balance">{user.name}</p>
            <p className="user-location">{user.location}</p>
          </div>
          <div className="center">
            <p className="user-balance">
              Balance: <span className="amount">{user.balance}</span>
            </p>
          </div>
          <div className="right">
            <button className="icon-btn edit-btn">✏️</button>
          </div>
        </div>
        <div className="row">
          <div className="left">
            <p className="user-contact">📞 {user.phone}</p>
            <p className="user-contact">✉️ {user.email}</p>
          </div>
          <div className="center">
            <button className="btn update">Send Update</button>
          </div>
          <div className="right">
            <button className="icon-btn delete-btn">🗑️</button>
          </div>
        </div>
      </div>

      <div className="divider-line"></div>

      {/* Purchase Section */}
      <div className="purchase-section">
        <div className="purchase-header-row">
          <h3 className="purchase-title">Purchase Details</h3>
          <div className="button-group">
            <select className="download-select">
              <option>Download as</option>
              <option>PDF</option>
              <option>CSV</option>
              <option>Excel</option>
            </select>
            <button className="add-vehicle-btn">Add Vehicle</button>
          </div>
        </div>
        <div className="purchase-controls">
          <div className="date-group">
            <div className="input-container">
              <label>Start date</label>
              <input type="date" placeholder="dd - mm - yyyy" />
            </div>
            <div className="input-container">
              <label>End date</label>
              <input type="date" placeholder="dd - mm - yyyy" />
            </div>
          </div>

          <div className="search-container">
            <label>&nbsp;</label>
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>

        {/* Purchase Table */}
        <div className="purchase-table-container">
          <table className="purchase-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Car Name</th>
                <th>Date</th>
                <th>Full amount</th>
                <th>Paid amount</th>
                <th>Balance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {purchaseData.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.full}</td>
                  <td>{item.paid}</td>
                  <td>{item.balance}</td>
                  <td>
                    {index === 0 ? (
                      <select className="status-dropdown">
                        <option value="Delivered">Delivered</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                      </select>
                    ) : (
                      "" // no status at all
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
