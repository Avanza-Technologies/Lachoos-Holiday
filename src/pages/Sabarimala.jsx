import React from 'react';
import './Sabarimala.css';

const Sabarimala = () => {
  return (
    <div className="sabarimala-page">
      <section className="sabarimala-hero-alt">
        <div className="hero-overlay"></div>
        <div className="container">
          <p className="section-label text-gold">SABARIMALA 2024 SPECIALIZED LOGISTICS</p>
          <h1 className="hero-title">The Sacred Path,<br/>Perfectly Planned.</h1>
          <p className="hero-subtitle">Experience the divine sanctity of Sabarimala with the personal accountability of Pathanamthitta experts. We handle the logistics; you focus on the prayer.</p>
          <div className="hero-actions">
            <button className="btn btn-gold">Plan My Itinerary</button>
            <button className="btn btn-outline-gold">View Package Details</button>
          </div>
        </div>
      </section>

      <section className="sacred-services section-padding">
        <div className="container">
          <h2 className="section-title text-center">Sacred Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚐</div>
              <h3>Transport from Pathanamthitta</h3>
              <p>Our premium fleet of San-Travel vehicles ensures a comfortable journey from the gateways of Pathanamthitta to Pamba. Fully air-conditioned, spiritual-ready interiors.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Virtual Queue Support</h3>
              <p>Seamless registration and booking assistance for the official Sabarimala Virtual Queue system.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏨</div>
              <h3>Pilgrim Stays</h3>
              <p>Hand-picked, hygienic, and peaceful accommodations in Pathanamthitta and Pamba for rest before the trek.</p>
            </div>
            <div className="service-card dark">
              <h3>Custom Planning</h3>
              <p>Itineraries tailored to your group size and physical requirements. We provide localized knowledge on the best timing for Darshan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pilgrimage-flow section-padding bg-light">
        <div className="container flow-container">
          <div className="flow-steps">
            <h2 className="section-title">The Pilgrimage Flow</h2>
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-content">
                <h4>Arrival & Pathanamthitta Prep</h4>
                <p>Arrival at Pathanamthitta. Meet your personal specialist for the orientation and collection of ritual items. Overnight stay in curated luxury pilgrim suites.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-content">
                <h4>Journey to Pamba & The Trek</h4>
                <p>Private transit to Pamba. Assisted entry into the trekking path. Dedicated support points along the forest route for elderly or first-time pilgrims.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-content">
                <h4>Darshan & Return Transit</h4>
                <p>Early morning Darshan at Sannidhanam. Descent back to Pamba where our vehicle awaits to transport you back for the departure journey.</p>
              </div>
            </div>
          </div>

          <div className="inquiry-form-card">
            <h3>Request a Custom Plan</h3>
            <p>Fill out the details below, and our specialist will contact you within 2 hours with a personalized proposal.</p>
            <form>
              <input type="text" placeholder="YOUR NAME" />
              <input type="text" placeholder="CONTACT NUMBER" />
              <div className="form-row">
                <input type="date" placeholder="TRAVEL DATE" />
                <input type="number" placeholder="PILGRIM COUNT" />
              </div>
              <textarea placeholder="SPECIAL REQUIREMENTS (Elderly assistance, dietary needs...)"></textarea>
              <button type="submit" className="btn btn-green w-full">SEND INQUIRY</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sabarimala;
