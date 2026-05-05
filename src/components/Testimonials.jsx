import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const reviews = [
  {
    name: "Anjali Nair", location: "Bangalore", stars: 5,
    text: "Lachoos Holidays made our honeymoon truly magical. The houseboat experience in Alleppey was beyond words. Highly recommended!",
    image: "/images/packages/t1.jpg"
  },
  {
    name: "David Miller", location: "London", stars: 5,
    text: "The Sabarimala pilgrimage was so well-organized. As a first-timer, I felt safe and respected throughout the journey. Expert guidance indeed.",
    image: "/images/packages/t2.jpg"
  },
  {
    name: "Suresh Pillai", location: "Chennai", stars: 5,
    text: "Best vehicle fleet in Pathanamthitta. The driver was very professional and knew the forest routes perfectly. An unforgettable experience.",
    image: "/images/packages/t3.jpg"
  }
];

const Testimonials = () => (
  <section className="tst-section">
    <div className="tst-bg" />
    <div className="container">
      <motion.div
        className="tst-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="tst-label">VOICES OF JOURNEYS</span>
        <h2 className="tst-heading">What Our Guests Say</h2>
      </motion.div>

      <div className="tst-grid">
        {reviews.map((rev, i) => (
          <motion.div
            key={i}
            className="tst-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.14 }}
          >
            <Quote size={36} className="tst-quote-icon" />
            <p className="tst-text">{rev.text}</p>
            <div className="tst-stars">
              {Array.from({ length: rev.stars }).map((_, s) => (
                <Star key={s} size={14} fill="currentColor" />
              ))}
            </div>
            <div className="tst-user">
              <img src={rev.image} alt={rev.name} className="tst-avatar" />
              <div>
                <strong className="tst-name">{rev.name}</strong>
                <span className="tst-location">{rev.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
