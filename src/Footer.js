import React from "react";
import "./Footer.css";
import logo from "./assets/logoplanetmama.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Planet Mama Logo" className="footer-logo" />
          <h3>Planet Mama</h3>
          <p>
            Empowering rural women. Restoring the planet. Conserving oceans and creating sustainable futures for all.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/bio-toilet">Bio Toilets</a></li>
            <li><a href="/mangrove">Mangrove</a></li>
            <li><a href="/get-involved">Get Involved</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: planetmama.india@gmail.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Kolkata, India</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/planetmama.org" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/company/82778500" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Planet Mama. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
