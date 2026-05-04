import React from 'react';
import './Honeymoon.css';

const Honeymoon = () => {
  return (
    <div className="honeymoon-page">
      <section className="honeymoon-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <p className="section-label text-gold">EXCLUSIVELY CRAFTED JOURNEYS</p>
          <h1 className="hero-title">Lachoos Honeymoon Escapes</h1>
          <p className="hero-subtitle">Discover the soul of Kerala through hand-picked intimate retreats, where luxury meets local root instability.</p>
          <button className="btn btn-green">View Collections</button>
        </div>
      </section>

      <section className="honeymoon-packages section-padding">
        <div className="container">
          <div className="packages-grid">
            <div className="package-card">
              <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80" alt="Heritage & Backwater Bliss" />
              <div className="package-content">
                <span className="tag">DIRECT LIAISON</span>
                <h3>Heritage & Backwater Bliss</h3>
                <p>A 4-day odyssey through private canals, staying in century-old ancestral homes repurposed for modern luxury.</p>
                <div className="package-footer">
                  <span>Starting From ₹48,500</span>
                  <button className="btn-link">View Details</button>
                </div>
              </div>
            </div>

            <div className="package-card">
              <img src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80" alt="Wilderness of Gavi" />
              <div className="package-content">
                <span className="tag">ECO-LUXURY</span>
                <h3>Wilderness of Gavi</h3>
                <p>Disconnect in the untouched highlands. Exclusive safari access and private lakeside glamping for the adventurous soul.</p>
                <div className="package-footer">
                  <span>Starting From ₹32,000</span>
                  <button className="btn-link">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section section-padding bg-light">
        <div className="container philosophy-container">
          <div className="philosophy-image">
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80" alt="Philosophy" />
          </div>
          <div className="philosophy-content">
            <p className="section-label text-gold">OUR PHILOSOPHY</p>
            <h2 className="section-title">The Lachoos Way</h2>
            <p>We don't just book hotels; we architect memories. Rooted in Pathanamthitta, we bring a level of accountability that only a local expert can provide.</p>
            
            <div className="phil-item">
              <h4>Personalized Accountability</h4>
              <p>Every itinerary is hand-crafted and backed by a named specialist you can call directly, anytime.</p>
            </div>
            <div className="phil-item">
              <h4>Homely Luxury</h4>
              <p>The soul of a homestay with the precision of a 5-star hotel. Deeply local, exceptionally comfortable.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Honeymoon;
