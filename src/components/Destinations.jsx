import React from 'react';
import './Destinations.css';

const Destinations = () => {
  return (
    <section className="section-padding destinations-section">
      <div className="container">
        <div className="destinations-header">
          <div className="dest-title-area">
            <p className="section-label text-gold">EXPERT CURATIONS</p>
            <h2 className="section-title text-green">Curated Experiences</h2>
          </div>
          <div className="dest-action">
            <a href="#" className="view-all-link">VIEW ALL DESTINATIONS</a>
          </div>
        </div>

        <div className="dest-grid">
          {/* Alleppey */}
          <div className="dest-card dest-card-main">
            <img src="/images/packages/kumarakom.jpg" alt="Alleppey Backwaters" className="dest-img" />
            <div className="dest-overlay-gradient"></div>
            <div className="dest-card-content">
              <div className="dest-tags">
                <span className="dest-tag">EXPERT VERIFIED</span>
                <span className="dest-tag">DIRECT LIAISON</span>
              </div>
              <h3 className="dest-card-title">Alleppey Backwaters</h3>
              <p className="dest-card-desc">Drift through time on a private vessel, where the only schedule is the setting sun.</p>
            </div>
          </div>

          {/* Munnar */}
          <div className="dest-card dest-card-side">
            <img src="/images/packages/munnar-alleppey.jpg" alt="Munnar Tea Estates" className="dest-img" />
            <div className="dest-overlay-gradient"></div>
            <div className="dest-card-content">
              <div className="dest-tags">
                <span className="dest-tag">EXPERT LIAISON</span>
              </div>
              <h3 className="dest-card-title">Munnar Tea Estates</h3>
              <p className="dest-card-desc">Exclusive stays in sprawling emerald hills in the heart of Kerala high ranges.</p>
            </div>
          </div>

          {/* Wayanad */}
          <div className="dest-card dest-card-wide">
            <img src="/images/packages/wayanad.jpg" alt="Wayanad Wilderness" className="dest-img" />
            <div className="dest-overlay-gradient"></div>
            <div className="dest-card-content">
              <div className="dest-tags">
                <span className="dest-tag text-gold">ECO-LUXURY RETREATS</span>
              </div>
              <h3 className="dest-card-title">Wayanad Wilderness</h3>
              <p className="dest-card-desc">Rediscover silence in our curated luxury jungle lodges, where nature meets bespoke comfort.</p>
              <button className="btn btn-gold dest-btn">EXPLORE WILDLIFE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
