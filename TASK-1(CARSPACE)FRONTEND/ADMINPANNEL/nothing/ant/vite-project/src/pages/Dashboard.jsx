import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="cards-row">
        {/* Left Column: Total Cars & Users */}
        <div className="left-column">
          <div className="card info-card">
            <div className="icon-container">
              <span className="icon">🏛️</span>
            </div>
            <div className="info-content">
              <div className="info-header-row">
                <div className="info-title">Total Cars</div>
                <div className="info-number">4,098</div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
              <div className="info-subtext">43 more to break last month record</div>
            </div>

          </div>

          <div className="card info-card">
            <div className="icon-container">
              <span className="icon">👤</span>
            </div>
            <div className="info-content">
              <div className="info-header-row">
                <div className="info-title">Total Users</div>
                <div className="info-number">1,098</div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '60%' }}></div>
              </div>
              <div className="info-subtext">43 more to break last month record</div>
            </div>

          </div>
        </div>

        {/* Right Column: Total Bookings */}
        <div className="right-column">
          <div className="card bookings-card">
            <h4>Total Bookings</h4>
            <div className="booking-stats-row">
                <span className="stat-main">42,098</span>
                <span className="stat-sub">Last month: 5,222</span>
                <span className="stat-growth">↑2%</span>
              </div>

           {/* Bar chart with Y-axis */}
                  <div className="graph-wrapper">
                    <div className="y-axis-labels">
                      {[0, 40, 80, 120].map((val) => (
                        <div key={val} className="y-label">{val}</div>
                      ))}
                    </div>

                    <div className="graph-area">
                      <div className="grid-lines">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="grid-line"></div>
                        ))}
                      </div>

                      <div className="bar-graph">
                        {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A'].map((label, index) => (
                          <div className="bar-container" key={index}>
                            <div
                              className="bar"
                              style={{ height: `${50 + (index % 5) * 15}px` }}
                            ></div>
                            <div className="bar-label">{label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              </ div>
            </div>

          </div>

          {/* Lower section: Overview and Recent Bookings */}
          <div className="lower-section">
            <div className="overview-card">
              <h4>Overview (Responses)</h4>
              <div className="overview-chart-container">
            <div className="overview-y-axis">
            {[100, 80, 60, 40, 20, 0].map((val) => (
              <div key={val} className="y-label">{val}</div>
            ))}
          </div>

          <div className="overview-graph-wrapper">
            <div className="overview-grid-lines">
              {[...Array(5)].map((_, i) => (
                <div className="grid-line" key={i}></div>
              ))}
            </div>

            {[
              { label: 'Jan', value: 60 },
              { label: 'Feb', value: 80 },
              { label: 'Mar', value: 45 },
              { label: 'Apr', value: 50 },
              { label: 'May', value: 70 },
              { label: 'Jun', value: 40 },
              { label: 'Jul', value: 55 },
              { label: 'Aug', value: 85 },
              { label: 'Sept', value: 90 },
              { label: 'Oct', value: 50 }
            ].map((item, index) => {
            const heightPercent = (item.value / 100) * 100;
            return (
            <div className="bar-wrapper" key={index}>
              <div
                className="line-bar"
                style={{ height: `${heightPercent}%` }}
              >
                <div className="dot" />
              </div>
              <div className="bar-month-label">{item.label}</div>
            </div>
             );
            })}
    </div>
  </div>
</div>
        <div className="recent-bookings-card">
          <h4>Recent Bookings</h4>
          <div className="booking">
  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
  <div className="booking-info">
    <p>Amelia Turner</p>
    <small>10h ago</small>
  </div>
</div>

          <div className="booking">
  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
  <div className="booking-info">
    <p>Amelia Turner</p>
    <small>10h ago</small>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
