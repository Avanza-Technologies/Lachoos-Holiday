import React, { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const heroImg = "/images/packages/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" }
  })
};

const Hero = () => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('3 - 5 Days');
  const [travelers, setTravelers] = useState('2 Adults');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const locations = [
    'Alleppey Backwaters', 'Munnar Tea Estates', 'Wayanad Wilderness',
    'Kochi Heritage', 'Thekkady Wildlife', 'Sabarimala Pilgrimage',
    'Athirappilly Waterfalls', 'Varkala Beach', 'Kumarakom'
  ];

  const filteredLocations = locations.filter(loc =>
    loc.toLowerCase().includes(destination.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const message = `Hello! I want to plan a trip to ${destination || 'Kerala'}.\nDuration: ${duration}\nTravelers: ${travelers}\nCan you provide more details?`;
    window.open(`https://wa.me/919447912456?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="hero-section">
      <motion.div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        {/* Label */}
        <motion.span
          className="hero-eyebrow"
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
        >
          GOD'S OWN COUNTRY · KERALA, INDIA
        </motion.span>

        {/* Title */}
        <motion.h1
          className="hero-title"
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
        >
          Where Emerald<br />Waters Meet<br />the Malabar Sun
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
        >
          Experience Kerala with personalized luxury — from the backwaters to the high ranges, curated by local experts.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          onSubmit={handleSearch}
          className="search-bar"
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
        >
          {/* Destination */}
          <div className="search-field relative">
            <MapPin className="search-icon" size={18} />
            <div className="search-text">
              <span className="search-label">DESTINATION</span>
              <input
                type="text" placeholder="Where to?"
                className="search-input"
                value={destination}
                onChange={(e) => { setDestination(e.target.value); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              {showSuggestions && destination && filteredLocations.length > 0 && (
                <ul className="suggestions-list">
                  {filteredLocations.map((loc, i) => (
                    <li key={i} onClick={() => { setDestination(loc); setShowSuggestions(false); }}>{loc}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Duration */}
          <div className="search-field">
            <Calendar className="search-icon" size={18} />
            <div className="search-text">
              <span className="search-label">DURATION</span>
              <select className="search-select" value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option>2 - 3 Days</option>
                <option>3 - 5 Days</option>
                <option>5 - 7 Days</option>
                <option>7+ Days</option>
              </select>
            </div>
          </div>

          {/* Travelers */}
          <div className="search-field">
            <Users className="search-icon" size={18} />
            <div className="search-text">
              <span className="search-label">TRAVELERS</span>
              <select className="search-select" value={travelers} onChange={(e) => setTravelers(e.target.value)}>
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>Family (3-5)</option>
                <option>Group (5+)</option>
              </select>
            </div>
          </div>

          <button type="submit" className="search-btn">
            <Search size={16} />
            <span>SEARCH<br/>PACKAGES</span>
            <ArrowRight size={14} />
          </button>
        </motion.form>

        {/* Trust Badges */}
        <motion.div
          className="hero-trust"
          custom={4} initial="hidden" animate="visible" variants={fadeUp}
        >
          <div className="trust-item"><span className="trust-num">500+</span><span>Happy Travellers</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-num">10+</span><span>Years in Kerala</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-num">4.9★</span><span>Avg. Rating</span></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-cue">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
