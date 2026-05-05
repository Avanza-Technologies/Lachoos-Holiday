import React, { useMemo, useState } from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import './TrendingPackages.css';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedImage = ({ images, title }) => {
  const [index, setIndex] = useState(0);

  // If only one image, just show it
  if (!Array.isArray(images)) {
    return <img src={images} alt={title} loading="lazy" />;
  }

  // Effect to cycle images
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={title}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
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
    images: [
      '/images/packages/munnar-1.jpg',
      '/images/packages/munnar-2.jpg',
      '/images/packages/munnar-3.jpg'
    ],
  },
  {
    title: 'Grand Wayanad Expedition',
    duration: '3 Nights / 4 Days',
    location: 'Wayanad',
    price: '₹15,200',
    rating: 4.8,
    images: [
      '/images/packages/wayanad-1.jpg',
      '/images/packages/wayanad-2.jpg',
      '/images/packages/wayanad-3.jpg'
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
      '/images/packages/kochi-3.jpg'
    ],
  },
  {
    title: 'Kumarakom Backwaters & Houseboats',
    duration: '3 Nights / 4 Days',
    location: 'Kumarakom, Alleppey',
    price: '₹21,400',
    rating: 4.9,
    images: [
      '/images/packages/kumarakom-1.jpg',
      '/images/packages/kumarakom-2.jpg',
      '/images/packages/kumarakom-3.jpg'
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
      '/images/packages/thekkady-3.jpg'
    ],
  },
  {
    title: 'Varkala Cliffs & Ayurveda',
    duration: '4 Nights / 5 Days',
    location: 'Varkala, Kovalam',
    price: '₹19,600',
    rating: 4.7,
    images: [
      '/images/packages/varkala-1.jpg',
      '/images/packages/varkala-2.jpg',
      '/images/packages/varkala-3.jpg'
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
      '/images/packages/bekal-3.jpg'
    ],
  },
  {
    title: 'Gavi Eco Trail & Jungle Camp',
    duration: '2 Nights / 3 Days',
    location: 'Pathanamthitta, Gavi',
    price: '₹14,500',
    rating: 4.8,
    images: [
      '/images/packages/gavi-1.jpg',
      '/images/packages/gavi-2.jpg',
      '/images/packages/gavi-3.jpg'
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
      '/images/packages/sabarimala-3.jpg'
    ],
  },
];

const INITIAL_VISIBLE = 6;
const WA_VIEW_ALL =
  'https://wa.me/919447912456?text=' +
  encodeURIComponent(
    'Hi Lachoos Holidays! Please share your full Kerala package brochure and seasonal offers.'
  );

const TrendingPackages = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePackages = useMemo(
    () => (showAll ? PACKAGES : PACKAGES.slice(0, INITIAL_VISIBLE)),
    [showAll]
  );

  const hasMore = PACKAGES.length > INITIAL_VISIBLE;

  return (
    <section className="section-padding trending-section bg-light">
      <div className="container">
        <div className="trending-header flex justify-between items-end mb-12">
          <div>
            <p className="section-label text-gold">POPULAR JOURNEYS</p>
            <h2 className="section-title text-green">Trending Kerala Packages</h2>
          </div>
          <div className="trending-header-actions">
            {hasMore && (
              <button
                type="button"
                className="view-all-btn view-all-btn--toggle"
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll ? 'SHOW FEWER' : 'VIEW MORE PACKAGES'}
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
        </div>

        <div className="packages-grid">
          {visiblePackages.map((pkg) => (
            <div className="pkg-card" key={pkg.title}>
              <div className="pkg-image">
                <AnimatedImage images={pkg.images || pkg.image} title={pkg.title} />
                <div className="pkg-rating">
                  <Star size={12} fill="currentColor" /> {pkg.rating}
                </div>
              </div>
              <div className="pkg-content">
                <div className="pkg-meta">
                  <span>
                    <Clock size={14} /> {pkg.duration}
                  </span>
                  <span>
                    <MapPin size={14} /> {pkg.location}
                  </span>
                </div>
                <h3>{pkg.title}</h3>
                <div className="pkg-footer">
                  <div className="pkg-price">
                    <span className="from">From</span>
                    <span className="amount">{pkg.price}</span>
                  </div>
                  <a
                    href={`https://wa.me/919447912456?text=${encodeURIComponent(`Hi! I want to book the ${pkg.title} package.`)}`}
                    className="btn btn-green pkg-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPackages;
