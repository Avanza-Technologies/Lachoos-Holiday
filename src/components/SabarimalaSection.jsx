import React from 'react';
import { Clock, Navigation, Home as HomeIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SabarimalaSection.css';

const features = [
  { icon: <Clock size={22} />, title: "Fast-Track Coordination", desc: "Exclusive liaison with local authorities to ensure a smooth, dignified pilgrimage experience." },
  { icon: <Navigation size={22} />, title: "Premium Transit", desc: "Luxury SUVs to Pamba. Experienced drivers specializing in forest terrain and sacred routes." },
  { icon: <HomeIcon size={22} />, title: "Comfortable Stays", desc: "Curated accommodation balancing pilgrimage austerity with high-end hygiene standards." },
];

const SabarimalaSection = () => (
  <section className="ss-section">
    <div className="container ss-layout">
      {/* Image */}
      <motion.div
        className="ss-image-col"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="ss-image-wrapper">
          <img src="/images/packages/sabarimala-main.jpg" alt="Sabarimala Temple" />
          <div className="ss-image-badge">
            <span className="ss-badge-title">Spiritual Packages</span>
            <span className="ss-badge-sub">Pathanamthitta Experts</span>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="ss-content-col"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span className="ss-label">SPIRITUAL SANCTUARY</span>
        <h2 className="ss-heading">
          Sabarimala<br />Specialized Packages
        </h2>

        <div className="ss-features">
          {features.map((f, i) => (
            <div className="ss-feature" key={i}>
              <div className="ss-feature-icon">{f.icon}</div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="ss-quote">
          "Expertly-crafted journeys for the soul, backed by decades of local heritage."
        </blockquote>

        <div className="ss-actions">
          <a
            href="https://wa.me/919447912456?text=Hello! I want to inquire about the Sabarimala specialized pilgrimage packages."
            className="ss-btn-primary"
            target="_blank" rel="noopener noreferrer"
          >
            Book Your Pilgrimage <ArrowRight size={16} />
          </a>
          <Link to="/sabarimala" className="ss-btn-outline">
            View Full Details
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SabarimalaSection;
