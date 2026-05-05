import React from 'react';
import { MessageCircle } from 'lucide-react';
import './ExpertContact.css';

const ExpertContact = () => {
  return (
    <section className="expert-contact-section bg-light">
      <div className="container expert-container">
        <div className="expert-card">
          <div className="expert-avatar">
            <img src="/images/packages/expert.jpg" alt="Rajesh Pillai" />
          </div>
          <h3 className="expert-name">Rajesh Pillai</h3>
          <p className="expert-title">SENIOR TRAVEL SPECIALIST</p>
          <p className="expert-quote">
            "I personally oversee every itinerary to ensure your Kerala journey is flawless and unforgettable."
          </p>
          <a href="https://wa.me/919447912456?text=Hi Rajesh! I need help planning my Kerala trip." className="btn btn-green expert-btn" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            <MessageCircle size={18} /> CHAT WITH ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertContact;
