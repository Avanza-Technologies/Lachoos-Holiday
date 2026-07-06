import { Link } from 'react-router-dom';
import { Users, Luggage, Thermometer, ArrowRight } from 'lucide-react';
import './FleetHighlight.css';

const previewVehicles = [
  {
    id: 1,
    name: "Mercedes-Benz E-Class",
    category: "Premium Sedan",
    price: "₹8,500",
    unit: "/ day",
    img: "/images/packages/fleet-1.jpg",
    capacity: "4 Passengers",
    luggage: "3 Bags"
  },
  {
    id: 2,
    name: "Toyota Fortuner",
    category: "Luxury SUV",
    price: "₹6,200",
    unit: "/ day",
    img: "/images/packages/fleet-2.jpg",
    capacity: "7 Passengers",
    luggage: "5 Bags"
  }
];

const FleetHighlight = () => {
  return (
    <section className="fleet-highlight-section">
      <div className="container">
        <div className="fleet-highlight-header text-center">
          <span className="fleet-highlight-eyebrow">TRANSPORT SOLUTIONS</span>
          <h2 className="fleet-highlight-title">
            Our Premium <em>Travel Fleet.</em>
          </h2>
          <p className="fleet-highlight-subtitle">
            Travel across Kerala in comfort and safety. We offer clean, air-conditioned executive sedans and all-terrain SUVs.
          </p>
        </div>

        <div className="fleet-highlight-grid">
          {previewVehicles.map((vehicle) => (
            <div key={vehicle.id} className="fleet-highlight-card">
              <div className="fleet-highlight-img-box">
                <img src={vehicle.img} alt={vehicle.name} className="fleet-highlight-img" loading="lazy" />
                <span className="fleet-highlight-badge">{vehicle.category}</span>
              </div>
              <div className="fleet-highlight-content">
                <h3 className="fleet-highlight-card-title">{vehicle.name}</h3>
                
                <div className="fleet-highlight-specs">
                  <div className="fleet-highlight-spec">
                    <Users size={16} /> <span>{vehicle.capacity}</span>
                  </div>
                  <div className="fleet-highlight-spec">
                    <Luggage size={16} /> <span>{vehicle.luggage}</span>
                  </div>
                  <div className="fleet-highlight-spec">
                    <Thermometer size={16} /> <span>AC Cabin</span>
                  </div>
                </div>

                <div className="fleet-highlight-footer">
                  <div className="fleet-highlight-price">
                    <span className="fleet-price-label">Service Type</span>
                    <span className="fleet-price-val" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0F6B3E' }}>Chauffeur Driven</span>
                  </div>
                  <Link to="/fleet" className="btn-fleet-view">
                    Reserve <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fleet-highlight-action text-center">
          <Link to="/fleet" className="btn-view-complete-fleet">
            View Complete Fleet <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetHighlight;
