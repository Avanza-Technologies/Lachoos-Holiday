import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Anjali Nair",
      location: "Bangalore",
      text: "Lachoos Holidays made our honeymoon truly magical. The houseboat experience in Alleppey was beyond words. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "David Miller",
      location: "London",
      text: "The Sabarimala pilgrimage was so well-organized. As a first-timer, I felt safe and respected throughout the journey. Expert guidance indeed.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Suresh Pillai",
      location: "Chennai",
      text: "Best vehicle fleet in Pathanamthitta. The driver was very professional and knew the forest routes perfectly. 5 stars!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="section-padding testimonials-section bg-green">
      <div className="container">
        <div className="text-center mb-16">
          <p className="section-label text-gold">VOICES OF JOURNEYS</p>
          <h2 className="section-title text-white">What Our Guests Say</h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, index) => (
            <div className="test-card" key={index}>
              <Quote className="quote-icon text-gold" size={40} />
              <p className="test-text text-white">{rev.text}</p>
              <div className="test-user">
                <img src={rev.image} alt={rev.name} />
                <div className="test-info">
                  <h4 className="text-gold">{rev.name}</h4>
                  <p className="text-muted">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
