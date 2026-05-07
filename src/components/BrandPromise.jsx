import React from 'react';
import { motion } from 'framer-motion';
import './BrandPromise.css';

const marqueeWords = [
  'Backwaters',
  'Hill Stations',
  'Heritage',
  'Spice Trails',
  'Pilgrimage',
  'Ayurveda',
  'Wildlife',
  'Cuisine',
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const BrandPromise = () => {
  const loop = [...marqueeWords, ...marqueeWords];

  return (
    <section className="bp-section">
      <div className="container">
        <motion.div
          className="bp-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reveal}
        >
          <span className="bp-eyebrow">EST. PATHANAMTHITTA &middot; KERALA</span>
          <span className="bp-rule" />
          <p className="bp-statement">
            Twelve districts. <em>Countless stories.</em><br />
            One trusted local hand.
          </p>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="bp-marquee" aria-hidden="true">
        <div className="bp-marquee-track">
          {loop.map((word, i) => (
            <span key={i} className="bp-marquee-item">
              <span className="bp-marquee-word">{word}</span>
              <span className="bp-marquee-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;
