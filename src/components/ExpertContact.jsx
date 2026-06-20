import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import './ExpertContact.css';

const ExpertContact = () => (
  <section className="ec-section">
    <div className="container">
      <motion.div
        className="ec-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="ec-image-col">
          <div className="ec-image-frame">
            <img src="/images/packages/expert.jpg" alt="Rajesh Pillai - Senior Travel Specialist" />
          </div>
          <div className="ec-badge">
            <span className="ec-badge-num">10+</span>
            <span className="ec-badge-txt">Years of Kerala Expertise</span>
          </div>
        </div>

        <div className="ec-content-col">
          <span className="ec-label">SPEAK TO AN EXPERT</span>
          <h2 className="ec-heading">
            Your personal Kerala<br /><em>travel architect.</em>
          </h2>
          <blockquote className="ec-quote">
            &ldquo;I personally oversee every itinerary &mdash; from your first call to the moment you return home. Your journey is my commitment.&rdquo;
          </blockquote>

          {/* Handwritten signature line */}
          <svg
            className="ec-signature"
            viewBox="0 0 220 48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 30 C 14 8, 28 42, 44 22 S 70 8, 86 28 S 116 36, 132 18 S 158 6, 178 30 S 200 38, 218 22"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M 152 36 L 218 36"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>

          <div className="ec-specialist">
            <span className="ec-status">
              <span className="ec-status-dot" aria-hidden="true" />
              <span>Available now</span>
            </span>
            <strong>Rajesh Pillai</strong>
            <span className="ec-role">Senior Travel Specialist, Pathanamthitta</span>
          </div>

          <div className="ec-actions">
            <a
              href="https://wa.me/919074885337?text=Hi Rajesh! I need help planning my Kerala trip."
              target="_blank" rel="noopener noreferrer"
              className="ec-btn-primary"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a href="tel:+919074885337" className="ec-btn-outline">
              <Phone size={16} /> +91 90748 85337
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExpertContact;
