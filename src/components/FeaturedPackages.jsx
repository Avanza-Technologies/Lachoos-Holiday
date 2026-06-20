import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { ALL_PACKAGES } from '../data/packages';
import './FeaturedPackages.css';

// Session-level flags to ensure animation runs only on hard refresh or first view
let hasEnteredViewport = false;
let hasAnimated = false;

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
                    <span className="featured-price-label">Starting From</span>
                    {(() => {
                      const discountPercent = (pkg.startingPrice % 3 === 0) ? 12 : (pkg.startingPrice % 2 === 0) ? 10 : 15;
                      const originalPrice = Math.round(pkg.startingPrice / (1 - discountPercent / 100));
                      const roundedOriginal = Math.round(originalPrice / 100) * 100;
                      return (
                        <>
                          <div className="featured-price-discount-row">
                            <span className="featured-original-price-wrap">
                              ₹{roundedOriginal.toLocaleString('en-IN')}
                              <motion.span
                                className="price-strike-line"
                                initial={{ width: hasAnimated ? "100%" : "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={hasAnimated ? { duration: 0 } : { delay: 0.5, duration: 0.4, ease: "easeInOut" }}
                              />
                            </span>
                            <motion.span
                              className="featured-price-badge"
                              initial={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -6 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={hasAnimated ? { duration: 0 } : { delay: 0.8, duration: 0.3 }}
                            >
                              ↓ {discountPercent}%
                            </motion.span>
                          </div>
                          <div className="featured-price-final-row">
                            <motion.span
                              className="featured-price-val"
                              initial={{ opacity: hasAnimated ? 1 : 0, scale: hasAnimated ? 1 : 0.85, y: hasAnimated ? 0 : 5 }}
                              whileInView={{ opacity: 1, scale: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={hasAnimated ? { duration: 0 } : { delay: 0.9, duration: 0.35, ease: "easeOut" }}
                            >
                              ₹{pkg.startingPrice.toLocaleString('en-IN')}
                            </motion.span>
                          </div>
                        </>
                      );
                    })()}
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
