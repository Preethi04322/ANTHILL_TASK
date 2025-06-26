// src/Components/Bookings.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Bookings.css";

const data = [
  { name: "J", bookings: 70 },
  { name: "F", bookings: 90 },
  { name: "M", bookings: 100 },
  { name: "A", bookings: 80 },
  { name: "M", bookings: 95 },
  { name: "J", bookings: 70 },
  { name: "J", bookings: 110 },
  { name: "A", bookings: 105 },
];

const D_Bookings = () => {
  return (
    <div className="bookings-container">
      <h3 className="bookings-title">Total Bookings</h3>

      <div className="bookings-summary">
        <h2 className="bookings-total">42,098</h2>
        <p className="bookings-change">+2%</p>
        <p className="bookings-last-month">Last month: 5,222</p>
      </div>

      <div className="bookings-chart">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis hide />
            <Tooltip />
            <Bar
              dataKey="bookings"
              fill="#00C2FF"
              barSize={18}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default D_Bookings;
