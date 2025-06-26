import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserTable.css";

const users = [
  {
    id: "#01",
    name: "Amelio Tuner",
    email: "amelio@gmail.com",
    testDrive: "Yes",
    phone: "(406) 555-0120",
    description: "—",
    carSearched: "View",
  },
  // Duplicate sample rows
  ...Array(6).fill({
    id: "#01",
    name: "Amelio Tuner",
    email: "amelio@gmail.com",
    testDrive: "Yes",
    phone: "(406) 555-0120",
    description: "—",
    carSearched: "View",
  }),
];

const UserTable = () => {
  const navigate = useNavigate();

  const handleRowClick = (index) => {
    if (index === 0) {
      navigate("/users/1"); // Only for first row
    }
  };

  return (
    <div className="user-table-wrapper">
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Test drive</th>
              <th>Phone Number</th>
              <th>Description</th>
              <th>Car Searched</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr
                key={idx}
                onClick={() => handleRowClick(idx)}
                className={idx === 0 ? "clickable-row" : ""}
              >
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.testDrive}</td>
                <td>{u.phone}</td>
                <td>{u.description}</td>
                <td className="view-btn">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
