import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const lead = {
  name: 'Anjali Nair',
  location: 'Bangalore',
  stars: 5,
  text: 'Lachoos Holidays made our honeymoon truly magical. Every detail \u2014 from the orchid-strewn houseboat in Alleppey to the moonlit dinner at the tea estate \u2014 felt thought through. They are not booking trips, they are composing memories.',
  image: '/images/packages/person-2.png',
};

const supporting = [
  {
    name: 'David Miller',
    location: 'London',
    stars: 5,
    text: 'The Sabarimala pilgrimage was so well-organized. As a first-timer, I felt safe and respected throughout. Expert guidance indeed.',
    image: '/images/packages/person-1.png',
  },
  {
    name: 'Suresh Pillai',
    location: 'Chennai',
    stars: 5,
    text: 'Best vehicle fleet in Pathanamthitta. The driver was professional and knew the forest routes perfectly. Unforgettable.',
    image: '/images/packages/person-3.png',
  },
];

const press = [
  'Conde Nast Traveller',
  'The Hindu',
  'Outlook Traveller',
  'Lonely Planet',
  'Travel + Leisure',
];

const Testimonials = () => (
  <section className="tst-section">
    <div className="tst-bg" />
    <div className="container">
      <motion.div
        className="tst-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="tst-label">VOICES OF JOURNEYS</span>
        <h2 className="tst-heading">
          What our<br /><em>guests say.</em>
        </h2>
      </motion.div>

      <div className="tst-grid">
        {/* Lead quote */}
        <motion.article
          className="tst-lead"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Quote size={56} className="tst-quote-icon" aria-hidden="true" />
          <blockquote className="tst-lead-text">
            &ldquo;{lead.text}&rdquo;
          </blockquote>
          <div className="tst-stars" aria-label={`${lead.stars} star rating`}>
            {Array.from({ length: lead.stars }).map((_, s) => (
              <Star key={s} size={15} fill="currentColor" />
            ))}
          </div>
          <div className="tst-user tst-user--lead">
            <img src={lead.image} alt={lead.name} className="tst-avatar" />
            <div>
              <strong className="tst-name">{lead.name}</strong>
              <span className="tst-location">{lead.location} &middot; Honeymoon, 2025</span>
            </div>
          </div>
        </motion.article>

        {/* Supporting cards */}
        <div className="tst-supporting">
          {supporting.map((rev, i) => (
            <motion.article
              key={rev.name}
              className="tst-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tst-stars" aria-label={`${rev.stars} star rating`}>
                {Array.from({ length: rev.stars }).map((_, s) => (
                  <Star key={s} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="tst-text">&ldquo;{rev.text}&rdquo;</p>
              <div className="tst-user">
                <img src={rev.image} alt={rev.name} className="tst-avatar tst-avatar--sm" />
                <div>
                  <strong className="tst-name">{rev.name}</strong>
                  <span className="tst-location">{rev.location}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Press strip */}
      <motion.div
        className="tst-press"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="tst-press-label">
          <span className="tst-press-rule" />
          <span>AS FEATURED IN</span>
          <span className="tst-press-rule" />
        </div>
        <ul className="tst-press-list">
          {press.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
