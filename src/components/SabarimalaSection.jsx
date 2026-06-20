import { Clock, Navigation, Home as HomeIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getSabarimalaWhatsAppLink } from '../utils/whatsapp';
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

          {/* Circular gold seal */}
          <div className="ss-seal" aria-hidden="true">
            <svg viewBox="0 0 140 140" className="ss-seal-ring">
              <defs>
                <path
                  id="ss-seal-path"
                  d="M 70,70 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                />
              </defs>
              <circle cx="70" cy="70" r="64" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.4" />
              <circle cx="70" cy="70" r="55" fill="none" stroke="var(--gold)" strokeWidth="1" />
              <text fontSize="9" letterSpacing="3" fill="var(--gold)" fontFamily="Inter, sans-serif" fontWeight="700">
                <textPath href="#ss-seal-path" startOffset="0">
                  &middot; PATHANAMTHITTA EXPERTS &middot; SINCE 2014 &middot;
                </textPath>
              </text>
            </svg>
            <div className="ss-seal-core">
              <span className="ss-seal-core-line">SPIRITUAL</span>
              <span className="ss-seal-core-mark">&#10047;</span>
              <span className="ss-seal-core-line">SERVICES</span>
            </div>
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
          Specialized<br /><em>Sabarimala Services.</em>
        </h2>
        <span className="ss-rule" aria-hidden="true" />

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
            href={getSabarimalaWhatsAppLink()}
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
