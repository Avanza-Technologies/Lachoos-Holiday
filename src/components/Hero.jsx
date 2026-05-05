import React, { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight, Search } from 'lucide-react';
import './Hero.css';

const heroImg = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1500&q=80"; // Bright Alleppey Backwaters with Houseboats

const Hero = () => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('3 - 5 Days');
  const [travelers, setTravelers] = useState('2 Adults');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const locations = [
    'Alleppey Backwaters',
    'Munnar Tea Estates',
    'Wayanad Wilderness',
    'Kochi Heritage',
    'Thekkady Wildlife',
    'Sabarimala Pilgrimage',
    'Athirappilly Waterfalls',
    'Varkala Beach',
    'Kumarakom'
  ];

  const filteredLocations = locations.filter(loc => 
    loc.toLowerCase().includes(destination.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const message = `Hello! I want to plan a trip to ${destination || 'Kerala'}. 
Details:
- Duration: ${duration}
- Travelers: ${travelers}
Can you provide more details?`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919447912456?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Where Emerald
          <br className="hero-br" />
          Waters
          <br className="hero-br" />
          Meet the Malabar Sun
        </h1>
        <p className="hero-subtitle">
          Experience Kerala with personalized luxury. From the backwaters to the high
          ranges, curated by experts.
        </p>

        <form onSubmit={handleSearch} className="search-bar">
          {/* Destination Field */}
          <div className="search-field relative">
            <MapPin className="search-icon" size={20} />
            <div className="search-text">
              <span className="search-label">DESTINATION</span>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="search-input"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              {showSuggestions && destination && filteredLocations.length > 0 && (
                <ul className="suggestions-list">
                  {filteredLocations.map((loc, i) => (
                    <li key={i} onClick={() => {
                      setDestination(loc);
                      setShowSuggestions(false);
                    }}>{loc}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Duration Field */}
          <div className="search-field">
            <Calendar className="search-icon" size={20} />
            <div className="search-text">
              <span className="search-label">DURATION</span>
              <select 
                className="search-select"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option>2 - 3 Days</option>
                <option>3 - 5 Days</option>
                <option>5 - 7 Days</option>
                <option>7+ Days</option>
              </select>
            </div>
          </div>

          {/* Travelers Field */}
          <div className="search-field">
            <Users className="search-icon" size={20} />
            <div className="search-text">
              <span className="search-label">TRAVELERS</span>
              <select 
                className="search-select"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
              >
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>Family (3-5)</option>
                <option>Group (5+)</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-green search-btn">
            SEARCH<br/>PACKAGES <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
