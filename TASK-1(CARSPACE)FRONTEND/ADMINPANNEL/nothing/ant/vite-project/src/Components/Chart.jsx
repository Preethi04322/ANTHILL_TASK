// src/Components/Chart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Chart.css";

const data = [
  { name: "Mon", responses: 400 },
  { name: "Tue", responses: 300 },
  { name: "Wed", responses: 500 },
  { name: "Thu", responses: 250 },
  { name: "Fri", responses: 600 },
  { name: "Sat", responses: 350 },
  { name: "Sun", responses: 700 },
];

const Chart = () => {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Overview</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="responses"
              stroke="#007bff"
              strokeWidth={2.5}
              dot={{ r: 4 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
