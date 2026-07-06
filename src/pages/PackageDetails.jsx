import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, CheckCircle, XCircle, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { ALL_PACKAGES } from '../data/packages';
import { getPackageWhatsAppLink, getGeneralWhatsAppLink } from '../utils/whatsapp';
import './PackageDetails.css';
import { BudgetBadgeWithTooltip } from '../components/FeaturedPackages';

const PackageDetails = () => {
  const { categorySlug, packageId } = useParams();

  // Find the package matching the slug (packageId parameter)
  const pkg = ALL_PACKAGES.find(p => p.slug === packageId && p.category === categorySlug);

  if (!pkg) {
    return (
      <div className="details-error container text-center section-padding">
        <h2 className="error-title">Itinerary Not Found</h2>
        <p className="error-msg">The travel package you are looking for could not be found.</p>
        <Link to={`/packages/${categorySlug}`} className="btn btn-green">
          <ArrowLeft size={16} /> Back to Category
        </Link>
      </div>
    );
  }

  // Generate WhatsApp links
  const waBookLink = getPackageWhatsAppLink(pkg);
  const waCustomizeLink = getGeneralWhatsAppLink();

  // SEO Info
  const seoTitle = `${pkg.name} (${pkg.duration}) | Lachoos Holidays`;
  const seoDescription = `${pkg.shortDescription} Stays, private transfers, and excursions included. Plan this Kerala trip with local Pathanamthitta experts.`;

  return (
    <div className="package-details-page">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        path={`/packages/${categorySlug}/${pkg.slug}`}
        image={pkg.coverImage}
      />

      {/* Hero Banner Section */}
      <section className="details-hero" style={{ backgroundImage: `url(${pkg.coverImage})` }}>
        <div className="details-hero-overlay" />
        <div className="container details-hero-content">
          <Link to={`/packages/${categorySlug}`} className="back-link-details">
            <ArrowLeft size={16} /> BACK TO {pkg.category.toUpperCase()} COLLECTION
          </Link>
          <div className="details-hero-taxonomy">
            <span className="taxonomy-badge">{pkg.category.toUpperCase()} SPECIAL</span>
            <span className="taxonomy-duration"><Clock size={14} /> {pkg.duration}</span>
          </div>
          <h1 className="details-hero-title">{pkg.name}</h1>
          
          {pkg.destinations && pkg.destinations.length > 0 && (
            <div className="details-hero-locations">
              <MapPin size={16} />
              <span>{pkg.destinations.join(" → ")}</span>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container details-container">
        <div className="details-layout-grid">
          
          {/* Left Column: Itinerary Details */}
          <main className="details-main-content">
            {/* Overview */}
            <section className="details-section card-style">
              <h2 className="details-section-title">Experience Overview</h2>
              <p className="details-overview-text">{pkg.shortDescription}</p>
              {pkg.highlights && pkg.highlights.length > 0 && (
                <div className="details-highlights-box">
                  <h4 className="highlights-subtitle">Key Highlights</h4>
                  <ul className="highlights-list">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Detailed Itinerary Timeline */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <section className="details-section card-style">
                <h2 className="details-section-title">Detailed Itinerary</h2>
                <div className="itinerary-timeline">
                  {pkg.itinerary.map((dayPlan) => (
                    <div key={dayPlan.day} className="timeline-item">
                      <div className="timeline-day-badge">DAY {dayPlan.day}</div>
                      <div className="timeline-content-box">
                        <h4 className="timeline-day-title">{dayPlan.title}</h4>
                        <p className="timeline-day-desc">{dayPlan.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Inclusions & Exclusions Grid */}
            <section className="details-split-grid">
              {/* Inclusions */}
              <div className="details-section card-style inclusion-card">
                <h3 className="details-section-title-sub flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-500" /> What's Included
                </h3>
                <ul className="check-list inclusion-list">
                  {pkg.inclusions && pkg.inclusions.length > 0 ? (
                    pkg.inclusions.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle size={14} className="icon-list check-icon" />
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li>No details available.</li>
                  )}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="details-section card-style exclusion-card">
                <h3 className="details-section-title-sub flex items-center gap-2">
                  <XCircle size={20} className="text-red-500" /> What's Excluded
                </h3>
                <ul className="check-list exclusion-list">
                  {pkg.exclusions && pkg.exclusions.length > 0 ? (
                    pkg.exclusions.map((item, idx) => (
                      <li key={idx}>
                        <XCircle size={14} className="icon-list close-icon" />
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li>No details available.</li>
                  )}
                </ul>
              </div>
            </section>
          </main>

          {/* Right Column: Sticky Booking Card */}
          <aside className="details-sidebar">
            <div className="booking-sticky-card">
              <div className="booking-card-header">
                <span className="booking-price-label">PACKAGE CATEGORY</span>
                <div style={{ marginTop: '8px', marginBottom: '8px' }}>
                  <BudgetBadgeWithTooltip hasAnimated={false} />
                </div>
                <p className="booking-price-disclaimer">This is a customizable, budget-friendly holiday itinerary. Speak directly with our travel experts to get custom quotes tailored to your chosen hotels, transport options, and travel dates.</p>
              </div>

              <div className="booking-card-actions">
                {/* Primary Green CTA */}
                <a 
                  href={waBookLink} 
                  className="btn btn-booking-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} /> Book via WhatsApp
                </a>

                {/* Secondary Border CTA */}
                <a 
                  href={waCustomizeLink}
                  className="btn btn-booking-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customize Itinerary
                </a>
              </div>

              <div className="booking-card-footer">
                <div className="assurance-badge">
                  <span className="assurance-title">🔒 Custom Quotes</span>
                  <p className="assurance-desc">No hidden booking charges. Speak directly to our travel experts for tailored quotes matching your preferences.</p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
