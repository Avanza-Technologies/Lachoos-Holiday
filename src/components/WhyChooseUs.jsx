import React from 'react';
import { Shield, Award, Headphones, Map } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" } }) };

const reasons = [
  { icon: <Shield size={28} />, title: "Trusted Local Expertise", desc: "Based in Pathanamthitta, we know every hidden trail and local secret of Kerala." },
  { icon: <Award size={28} />, title: "Premium Hospitality", desc: "We only partner with hand-picked hotels and houseboats that meet our luxury standards." },
  { icon: <Headphones size={28} />, title: "24/7 Direct Support", desc: "No call centers. You get a dedicated travel specialist available at any hour." },
  { icon: <Map size={28} />, title: "Tailor-Made Itineraries", desc: "Every journey is unique. We architect your trip based on your specific desires." }
];

const WhyChooseUs = () => (
  <section className="wcu-section">
    <div className="container">
      <motion.div
        className="wcu-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="wcu-label">OUR VALUES</span>
        <h2 className="wcu-heading">Why Choose Lachoos Holidays?</h2>
        <p className="wcu-lead">We are more than a travel agency — we are your personal Kerala specialists, accountable at every step.</p>
      </motion.div>

      <div className="wcu-grid">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            className="wcu-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
          >
            <div className="wcu-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
