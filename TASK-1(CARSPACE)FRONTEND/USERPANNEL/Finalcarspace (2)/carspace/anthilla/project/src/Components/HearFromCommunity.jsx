
"use client"

import "./HearFromCommunity.css"

const HearFromCommunity = () => {
  return (
    <div className="community-section">
      <div className="community-container">
        <div className="community-left">
          <div className="section-header">
            <div className="red-line"></div>
            <h2 className="section-title">
              Hear From Our
              <br />
              Community
            </h2>
          </div>
          <p className="section-description">
            Fusce venenatis tellus a felis scelerisque,
            <br />
            non pulvinar est pellentesque.
          </p>
          <div className="navigation-arrows">
            <button className="nav-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="nav-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="community-right">
          <div className="background-circle"></div>
          <div className="testimonial-card">
            <div className="quote-marks">
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                <path
                  d="M0 32V16C0 7.168 7.168 0 16 0V8C11.584 8 8 11.584 8 16V20H16V32H0ZM24 32V16C24 7.168 31.168 0 40 0V8C35.584 8 32 11.584 32 16V20H40V32H24Z"
                  fill="#e74c3c"
                />
              </svg>
            </div>

            <p className="testimonial-text">
              I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the
              perfect home. We couldn't be happier with our new place!
            </p>

            <div className="testimonial-footer">
              <div className="profile-section">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                  alt="Arjan S. Patil"
                  className="profile-image"
                />
                <span className="profile-name">Arjan S. Patil</span>
              </div>

              <div className="rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>

          <div className="pagination-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HearFromCommunity

