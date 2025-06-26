import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Do you have Something to Sell through Us?</h2>
        <button className="sell-button">Sell your car today</button>
      </div>

      <div className="footer-main">
        <div className="footer-links">
          <div>
            <h4>Overview</h4>
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>Cars</li>
              <li>Testimonials</li>
              <li>FAQ’s</li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>Blogs</li>
              <li>Press mentions</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <p>📍 7th b main Btm 1st stage Bangalore Karnataka 560029</p>
          <p>📧 hello@email.com</p>
          <p>📞 +91 8310955920</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <div className="social-icons">
          <div className="social-icons">
  <i className="fa fa-facebook-official" aria-hidden="true"></i>
  <i className="fa fa-youtube-play" aria-hidden="true"></i>
  <i className="fa fa-twitter" aria-hidden="true"></i>
  <i className="fa fa-linkedin" aria-hidden="true"></i>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;