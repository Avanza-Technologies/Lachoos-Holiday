import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const waPlanTrip =
  'https://wa.me/919447912456?text=Hi! I want to plan a trip with Lachoos Holidays.';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const navLinkClass = (path) =>
    `nav-link ${location.pathname === path ? 'active' : ''}`;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-mark" aria-hidden="true">L</span>
          <span className="nav-logo-text">
            <span className="nav-logo-name">Lachoos</span>
            <span className="nav-logo-sub">HOLIDAYS &middot; KERALA</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div
          id="primary-navigation"
          className={`nav-panel ${menuOpen ? 'nav-panel--open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <div className="nav-links">
            <Link to="/" className={navLinkClass('/')}>
              Home
            </Link>
            <Link to="/sabarimala" className={navLinkClass('/sabarimala')}>
              Sabarimala Pilgrimage
            </Link>
            <Link to="/honeymoon" className={navLinkClass('/honeymoon')}>
              Honeymoon Special
            </Link>
            <Link to="/fleet" className={navLinkClass('/fleet')}>
              Vehicle Fleet
            </Link>
            <Link to="/contact" className={navLinkClass('/contact')}>
              Contact Us
            </Link>
          </div>
          <a
            href={waPlanTrip}
            className="btn btn-gold nav-btn nav-btn--mobile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            PLAN YOUR TRIP
          </a>
        </div>

        <a
          href={waPlanTrip}
          className="btn btn-gold nav-btn nav-btn--desktop"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          PLAN YOUR TRIP
        </a>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
