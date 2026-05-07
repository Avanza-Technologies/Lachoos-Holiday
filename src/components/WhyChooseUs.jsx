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
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const WhyChooseUs = () => (
  <section className="wcu-section">
    <div className="container">
      {/* Centered header band */}
      <motion.div
        className="wcu-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="wcu-label">
          <span className="wcu-label-rule" aria-hidden="true" />
          OUR VALUES
          <span className="wcu-label-rule" aria-hidden="true" />
        </span>
        <h2 className="wcu-heading">
          Why guests choose <em>Lachoos Holidays</em>
        </h2>
        <p className="wcu-lead">
          We are more than a travel agency &mdash; we are your personal
          Kerala specialists, accountable at every step of the journey.
        </p>
      </motion.div>

      {/* Two-column body — rows + image, matched heights */}
      <div className="wcu-body">
        <ul className="wcu-list">
          {reasons.map((item, i) => (
            <motion.li
              key={item.n}
              className="wcu-row"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeIn}
            >
              <span className="wcu-num">{item.n}</span>
              <div className="wcu-row-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.figure
          className="wcu-image"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/images/packages/kumarakom-1.jpg" alt="Kerala backwaters at golden hour" />
          <figcaption className="wcu-image-caption">
            <span className="wcu-image-eyebrow">A SIGNATURE MOMENT</span>
            <span className="wcu-image-title">Sunrise on the Backwaters</span>
          </figcaption>
        </motion.figure>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
