import React from 'react';
import { Clock, Navigation, Home as HomeIcon } from 'lucide-react';
import './SabarimalaSection.css';

const SabarimalaSection = () => {
  return (
    <section className="sabarimala-section bg-green section-padding">
      <div className="container saba-container">
        <div className="saba-image-col">
          <img src="/images/packages/sabarimala-main.jpg" alt="Sabarimala Temple" className="saba-img" />
        </div>
        
        <div className="saba-content-col">
          <p className="section-label text-gold">SPIRITUAL SANCTUARY</p>
          <h2 className="section-title text-white">Sabarimala<br/>Specialized Packages</h2>
          
          <div className="saba-features">
            <div className="saba-feature">
              <div className="saba-icon">
                <Clock size={24} />
              </div>
              <div className="saba-feature-text">
                <h4 className="text-white">Fast-Track Coordination</h4>
                <p>Exclusive liaison with local authorities to ensure a smooth, dignified pilgrimage experience.</p>
              </div>
            </div>

            <div className="saba-feature">
              <div className="saba-icon">
                <Navigation size={24} />
              </div>
              <div className="saba-feature-text">
                <h4 className="text-white">Premium Transit</h4>
                <p>Luxury SUVs transit to Pamba. Experienced drivers specializing in forest terrain.</p>
              </div>
            </div>

            <div className="saba-feature">
              <div className="saba-icon">
                <HomeIcon size={24} />
              </div>
              <div className="saba-feature-text">
                <h4 className="text-white">Comfortable Stays</h4>
                <p>Curated accommodation that balances the austerity of pilgrimage with high-end hygiene standards.</p>
              </div>
            </div>
          </div>

          <div className="saba-divider"></div>

          <p className="saba-desc">
            <em>"Expertly-crafted journeys for the soul, backed by decades of local heritage."</em>
          </p>

          <a href="https://wa.me/919447912456?text=Hello! I want to inquire about the Sabarimala specialized pilgrimage packages." className="btn btn-outline-gold" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>BOOK YOUR PILGRIMAGE</a>
        </div>
      </div>
    </section>
  );
};

export default SabarimalaSection;
