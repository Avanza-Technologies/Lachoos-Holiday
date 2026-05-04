import React from 'react';
import { Shield, Award, Headphones, Map } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield size={32} />,
      title: "Trusted Local Expertise",
      desc: "Based in Pathanamthitta, we know every hidden trail and local secret of Kerala."
    },
    {
      icon: <Award size={32} />,
      title: "Premium Hospitality",
      desc: "We only partner with hand-picked hotels and houseboats that meet our luxury standards."
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Direct Support",
      desc: "No call centers. You get a dedicated travel specialist available at any hour."
    },
    {
      icon: <Map size={32} />,
      title: "Tailor-Made Itineraries",
      desc: "Every journey is unique. We architect your trip based on your specific desires."
    }
  ];

  return (
    <section className="section-padding why-choose-section">
      <div className="container">
        <div className="text-center mb-16">
          <p className="section-label text-gold">OUR VALUES</p>
          <h2 className="section-title text-green">Why Choose Lachoos Holidays?</h2>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((item, index) => (
            <div className="reason-card" key={index}>
              <div className="reason-icon text-gold">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
