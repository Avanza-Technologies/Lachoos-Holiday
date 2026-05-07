import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const reasons = [
  {
    n: '01',
    title: 'Trusted Local Expertise',
    desc: 'Based in Pathanamthitta, we know every hidden trail and local secret of Kerala.',
  },
  {
    n: '02',
    title: 'Premium Hospitality',
    desc: 'We only partner with hand-picked hotels and houseboats that meet our luxury standards.',
  },
  {
    n: '03',
    title: '24/7 Direct Support',
    desc: 'No call centers. You get a dedicated travel specialist available at any hour.',
  },
  {
    n: '04',
    title: 'Tailor-Made Itineraries',
    desc: 'Every journey is unique. We architect your trip based on your specific desires.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.05 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const WhyChooseUs = () => (
  <section className="wcu-section">
    <div className="container">
      {/* Centered editorial header */}
      <motion.div
        className="wcu-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="wcu-label">
          <span className="wcu-label-rule" aria-hidden="true" />
          <span>OUR VALUES</span>
          <span className="wcu-label-rule" aria-hidden="true" />
        </span>
        <h2 className="wcu-heading">
          Why guests choose <em>Lachoos Holidays</em>
        </h2>
        <p className="wcu-lead">
          We are more than a travel agency &mdash; we are your personal Kerala
          specialists, accountable at every step of the journey.
        </p>

        {/* Decorative ornament — gold rule with a diamond */}
        <div className="wcu-ornament" aria-hidden="true">
          <span className="wcu-ornament-rule" />
          <svg viewBox="0 0 16 16" className="wcu-ornament-mark">
            <path d="M8 1 L15 8 L8 15 L1 8 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8" cy="8" r="1.4" fill="currentColor" />
          </svg>
          <span className="wcu-ornament-rule" />
        </div>
      </motion.div>

      {/* 2x2 matrix of values */}
      <ul className="wcu-grid">
        {reasons.map((item, i) => (
          <motion.li
            key={item.n}
            className="wcu-cell"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeIn}
          >
            <span className="wcu-cell-num">{item.n}</span>
            <div className="wcu-cell-body">
              <h3 className="wcu-cell-title">{item.title}</h3>
              <p className="wcu-cell-desc">{item.desc}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyChooseUs;
