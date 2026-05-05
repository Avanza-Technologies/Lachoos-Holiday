import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './ExpertContact.css';

const ExpertContact = () => (
  <section className="ec-section">
    <div className="container">
      <motion.div
        className="ec-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="ec-image-col">
          <div className="ec-image-frame">
            <img src="/images/packages/expert.jpg" alt="Rajesh Pillai - Senior Travel Specialist" />
          </div>
          <div className="ec-badge">
            <span className="ec-badge-num">10+</span>
            <span className="ec-badge-txt">Years of Kerala Expertise</span>
          </div>
        </div>

        <div className="ec-content-col">
          <span className="ec-label">SPEAK TO AN EXPERT</span>
          <h2 className="ec-heading">Your Personal Kerala Travel Architect</h2>
          <blockquote className="ec-quote">
            "I personally oversee every itinerary — from your first call to the moment you return home. Your journey is my commitment."
          </blockquote>
          <div className="ec-specialist">
            <strong>Rajesh Pillai</strong>
            <span>Senior Travel Specialist, Pathanamthitta</span>
          </div>

          <div className="ec-actions">
            <a
              href="https://wa.me/919447912456?text=Hi Rajesh! I need help planning my Kerala trip."
              target="_blank" rel="noopener noreferrer"
              className="ec-btn-primary"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a href="tel:+919447912456" className="ec-btn-outline">
              <Phone size={16} /> +91 94479 12456
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExpertContact;
