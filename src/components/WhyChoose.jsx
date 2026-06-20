import { MapPin, Shield, Settings, Car, MessageCircle } from 'lucide-react';
import './WhyChoose.css';

const reasons = [
  {
    icon: <MapPin size={24} />,
    title: 'Local Kerala Expertise',
    desc: 'Based in Pathanamthitta with deep local routing knowledge and hand-picked hotel tie-ups.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Trusted Pilgrimage Partner',
    desc: 'Specialized arrangements for Sabarimala and southern temple circuits with vetted chauffeurs.'
  },
  {
    icon: <Settings size={24} />,
    title: 'Custom Tour Planning',
    desc: 'We shape the route, hotels, and travel pace so you feel completely at ease.'
  },
  {
    icon: <Car size={24} />,
    title: 'Comfortable Transportation',
    desc: 'Premium air-conditioned fleet across Sedans, SUVs, and luxury Travellers.'
  },
  {
    icon: <MessageCircle size={24} />,
    title: 'Direct WhatsApp Support',
    desc: 'Pre-filled context-aware chat pipelines connecting you straight to our help desk.'
  }
];

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="why-choose-header text-center">
          <span className="why-choose-eyebrow">OUR COMMITMENT</span>
          <h2 className="why-choose-title">
            Why Choose <em>Lachoos Holidays?</em>
          </h2>
          <p className="why-choose-subtitle">
            We are dedicated travel professionals composing authentic, safe, and comfortable experiences across Kerala.
          </p>
        </div>

        <div className="why-choose-grid">
          {reasons.map((item, idx) => (
            <div key={idx} className="why-choose-card">
              <div className="why-choose-icon-box">{item.icon}</div>
              <h3 className="why-choose-card-title">{item.title}</h3>
              <p className="why-choose-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
