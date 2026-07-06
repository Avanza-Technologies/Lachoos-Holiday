import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, ArrowRight, Info } from 'lucide-react';
import { ALL_PACKAGES } from '../data/packages';
import './FeaturedPackages.css';

// Session-level flags to ensure animation runs only on hard refresh or first view
let hasEnteredViewport = false;
let hasAnimated = false;

// Helper component for budget badge with info popover
export const BudgetBadgeWithTooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="budget-badge-container"
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="featured-pkg-budget-badge">
        #Budget Package
        <button
          type="button"
          className="budget-tooltip-trigger"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowTooltip((prev) => !prev);
          }}
          aria-label="What is a budget package?"
        >
          <Info size={13} />
        </button>
      </span>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="budget-tooltip-content"
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <h4 className="budget-tooltip-title">Budget Friendly Tourism</h4>
            <p className="budget-tooltip-desc">
              Customizable, cost-effective travel itineraries designed to deliver excellent sightseeing, comfortable stays, and transit options at highly affordable, pocket-friendly rates.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FeaturedPackages = () => {
  // Get packages where featured is true, limited to 3 items
  const featuredList = ALL_PACKAGES.filter((p) => p.featured === true).slice(0, 3);

  useEffect(() => {
    return () => {
      if (hasEnteredViewport) {
        hasAnimated = true;
      }
    };
  }, []);

  return (
    <motion.section
      className="featured-pkgs-section"
      onViewportEnter={() => {
        hasEnteredViewport = true;
      }}
    >
      <div className="container">
        <div className="featured-pkgs-header text-center">
          <span className="featured-pkgs-eyebrow">HIGH-CONVERSION OFFERINGS</span>
          <h2 className="featured-pkgs-title">
            Featured <em>Travel Packages.</em>
          </h2>
          <p className="featured-pkgs-subtitle">
            Our most popular, hand-crafted itineraries. Explore the beauty and culture of South India.
          </p>
        </div>

        <div className="featured-pkgs-grid">
          {featuredList.map((pkg) => (
            <div key={pkg.id} className="featured-pkg-card">
              <div className="featured-pkg-image-box">
                <img src={pkg.coverImage} alt={pkg.name} className="featured-pkg-image" loading="lazy" />
                <span className="featured-pkg-duration">
                  <Clock size={13} /> {pkg.duration}
                </span>
              </div>
              <div className="featured-pkg-content">
                <h3 className="featured-pkg-card-title">{pkg.name}</h3>
                
                {pkg.destinations && pkg.destinations.length > 0 && (
                  <div className="featured-pkg-locations">
                    <MapPin size={13} />
                    <span>{pkg.destinations.join(" → ")}</span>
                  </div>
                )}
                
                <p className="featured-pkg-desc">{pkg.shortDescription}</p>

                <div className="featured-pkg-footer">
                  <div className="featured-pkg-price-block">
                    <BudgetBadgeWithTooltip hasAnimated={hasAnimated} />
                  </div>

                  <div className="featured-pkg-actions">
                    <Link to={`/packages/${pkg.category}/${pkg.slug}`} className="link-featured-details">
                      View More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedPackages;
