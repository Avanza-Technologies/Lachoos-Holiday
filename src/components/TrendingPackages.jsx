import React, { useMemo, useState } from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import './TrendingPackages.css';

const PACKAGES = [
  {
    title: 'Misty Munnar & Alleppey',
    duration: '4 Nights / 5 Days',
    location: 'Munnar, Alleppey',
    price: '₹18,500',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Grand Wayanad Expedition',
    duration: '3 Nights / 4 Days',
    location: 'Wayanad',
    price: '₹15,200',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Kochi Heritage & Athirappilly',
    duration: '2 Nights / 3 Days',
    location: 'Kochi, Athirappilly',
    price: '₹12,800',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1590490359854-dfba19688d70?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Kumarakom Backwaters & Houseboats',
    duration: '3 Nights / 4 Days',
    location: 'Kumarakom, Alleppey',
    price: '₹21,400',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Thekkady Wildlife & Spice Route',
    duration: '3 Nights / 4 Days',
    location: 'Thekkady, Periyar',
    price: '₹16,900',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1596402184434-2b6fd7b5be9c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Varkala Cliffs & Ayurveda',
    duration: '4 Nights / 5 Days',
    location: 'Varkala, Kovalam',
    price: '₹19,600',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1586610544317-0335e4ed08f7?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Bekal & Nileshwaram Coastal Escape',
    duration: '3 Nights / 4 Days',
    location: 'Kasaragod, Bekal',
    price: '₹17,300',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1512343879784-a9606f2a0f31?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Gavi Eco Trail & Jungle Camp',
    duration: '2 Nights / 3 Days',
    location: 'Pathanamthitta, Gavi',
    price: '₹14,500',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Sabarimala Pilgrim Comfort Circuit',
    duration: '3 Nights / 4 Days',
    location: 'Pathanamthitta, Pamba',
    price: '₹13,900',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1561361058-4ca6af2dee4e?auto=format&fit=crop&w=600&q=80',
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
                <img src={pkg.image} alt={pkg.title} loading="lazy" />
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
