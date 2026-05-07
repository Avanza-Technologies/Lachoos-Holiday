import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import './Footer.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/sabarimala', label: 'Sabarimala Pilgrimage' },
  { to: '/honeymoon', label: 'Honeymoon Special' },
  { to: '/fleet', label: 'Vehicle Fleet' },
  { to: '/contact', label: 'Contact' },
];

const policyLinks = [
  { to: '#', label: 'Privacy Policy' },
  { to: '#', label: 'Terms & Conditions' },
  { to: '#', label: 'Cancellation Policy' },
  { to: '#', label: 'Sitemap' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Brand statement */}
        <div className="footer-statement">
          <span className="footer-eyebrow">
            <span className="footer-eyebrow-rule" aria-hidden="true" />
            <span>UNTIL WE MEET AGAIN</span>
            <span className="footer-eyebrow-rule" aria-hidden="true" />
          </span>
          <p className="footer-quote">
            <em>&ldquo;A journey is best measured in friends, not in miles.&rdquo;</em>
          </p>
        </div>

        <hr className="footer-rule" />

        {/* Grid */}
        <div className="footer-grid">
          <div className="footer-col footer-col--brand">
            <div className="footer-logo">
              <span className="footer-logo-mark" aria-hidden="true">L</span>
              <div>
                <span className="footer-logo-name">Lachoos Holidays</span>
                <span className="footer-logo-sub">PATHANAMTHITTA &middot; KERALA</span>
              </div>
            </div>
            <p className="footer-desc">
              Expertly crafting Kerala memories from the heart of Pathanamthitta.
              Your trusted partner for pilgrimages, hill stations, backwaters
              and the quiet luxuries in between.
            </p>
            <div className="social-links">
              <a
                href="https://wa.me/919447912456"
                aria-label="WhatsApp"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="tel:+919447912456"
                aria-label="Call"
                className="social-icon"
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:hello@lachoosholidays.in"
                aria-label="Email"
                className="social-icon"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">EXPLORE</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">POLICIES</h4>
            <ul className="footer-links">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.to}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">REACH US</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={14} className="contact-icon" />
                <a href="tel:+919447912456">+91 944 791 2456</a>
              </li>
              <li>
                <Mail size={14} className="contact-icon" />
                <a href="mailto:hello@lachoosholidays.in">hello@lachoosholidays.in</a>
              </li>
              <li>
                <MapPin size={14} className="contact-icon" />
                <span>
                  Pathanamthitta, Kerala<br />
                  India (OPC) Pvt. Ltd.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-rule" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            <span>&copy; {new Date().getFullYear()} Lachoos Holidays India (OPC) Pvt. Ltd.</span>
            <span className="footer-copy-sep" aria-hidden="true">&middot;</span>
            <span>Expertly Crafted in Pathanamthitta.</span>
          </p>
          <button
            type="button"
            className="footer-back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
