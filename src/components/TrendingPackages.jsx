import React, { useMemo, useState } from 'react';
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import './TrendingPackages.css';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedImage = ({ images, title }) => {
  const isArray = Array.isArray(images);
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    if (!isArray) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isArray, images]);

  if (!isArray) {
    return <img src={images} alt={title} loading="lazy" />;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={title}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </AnimatePresence>
    </div>
  );
};

const PACKAGES = [
  {
    title: 'Misty Munnar & Alleppey',
    duration: '4 Nights / 5 Days',
    location: 'Munnar, Alleppey',
    price: '₹18,500',
    rating: 4.9,
    badge: "EDITOR'S PICK",
    images: [
      '/images/packages/munnar-1.jpg',
      '/images/packages/kumarakom-1.jpg',
      '/images/packages/munnar-2.jpg',
      '/images/packages/kumarakom-2.jpg',
    ],
  },
  {
    title: 'Grand Wayanad Expedition',
    duration: '3 Nights / 4 Days',
    location: 'Wayanad',
    price: '₹15,200',
    rating: 4.8,
    badge: 'BESTSELLER',
    images: [
      '/images/packages/wayanad-1.jpg',
      '/images/packages/wayanad-2.jpg',
      '/images/packages/wayanad-3.jpg',
    ],
  },
  {
    title: 'Kochi Heritage & Athirappilly',
    duration: '2 Nights / 3 Days',
    location: 'Kochi, Athirappilly',
    price: '₹12,800',
    rating: 4.7,
    images: [
      '/images/packages/kochi-1.jpg',
      '/images/packages/kochi-2.jpg',
      '/images/packages/kochi-3.jpg',
    ],
  },
  {
    title: 'Kumarakom Backwaters & Houseboats',
    duration: '3 Nights / 4 Days',
    location: 'Kumarakom, Alleppey',
    price: '₹21,400',
    rating: 4.9,
    badge: 'BESTSELLER',
    images: [
      '/images/packages/kumarakom-1.jpg',
      '/images/packages/kumarakom-2.jpg',
      '/images/packages/kumarakom-3.jpg',
    ],
  },
  {
    title: 'Thekkady Wildlife & Spice Route',
    duration: '3 Nights / 4 Days',
    location: 'Thekkady, Periyar',
    price: '₹16,900',
    rating: 4.8,
    images: [
      '/images/packages/thekkady-1.jpg',
      '/images/packages/thekkady-2.jpg',
      '/images/packages/thekkady-3.jpg',
    ],
  },
  {
    title: 'Varkala Cliffs & Ayurveda',
    duration: '4 Nights / 5 Days',
    location: 'Varkala, Kovalam',
    price: '₹19,600',
    rating: 4.7,
    badge: 'NEW',
    images: [
      '/images/packages/varkala-1.jpg',
      '/images/packages/varkala-2.jpg',
      '/images/packages/varkala-3.jpg',
    ],
  },
  {
    title: 'Bekal & Nileshwaram Coastal Escape',
    duration: '3 Nights / 4 Days',
    location: 'Kasaragod, Bekal',
    price: '₹17,300',
    rating: 4.6,
    images: [
      '/images/packages/bekal-1.jpg',
      '/images/packages/bekal-2.jpg',
      '/images/packages/bekal-3.jpg',
    ],
  },
  {
    title: 'Gavi Eco Trail & Jungle Camp',
    duration: '2 Nights / 3 Days',
    location: 'Pathanamthitta, Gavi',
    price: '₹14,500',
    rating: 4.8,
    badge: 'NEW',
    images: [
      '/images/packages/gavi-1.jpg',
      '/images/packages/gavi-2.jpg',
      '/images/packages/gavi-3.jpg',
    ],
  },
  {
    title: 'Sabarimala Pilgrim Comfort Circuit',
    duration: '3 Nights / 4 Days',
    location: 'Pathanamthitta, Pamba',
    price: '₹13,900',
    rating: 4.9,
    images: [
      '/images/packages/sabarimala-1.jpg',
      '/images/packages/sabarimala-2.jpg',
      '/images/packages/sabarimala-3.jpg',
    ],
  },
];

const INITIAL_VISIBLE = 7; // 1 featured + 6 grid
const WA_VIEW_ALL =
  'https://wa.me/919074885337?text=' +
  encodeURIComponent(
    'Hi Lachoos Holidays! Please share your full Kerala package brochure and seasonal offers.'
  );

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

const PackageCard = ({ pkg, featured = false, index = 0 }) => {
  const waLink = `https://wa.me/919074885337?text=${encodeURIComponent(`Hi! I want to book the ${pkg.title} package.`)}`

  return (
    <motion.div
      className={`pkg-card ${featured ? 'pkg-card--featured' : ''}`}
      custom={index}
      variants={cardMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      <div className="pkg-image">
        <AnimatedImage images={pkg.images || pkg.image} title={pkg.title} />
        {pkg.badge && (
          <span className={`pkg-badge ${featured ? 'pkg-badge--gold' : ''}`}>
            {pkg.badge}
          </span>
        )}
        <div className="pkg-rating">
          <Star size={12} fill="currentColor" /> {pkg.rating}
        </div>
      </div>
      <div className="pkg-content">
        <div className="pkg-meta">
          <span><Clock size={14} /> {pkg.duration}</span>
          <span><MapPin size={14} /> {pkg.location}</span>
        </div>
        <h3>{pkg.title}</h3>
        {featured && (
          <p className="pkg-feature-desc">
            Our most-booked Kerala combination &mdash; mist-wrapped tea estates, then a
            private houseboat through the backwaters at sunset.
          </p>
        )}
        <div className="pkg-footer">
          <div className="pkg-price">
            <span className="from">From</span>
            <span className="amount">{pkg.price}</span>
            <span className="per">/ per person</span>
          </div>
          <a
            href={waLink}
            className="pkg-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK NOW <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const TrendingPackages = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePackages = useMemo(
    () => (showAll ? PACKAGES : PACKAGES.slice(0, INITIAL_VISIBLE)),
    [showAll]
  );

  const hasMore = PACKAGES.length > INITIAL_VISIBLE;
  const [featured, ...rest] = visiblePackages;

  return (
    <section className="trending-section">
      <div className="container">
        <motion.div
          className="trending-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="trending-eyebrow">POPULAR JOURNEYS</p>
            <h2 className="trending-title">
              Trending<br />
              <em>Kerala Packages.</em>
            </h2>
          </div>
          <div className="trending-header-actions">
            {hasMore && (
              <button
                type="button"
                className="view-all-btn view-all-btn--toggle"
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll ? 'SHOW FEWER' : 'VIEW MORE PACKAGES'}
                <ArrowRight size={13} />
              </button>
            )}
            <a
              href={WA_VIEW_ALL}
              className="view-all-btn view-all-btn--wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              FULL CATALOG ON WHATSAPP
            </a>
          </div>
        </motion.div>

        {/* Featured wide card */}
        {featured && <PackageCard pkg={featured} featured index={0} />}

        {/* Grid */}
        <div className="packages-grid">
          <AnimatePresence initial={false}>
            {rest.map((pkg, i) => (
              <PackageCard key={pkg.title} pkg={pkg} index={i + 1} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TrendingPackages;
