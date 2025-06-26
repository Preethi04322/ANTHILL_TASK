import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Do you have Something<br/>
         to Sell through Us?</h2>
        <button className="sell-button">Sell your car today</button>
      </div>

      <hr className="footer-line" />

      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Overview</h4>
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>Cars</li>
              <li>Testimonials</li>
              <li>FAQ's</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li>Blogs</li>
              <li>Press mentions</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-contact-card">
            <p><span className="icon"><img src="/location.png" alt="location" className="size"/></span> 7th b main Btm 1st stage Bangalore<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Karnataka 560029</p>
            <p><span className="icon"><img src="/email.png" alt="email" className="size"/></span> hello@email.com</p>
            <p><span className="icon"><img src="/phone.png" alt="phone" className="size"/></span> +91 8310955920</p>
          </div>
        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <div className="footer-icons">
            <span className="social-icon"><img src="/facebook.png" alt="facebook" className="social-icon"/></span>
            <span className="social-icon"><img src="/linkedin.png" alt="linkedin" className="social-icon"/></span>
            <span className="social-icon"><img src="/twitter.png" alt="twitter" className="social-icon"/></span>
            <span className="social-icon"><img src="/youtube.png" alt="youtube" className="social-icon"/></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
