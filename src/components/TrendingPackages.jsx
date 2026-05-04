import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import './TrendingPackages.css';

const TrendingPackages = () => {
  const packages = [
    {
      title: "Misty Munnar & Alleppey",
      duration: "4 Nights / 5 Days",
      location: "Munnar, Alleppey",
      price: "₹18,500",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Grand Wayanad Expedition",
      duration: "3 Nights / 4 Days",
      location: "Wayanad",
      price: "₹15,200",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Kochi & Athirappilly Falls",
      duration: "2 Nights / 3 Days",
      location: "Kochi, Athirappilly",
      price: "₹12,800",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="section-padding trending-section bg-light">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="section-label text-gold">POPULAR JOURNEYS</p>
            <h2 className="section-title text-green">Trending Kerala Packages</h2>
          </div>
          <button className="view-all-btn">VIEW ALL PACKAGES</button>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div className="pkg-card" key={index}>
              <div className="pkg-image">
                <img src={pkg.image} alt={pkg.title} />
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
                <div className="pkg-footer">
                  <div className="pkg-price">
                    <span className="from">From</span>
                    <span className="amount">{pkg.price}</span>
                  </div>
                  <a href={`https://wa.me/919447912456?text=Hi! I want to book the ${pkg.title} package.`} className="btn btn-green pkg-btn" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>BOOK NOW</a>
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
