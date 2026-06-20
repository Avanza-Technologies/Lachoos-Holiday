import SEO from '../components/SEO';
import PackageCategoriesGrid from '../components/PackageCategoriesGrid';
import './Packages.css';

const Packages = () => {
  return (
    <div className="packages-page">
      <SEO 
        title="Kerala Holiday Packages | Honeymoon, Family, Pilgrimage Tours – Lachoos Holidays"
        description="Explore the best Kerala tour packages by Lachoos Holidays. Curated honeymoon trips, family vacations, Sabarimala pilgrimage transits, summer tours, and group retreats across South India."
        keywords="Kerala holiday packages, Kerala tours, Munnar packages, Alleppey houseboats, Sabarimala pilgrimage tour, Kerala family trip, Kerala honeymoon package, Vagamon tours, Wayanad travel, Lachoos Holidays packages"
        path="/packages"
      />
      
      {/* Hero Banner */}
      <section className="packages-hero">
        <div className="packages-hero-bg" />
        <div className="packages-hero-overlay" />
        <div className="container packages-hero-content text-center">
          <span className="packages-hero-eyebrow">OUR CURATED SELECTION</span>
          <h1 className="packages-hero-title">Kerala Travel Packages</h1>
          <p className="packages-hero-subtitle">
            Immerse yourself in the tranquility of God's Own Country. Explore our hand-picked categories to find your perfect getaway.
          </p>
        </div>
      </section>

      {/* Main Categories Section */}
      <PackageCategoriesGrid />
    </div>
  );
};

export default Packages;
