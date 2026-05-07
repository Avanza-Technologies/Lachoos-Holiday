import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './HeritageValues.css';

const tags = ['Ancient traditions', 'Festivals', 'Artisanship'];

const reasons = [
  {
    n: '01',
    title: 'Trusted Local Expertise',
    desc: 'Pathanamthitta-based; we know every hidden trail and local secret.',
  },
  {
    n: '02',
    title: 'Premium Hospitality',
    desc: 'Hand-picked hotels and houseboats that meet our luxury standards.',
  },
  {
    n: '03',
    title: '24/7 Direct Support',
    desc: 'No call centres. A dedicated travel specialist, available any hour.',
  },
  {
    n: '04',
    title: 'Tailor-Made Itineraries',
    desc: 'Every journey is unique. We architect your trip around your desires.',
  },
];

const pkg = (name) => `${import.meta.env.BASE_URL}images/packages/${name}`;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
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
            src={pkg('kochi-2.jpg')}
            alt="Streets of Fort Kochi capturing Kerala's heritage"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const el = e.currentTarget;
              if (!el.dataset.fallback) {
                el.dataset.fallback = '1';
                el.src = pkg('kochi-1.jpg');
              }
            }}
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

      {/* === RIGHT — Our Values === */}
      <motion.article
        className="hv-col hv-col--values"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="hv-eyebrow">
          <span className="hv-eyebrow-rule" aria-hidden="true" />
          OUR VALUES
        </span>

        <h2 className="hv-title">
          Why guests choose <em>Lachoos&nbsp;Holidays</em>
        </h2>

        <p className="hv-lead">
          We are more than a travel agency &mdash; we are your personal Kerala
          specialists, accountable at every step of the journey.
        </p>

        <ul className="hv-list">
          {reasons.map((item, i) => (
            <motion.li
              key={item.n}
              className="hv-row"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
            >
              <span className="hv-row-num" aria-hidden="true">
                {item.n}
              </span>
              <div className="hv-row-body">
                <h3 className="hv-row-title">{item.title}</h3>
                <p className="hv-row-desc">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.article>
    </div>
  </section>
);

export default HeritageValues;
