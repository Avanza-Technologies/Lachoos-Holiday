import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import './Destinations.css';

/* ── Animated Counter ── */
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / target;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const destinations = [
  {
    title: 'Alleppey Backwaters',
    tag: 'EXPERT VERIFIED',
    desc: 'Drift through time on a private vessel where the only schedule is the setting sun.',
    img: '/images/packages/kumarakom-1.jpg',
    size: 'main',
    location: 'Alappuzha, Kerala'
  },
  {
    title: 'Munnar Tea Estates',
    tag: 'HILL STATION',
    desc: 'Exclusive stays in sprawling emerald hills in the heart of Kerala high ranges.',
    img: '/images/packages/munnar-1.jpg',
    size: 'side',
    location: 'Idukki, Kerala'
  },
  {
    title: 'Wayanad Wilderness',
    tag: 'ECO-LUXURY',
    desc: 'Rediscover silence in curated luxury jungle lodges where nature meets bespoke comfort.',
    img: '/images/packages/wayanad-1.jpg',
    size: 'wide',
    location: 'Wayanad, Kerala'
  },
];

const stats = [
  { num: 500, suffix: '+', label: 'Happy Travellers' },
  { num: 10, suffix: '+', label: 'Years of Experience' },
  { num: 9, suffix: '', label: 'Kerala Destinations' },
  { num: 48, suffix: 'h', label: 'Support Response' },
];

const Destinations = () => (
  <>
    {/* ── Stats Strip ── */}
    <section className="stats-strip">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <span className="stat-number">
              <Counter target={s.num} suffix={s.suffix} />
            </span>
            <span className="stat-label">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── Destinations ── */}
    <section className="dest-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="dest-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="dest-eyebrow">EXPERT CURATIONS</span>
            <h2 className="dest-title">Curated Experiences</h2>
          </div>
          <a href="#" className="dest-view-all">
            VIEW ALL DESTINATIONS <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Mosaic Grid */}
        <div className="dest-mosaic">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              className={`dest-card dest-card--${dest.size}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <img src={dest.img} alt={dest.title} className="dest-img" />
              <div className="dest-gradient" />

              {/* Hover Reveal Panel */}
              <div className="dest-panel">
                <div className="dest-panel-top">
                  <span className="dest-chip">{dest.tag}</span>
                </div>
                <div className="dest-panel-bottom">
                  <div className="dest-location">
                    <MapPin size={13} /> {dest.location}
                  </div>
                  <h3 className="dest-card-title">{dest.title}</h3>
                  <p className="dest-card-desc">{dest.desc}</p>
                  <Link to="/contact" className="dest-explore-btn">
                    Enquire Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Destinations;
