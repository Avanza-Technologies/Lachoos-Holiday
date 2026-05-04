import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Lachoos Holidays
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/sabarimala" className={`nav-link ${location.pathname === '/sabarimala' ? 'active' : ''}`}>Sabarimala Pilgrimage</Link>
          <Link to="/honeymoon" className={`nav-link ${location.pathname === '/honeymoon' ? 'active' : ''}`}>Honeymoon Special</Link>
          <Link to="/fleet" className={`nav-link ${location.pathname === '/fleet' ? 'active' : ''}`}>Vehicle Fleet</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </div>
        <a href="https://wa.me/919447912456?text=Hi! I want to plan a trip with Lachoos Holidays." className="btn btn-gold nav-btn" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>PLAN YOUR TRIP</a>
      </div>
    </nav>
  );
};

export default Navbar;
