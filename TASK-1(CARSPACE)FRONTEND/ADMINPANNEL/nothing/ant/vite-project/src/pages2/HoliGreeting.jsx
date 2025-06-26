import React, { useState } from "react";
//import "./App.css";

/* ------------------------------------------------------------------ */
/*  Dummy data                                                         */
/* ------------------------------------------------------------------ */
const customers = [
  { id: 1, name: "Name", mobile: "130" },
  { id: 2, name: "Name", mobile: "536" },
  { id: 3, name: "Name", mobile: "600" },
  { id: 4, name: "Name", mobile: "738" },
  { id: 5, name: "Name", mobile: "177" },
  { id: 6, name: "Name", mobile: "798" },
  { id: 7, name: "Name", mobile: "703" },
  { id: 8, name: "Name", mobile: "274" },
  { id: 9, name: "Name", mobile: "492" },
  { id: 10, name: "Name", mobile: "683" },
];

export default function App() {
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.mobile.includes(search)
  );

  const toggleCustomer = (id) => {
    setSelectedCustomers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="app">
      <style>
        {`
          .app {
            display: flex;
            font-family: Arial, sans-serif;
          }

          .sidebar {
            background: #ffffff;
            padding: 20px;
            width: 250px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-right: 1px solid #eee;
          }

          .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #d32f2f;
          }

          .sidebar nav a {
            display: block;
            margin: 12px 0;
            color: #333;
            text-decoration: none;
          }

          .send-button {
            background: #007bff;
            color: #fff;
            padding: 12px;
            border-radius: 5px;
            border: none;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
          }

          .main {
            flex: 1;
            display: flex;
            gap: 40px;
            padding: 25px 35px;
            background: #f3f6ff;
          }

          .customers {
            flex: 1 1 0;
            max-width: 600px;
          }

          .customers-header h2 {
            margin: 0;
            font-size: 1.25rem;
            color: #222;
          }

          .search-box {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 8px;
            border: 1px solid #aaa;
            background-color: #fff;
            font-size: 14px;
            color: #333;
          }

          .search-box::placeholder {
            color: #666;
          }

          .customers-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
          }

          .select-all-label {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
            cursor: pointer;
            color: #333;
          }

          input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            background-color: #fff;
            border: 2px solid #ccc;
            border-radius: 3px;
            width: 16px;
            height: 16px;
            cursor: pointer;
            position: relative;
            transition: background 0.2s, border 0.2s;
          }

          input[type="checkbox"]:checked {
            background-color: #007bff;
            border-color: #007bff;
          }

          input[type="checkbox"]:checked::after {
            content: "";
            position: absolute;
            top: 2px;
            left: 5px;
            width: 3px;
            height: 8px;
            border: solid #fff;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }

          .table-header,
          .table-row {
            display: grid;
            grid-template-columns: 20px 50px 1fr 130px;
            align-items: center;
            padding: 8px;
          }

          .table-header {
            font-weight: bold;
            border-bottom: 2px solid #ccc;
            background-color: #f1f5f9;
          }

          .table-header span {
            white-space: nowrap;
            color: #222;
            font-weight: 600;
            padding-left: 8px;
          }

          .table-row {
            border-bottom: 1px solid #ddd;
            background-color: #fff;
            padding: 10px 0;
          }

          .table-row:nth-child(even) {
            background-color: #f9f9f9;
          }

          .table-row:hover {
            background-color: #e0f0ff;
          }

          .table-row span {
            font-size: 14px;
            color: #333;
            padding-left: 8px;
          }

          .pagination {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 12px 0;
          }

          .page-info {
            font-size: 12px;
            color: #555;
          }

          .page-buttons {
            display: flex;
            align-items: center;
          }

          .page-buttons button {
            background-color: #f8f9fa;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 5px 10px;
            margin: 0 2px;
            cursor: pointer;
            font-size: 13px;
            color: #333;
            min-width: 35px;
            text-align: center;
          }

          .page-buttons .active {
            background-color: #007bff;
            color: white;
            font-weight: bold;
            border-color: #007bff;
          }

          .right-panel {
            width: 400px;
            display: flex;
            flex-direction: column;
          }

          .profile-bar {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 20px;
            gap: 10px;
          }

          .avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          .studio-select {
            padding: 6px 12px;
            border: 1px solid #aaa;
            border-radius: 6px;
            background: #fff;
            font-size: 14px;
            color: #333;
            font-weight: 500;
          }

          .greeting-card {
        
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            display:flex;
            flex-direction:column;
          }

          .card-image {
            width: 100%;
            border-radius: 8px;
            object-fit: cover;
          }

          .greeting-card h3 {
            font-size: 1.3rem;
            margin: 12px 0 0 0;
            color: #d32f2f;
          }

          .greeting-card p {
            margin-top: 10px;
            font-size: 0.95rem;
            color: #333;
        
          }

          .card-buttons {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
          }

          .change-button {
            padding: 8px 16px;
            border: none;
            border-radius: 5px;
            background: #e9ecef;
            color: #555;
            cursor: pointer;
          }

          .card-buttons .send-button {
            padding: 8px 16px;
            background: #d32f2f;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .menu {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .menu li {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 0;
            cursor: pointer;
            color: #333;
            font-size: 15px;
          }

          .menu li .icon {
            font-size: 16px;
          }

          .menu li.active {
            background-color: #e0eaff;
            padding: 10px;
            border-radius: 5px;
            color: #004aad;
            font-weight: bold;
          }
        `}
      </style>
      {/* ─────────────────────────── Sidebar ─────────────────────────── */}
      

      {/* ─────────────────────────── Main Area ────────────────────────── */}
      <main className="main">
        {/* ▸ Left column – customer list */}
        <section className="customers">
          {/* Header row */}
          <div className="customers-header">
            <h2>List of customers</h2>
          </div>

          {/* Search + Select-all */}
          <div className="customers-toolbar">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-box"
            />
            <label className="select-all-label">
              <input
                type="checkbox"
                checked={
                  filteredCustomers.length > 0 &&
                  filteredCustomers.every((c) => selectedCustomers.includes(c.id))
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    const newIds = filteredCustomers.map((c) => c.id);
                    setSelectedCustomers((prev) =>
                      Array.from(new Set([...prev, ...newIds]))
                    );
                  } else {
                    setSelectedCustomers((prev) =>
                      prev.filter(
                        (id) => !filteredCustomers.some((c) => c.id === id)
                      )
                    );
                  }
                }}
              />
              Select all
            </label>
          </div>

          {/* Table */}
          <div className="table-header">
            <span />
            <span>#</span>
            <span> Customer Name </span>
            <span> Mobile number</span>
          </div>

          {filteredCustomers.map((c) => (
            <div className="table-row" key={c.id}>
              <input
                type="checkbox"
                checked={selectedCustomers.includes(c.id)}
                onChange={() => toggleCustomer(c.id)}
              />
              <span>#{c.id.toString().padStart(2)}</span>
              <span>{c. name}</span>
              <span>{c. mobile}</span>
            </div>
          ))}

          {/* Pagination */}
          <div className="pagination">
            <div className="page-info">Page 1 of 21</div>
            <div className="page-buttons">
              <button>{`<`}</button>
              <button className="active">01</button>
              <button>02</button>
              <button>...</button>
              <button>{`>`}</button>
            </div>
          </div>
        </section>

        {/* ▸ Right column – profile bar + greeting card */}
        <section className="right-panel">
          {/* Avatar + Studio name bar */}
          <div className="profile-bar">
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="User avatar"
              className="avatar"
            />
            <select className="studio-select">
              <option>Studio name</option>
              <option>Studio A</option>
              <option>Studio B</option>
            </select>
          </div>

          {/* Greeting card */}
          <div className="greeting-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Holi_Festival_of_Colors.jpg"
              alt="Happy Holi"
              className="card-image"
            />
            <h3>Happy Holi</h3>
            <p>
              Joyful Holi! Wishing you a day filled with vibrant colors, sweet
              moments, and unforgettable memories. Happy Holi to you and your
              loved ones!
            </p>
            <div className="card-buttons">
              <button className="change-button">Change</button>
              <button className="send-button">Send</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}