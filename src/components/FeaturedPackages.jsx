import { Link } from 'react-router-dom';
import { Clock, MapPin, MessageCircle, Eye } from 'lucide-react';
import { ALL_PACKAGES } from '../data/packages';
import { getPackageWhatsAppLink } from '../utils/whatsapp';
import './FeaturedPackages.css';

const FeaturedPackages = () => {
  // Get packages where featured is true, limited to 3 items
  const featuredList = ALL_PACKAGES.filter((p) => p.featured === true).slice(0, 3);

  return (
    <section className="featured-pkgs-section">
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
                  <div className="featured-pkg-price">
                    <span className="featured-price-label">Starting From</span>
                    <span className="featured-price-val">₹{pkg.startingPrice.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="featured-pkg-actions">
                    <Link to={`/packages/${pkg.category}/${pkg.slug}`} className="btn-featured-secondary">
                      <Eye size={14} /> Details
                    </Link>
                    <a href={getPackageWhatsAppLink(pkg)} target="_blank" rel="noopener noreferrer" className="btn-featured-primary">
                      <MessageCircle size={14} /> Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
