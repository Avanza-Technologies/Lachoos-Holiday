import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section bg-green">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h2 className="footer-logo text-gold">Lachoos Holidays</h2>
            <p className="footer-desc">
              Expertly crafting Kerala memories from the heart of Pathanamthitta. Your trusted partner for pilgrimages and luxury escapes.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Mail size={18} /></a>
              <a href="#" className="social-icon"><Phone size={18} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Vehicle Fleet</a></li>
              <li><a href="#">Sabarimala Pilgrimage</a></li>
              <li><a href="#">Honeymoon Special</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">POLICIES</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Cancellation Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">CONTACT INFO</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={16} className="contact-icon text-gold" />
                <span>+91 944 791 2456</span>
              </li>
              <li>
                <MapPin size={16} className="contact-icon text-gold" />
                <span>Pathanamthitta, Kerala,<br/>India (OPC) Pvt. Ltd.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Lachoos Holidays India (OPC) Pvt. Ltd. Expertly Crafted in Pathanamthitta.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
