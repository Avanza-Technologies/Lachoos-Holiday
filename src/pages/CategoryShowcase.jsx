import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, MessageCircle, Eye } from 'lucide-react';
import SEO from '../components/SEO';
import { CATEGORIES_CONFIG } from '../data/packages';
import { getPackageWhatsAppLink, getGeneralWhatsAppLink } from '../utils/whatsapp';
import './CategoryShowcase.css';
import { BudgetBadgeWithTooltip } from '../components/FeaturedPackages';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const CategoryShowcase = () => {
  const { categorySlug } = useParams();
  
  // Find category in config
  const category = CATEGORIES_CONFIG[categorySlug];

  // If category is invalid, render fallback
  if (!category) {
    return (
      <div className="showcase-error container text-center section-padding">
        <h2 className="error-title">Category Not Found</h2>
        <p className="error-msg">The package category you are looking for does not exist.</p>
        <Link to="/packages" className="btn btn-green">
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
      </div>
    );
  }

  const packages = category.packages.filter(pkg => pkg.active !== false);
  const packageCount = packages.length;

  // SEO Info
  const seoTitle = `${category.name} | Kerala Vacation Tours – Lachoos Holidays`;
  const seoDescription = `Browse all available ${category.name} by Lachoos Holidays. ${category.shortDescription} Handcrafted itinerary options, transparent pricing, and local expertise.`;
  const seoKeywords = `Kerala ${category.slug} tour, ${category.slug} packages, Kerala travel, Lachoos Holidays ${category.slug}`;

  return (
    <div className="category-showcase-page">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        path={`/packages/${category.slug}`}
        image={category.coverImage}
      />

      {/* Hero Banner */}
      <section className="showcase-hero" style={{ backgroundImage: `url(${category.coverImage})` }}>
        <div className="showcase-hero-overlay" />
        <div className="container showcase-hero-content">
          <Link to="/packages" className="back-link-top">
            <ArrowLeft size={16} /> ALL CATEGORIES
          </Link>
          <div className="showcase-hero-header-wrap">
            <h1 className="showcase-hero-title">{category.name}</h1>
            <span className="showcase-hero-badge">
              {packageCount} {packageCount === 1 ? 'Package' : 'Packages'}
            </span>
          </div>
          <p className="showcase-hero-subtitle">{category.shortDescription}</p>
        </div>
      </section>

      {/* Package Lists */}
      <section className="showcase-list-section">
        <div className="container">
          {packageCount === 0 ? (
            /* Empty State Condition */
            <div className="empty-state text-center">
              <p className="empty-msg">No packages currently available in this category.</p>
              <p className="empty-sub">Our travel consultants can still design a custom itinerary for you!</p>
              <a 
                href={getGeneralWhatsAppLink()} 
                className="btn btn-green empty-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> Inquire via WhatsApp
              </a>
            </div>
          ) : (
            <motion.div 
              className="showcase-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {packages.map((pkg) => (
                <motion.div 
                  key={pkg.id} 
                  className="showcase-card"
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="showcase-card-image-wrap">
                    <img 
                      src={pkg.coverImage} 
                      alt={pkg.name} 
                      className="showcase-card-image"
                      loading="lazy"
                    />
                    <span className="showcase-card-duration">
                      <Clock size={13} className="duration-icon" /> {pkg.duration}
                    </span>
                  </div>
                  
                  <div className="showcase-card-content">
                    <h3 className="showcase-card-title">{pkg.name}</h3>
                    
                    {pkg.destinations && pkg.destinations.length > 0 && (
                      <div className="showcase-card-locations">
                        <MapPin size={13} className="pin-icon" />
                        <span>{pkg.destinations.join(" → ")}</span>
                      </div>
                    )}
                    
                    <p className="showcase-card-desc">{pkg.shortDescription}</p>
                    
                    <div className="showcase-card-footer">
                      <div className="showcase-card-price-block">
                        <BudgetBadgeWithTooltip hasAnimated={true} />
                      </div>
                      
                      <div className="showcase-card-ctas">
                        {/* Button A: View Details (Placeholder Page) */}
                        <Link 
                          to={`/packages/${category.slug}/${pkg.slug}`} 
                          className="btn-showcase-secondary"
                          title="View Details"
                        >
                          <Eye size={16} /> Details
                        </Link>
                        
                        {/* Button B: Book Now (WhatsApp Compiler) */}
                        <a 
                          href={getPackageWhatsAppLink(pkg)} 
                          className="btn-showcase-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Book via WhatsApp"
                        >
                          <MessageCircle size={16} /> Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryShowcase;
