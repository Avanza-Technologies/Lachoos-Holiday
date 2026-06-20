import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './HeritageValues.css';

const tags = ['Ancient traditions', 'Festivals', 'Artisanship'];

const memories = [
  {
    img: '/images/packages/honeymoon-2.jpg',
    tag: 'Honeymoons',
    alt: 'Happy couple in Kerala tea gardens'
  },
  {
    img: '/images/packages/sabarimala.jpg',
    tag: 'Pilgrimages',
    alt: 'Sabarimala pilgrimage group'
  },
  {
    img: '/images/packages/BackwaterWithBoat.jpg',
    tag: 'Houseboats',
    alt: 'Alleppey backwaters traditional houseboat'
  },
  {
    img: '/images/packages/wayanad.jpg',
    tag: 'Hill Stations',
    alt: 'Scenic Wayanad hills view'
  },
  {
    img: '/images/packages/fleet-2.jpg',
    tag: 'Premium Fleet',
    alt: 'Toyota Fortuner luxury SUV transfer'
  },
  {
    img: '/images/packages/Fort_kochi.jpg',
    tag: 'Group Tours',
    alt: 'Historic Fort Kochi group tour'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const HeritageValues = () => (
  <section className="hv-section" aria-label="Our story and values">
    <div className="container hv-grid">
      {/* === LEFT — Soul of Kerala === */}
      <motion.article
        className="hv-col hv-col--soul"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <figure className="hv-figure">
          <img
            src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
            alt="The iconic green makeup and crown of a Kathakali dancer"
            loading="lazy"
            decoding="async"
          />
          <span className="hv-figure-veil" aria-hidden="true" />
          <span className="hv-figure-seal" aria-hidden="true" />
        </figure>

        <span className="hv-eyebrow">
          <span className="hv-eyebrow-rule" aria-hidden="true" />
          HERITAGE &amp; CULTURE
        </span>

        <h2 className="hv-title">
          Soul of <em>Kerala</em>
        </h2>

        <p className="hv-lead">
          Beyond the postcard views lies a living tapestry of ritual, rhythm, and
          hospitality &mdash; with dignity, depth, and local fluency.
        </p>

        <ul className="hv-tags" aria-label="Themes">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <Link to="/contact" className="hv-link">
          Explore heritage <ArrowRight size={16} />
        </Link>
      </motion.article>

      {/* === Center vertical divider === */}
      <span className="hv-divider" aria-hidden="true">
        <span className="hv-divider-line" />
        <svg className="hv-divider-mark" viewBox="0 0 16 16">
          <path
            d="M8 1 L15 8 L8 15 L1 8 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="8" cy="8" r="1.4" fill="currentColor" />
        </svg>
        <span className="hv-divider-line" />
      </span>

      {/* === RIGHT — Memories & Moments === */}
      <motion.article
        className="hv-col hv-col--memories"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="hv-eyebrow">
          <span className="hv-eyebrow-rule" aria-hidden="true" />
          MEMORIES &amp; MOMENTS
        </span>

        <h2 className="hv-title">
          Moments We <em>Cherish</em>
        </h2>

        <p className="hv-lead">
          Every smile, every journey, and every sacred pilgrimage is a memory we cherish. Over the years, we have helped thousands of families, couples, and pilgrims experience the true warmth and beauty of South India.
        </p>

        {/* Desktop/Tablet 3D Rotating Cylinder */}
        <div className="hv-cylinder-wrapper">
          <div className="hv-cylinder-container">
            {/* Static Central Golden Text Axis */}
            <div className="hv-cylinder-center-text" aria-hidden="true">
              <span className="hv-center-brand">Lachoos</span>
              <span className="hv-center-subbrand">Holidays</span>
            </div>

            <div className="hv-cylinder">
              {memories.map((m, i) => (
                <div
                  key={i}
                  className="hv-cylinder-card"
                  style={{
                    transform: `rotateY(${i * 60}deg) translateZ(190px)`
                  }}
                >
                  <motion.div
                    className="hv-cylinder-card-inner"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeUp}
                  >
                    <img src={m.img} alt={m.alt} loading="lazy" />
                    <div className="hv-cylinder-overlay">
                      <span className="hv-cylinder-tag">{m.tag}</span>
                    </div>
                  </motion.div>

                  {/* 3D Reflection Layer */}
                  <div className="hv-cylinder-card-reflect" aria-hidden="true">
                    <img src={m.img} alt={m.alt} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  </section>
);

export default HeritageValues;
