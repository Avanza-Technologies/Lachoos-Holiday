import React from 'react';
import './Fleet.css';

const Fleet = () => {
  return (
    <div className="fleet-page">
      <section className="fleet-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="hero-title">Travel India with Lachoos Holidays</h1>
          <p className="hero-subtitle">Experience the soul of Kerala in unparalleled comfort. Our curated fleet ensures every mile of your pilgrimage or holiday is defined by luxury and safety.</p>
          
          <div className="fleet-filter">
            <div className="filter-item">
              <label>VEHICLE TYPE</label>
              <select><option>Premium Sedan</option></select>
            </div>
            <div className="filter-item">
              <label>PICK-UP DATE</label>
              <input type="date" />
            </div>
            <div className="filter-item">
              <label>DURATION (DAYS)</label>
              <input type="number" defaultValue={1} />
            </div>
            <button className="btn btn-green">Check Availability</button>
          </div>
        </div>
      </section>

      <section className="fleet-list section-padding">
        <div className="container fleet-container">
          <div className="fleet-main">
            <p className="section-label text-gold">EXQUISITE SELECTION</p>
            <h2 className="section-title">Our Premium Fleet</h2>
            
            <div className="vehicle-card">
              <img src="/images/packages/fleet-1.jpg" alt="Mercedes-Benz E-Class" />
              <div className="vehicle-info">
                <span className="expert-reviewed">EXPERT REVIEWED</span>
                <h3>Mercedes-Benz E-Class</h3>
                <p className="price">Starting at ₹8,500/day</p>
                <div className="specs">
                  <span>👤 4 Seats</span>
                  <span>💼 3 Bags</span>
                  <span>❄️ Climate Control</span>
                </div>
                <p className="desc">Ideal for corporate visits and luxury honeymoon transfers. Includes a professional chauffeur.</p>
                <button className="btn btn-outline-gold">Reserve Now</button>
              </div>
            </div>

            <div className="vehicle-card">
              <img src="/images/packages/fleet-2.jpg" alt="Toyota Fortuner" />
              <div className="vehicle-info">
                <span className="direct-liaison">DIRECT LIAISON</span>
                <h3>Toyota Fortuner</h3>
                <p className="price">Starting at ₹6,200/day</p>
                <div className="specs">
                  <span>👤 7 Seats</span>
                  <span>🏔️ All-Terrain</span>
                  <span>🛰️ GPS Tracked</span>
                </div>
                <p className="desc">The preferred choice for Sabarimala Pilgrimage groups. Robust performance meets interior comfort.</p>
                <button className="btn btn-outline-gold">Reserve Now</button>
              </div>
            </div>
          </div>

          <aside className="fleet-sidebar">
            <div className="reservation-card">
              <h3>Instant Quote & Reservation</h3>
              <form>
                <input type="text" placeholder="FULL NAME" />
                <input type="email" placeholder="EMAIL ADDRESS" />
                <input type="tel" placeholder="PHONE NUMBER" />
                <input type="text" placeholder="PREFERRED ROUTE" />
                <button type="submit" className="btn btn-green w-full">Request Premium Quote</button>
              </form>
            </div>

            <div className="guarantee-card">
              <h3>The Lachoos Guarantee</h3>
              <ul>
                <li><strong>Direct Liaison Service:</strong> No middlemen. You deal directly with our Pathanamthitta-based experts.</li>
                <li><strong>Hygiene & Safety:</strong> Deep cleaning before every trip and 24/7 breakdown assistance.</li>
                <li><strong>Pilgrimage Specialists:</strong> Drivers familiar with Sabarimala protocols and sacred forest routes.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
