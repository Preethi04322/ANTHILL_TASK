import React from 'react';
import Sidebar from '../Components/Sidebar';
// import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Dashboard.css';
import CarspaceHeader from '../Components/CarspaceHeader';

const Dashboard = () => {
  const dashboardItems = [
    { title: 'Viewed', count: 0 },
    { title: 'Favourited', count: 0 },
    { title: 'Test drives', count: 0 },
    { title: 'Bookings', count: 0 }
  ];

  return (
    <>
      {/* <Header /> */}
      <CarspaceHeader/>
      <div className="page-layout">
        <Sidebar />
        <div className="page-box">
          <h1 className="dashboard-title">My carspace</h1>
          <div className="dashboard-cards">
            {dashboardItems.map((item, index) => (
              <div key={index} className="dashboard-card">
                <div className="card-gradient" />
                <div className="card-content">
                  <p className="card-title">{item.title}</p>
                  <p className="card-count">{item.count} Cars</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
