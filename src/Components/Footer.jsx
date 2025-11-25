import React from "react";
import "./Footer.css"; // if you are using external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">Animal</h2>
          <p className="footer-text">
            Creating beautiful, modern digital experiences.
          </p>

          <div className="footer-icons">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fas fa-envelope"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Product</h3>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Security</a>
          <a href="#">Enterprise</a>
          <a href="#">Support</a>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Partners</a>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <a href="#">Documentation</a>
          <a href="#">Community</a>
          <a href="#">API Reference</a>
          <a href="#">Status</a>
          <a href="#">Changelog</a>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
          <a href="#">Compliance</a>
          <a href="#">License</a>
        </div>

      </div>

      {/* <hr /> */}

      <div className="footer-bottom">
        © 2025 Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
