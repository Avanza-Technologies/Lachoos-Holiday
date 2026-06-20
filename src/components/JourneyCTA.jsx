import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './JourneyCTA.css';

const WA =
  'https://wa.me/919074885337?text=' +
  encodeURIComponent(
    'Hi Lachoos Holidays! I am ready to plan my Kerala journey — please guide me.'
  );

const JourneyCTA = () => (
  <section className="jcta-section">
    <div className="container">
      <motion.div
        className="jcta-card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="jcta-copy">
          <h2 className="jcta-title">Ready for the serene?</h2>
          <p className="jcta-desc">
            Tell us how you travel &mdash; we will shape the route, stays, and pace
            so you arrive rested, inspired, and already at home in Kerala.
          </p>
        </div>
        <a
          href={WA}
          className="jcta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start your journey
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default JourneyCTA;
