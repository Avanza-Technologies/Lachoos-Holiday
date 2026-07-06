import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Wifi, Users, Luggage, Thermometer, ArrowRight, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { getFleetWhatsAppLink, getFleetQuoteWhatsAppLink, getFleetAvailabilityWhatsAppLink, getFleetGeneralWhatsAppLink } from '../utils/whatsapp';
import './Fleet.css';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const vehicles = [
  {
    id: 1,
    name: "Mercedes-Benz E-Class",
    category: "Premium Sedan",
    capacity: "4",
    tag: "EXPERT REVIEWED",
    tagClass: "tag-blue",
    price: "₹8,500",
    unit: "/ day",
    desc: "The pinnacle of executive travel. Ideal for luxury honeymoon transfers and corporate visits. Includes a professional chauffeur with local expertise.",
    img: "/images/packages/fleet-1.jpg",
    imgAlt: "Mercedes-Benz E-Class luxury sedan Kerala tour vehicle hire Pathanamthitta",
    specs: [
      { icon: <Users size={16}/>, label: "4 Passengers" },
      { icon: <Luggage size={16}/>, label: "3 Bags" },
      { icon: <Thermometer size={16}/>, label: "Climate Control" },
    ]
  },
  {
    id: 2,
    name: "Toyota Fortuner",
    category: "Luxury SUV",
    capacity: "7",
    tag: "DIRECT LIAISON",
    tagClass: "tag-amber",
    price: "₹6,200",
    unit: "/ day",
    desc: "The preferred choice for Sabarimala pilgrimages and Wayanad forest retreats. Robust all-terrain performance with exceptional interior comfort.",
    img: "/images/packages/fleet-2.jpg",
    imgAlt: "Toyota Fortuner SUV Sabarimala pilgrimage Kerala vehicle hire",
    specs: [
      { icon: <Users size={16}/>, label: "7 Passengers" },
      { icon: <Wifi size={16}/>, label: "GPS Tracked" },
      { icon: <Shield size={16}/>, label: "All-Terrain" },
    ]
  }
];

const guarantees = [
  { title: "Direct Liaison Service", desc: "No middlemen. You deal directly with our Pathanamthitta-based fleet experts." },
  { title: "Hygiene & Safety", desc: "Deep cleaning before every trip and 24/7 breakdown assistance throughout Kerala." },
  { title: "Pilgrimage Specialists", desc: "Drivers trained in Sabarimala protocols and all sacred forest routes." },
];

const Fleet = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', route: '' });
  const [filterForm, setFilterForm] = useState({ vehicleType: 'Premium Sedan', pickupDate: '', duration: 1 });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const link = getFleetQuoteWhatsAppLink(form);
    window.open(link, '_blank');
  };

  const handleAvailabilitySubmit = (e) => {
    e.preventDefault();
    const link = getFleetAvailabilityWhatsAppLink(filterForm);
    window.open(link, '_blank');
  };

  return (
    <div className="fl-page">
      <SEO
        title="Kerala Tour Vehicles & AC Transport | Sabarimala Pilgrimage Fleet – Lachoos Holidays"
        description="Premium Kerala tour vehicles from Lachoos Holidays, Pathanamthitta. AC cars, SUVs & vans for Sabarimala pilgrimages, hill station tours, airport transfers & Kerala holiday transport. Book now."
        keywords="Kerala vehicle hire, Sabarimala pilgrimage transport, Kerala tour car hire, Pathanamthitta vehicle hire, AC car Kerala, Toyota Fortuner hire Kerala, Kerala taxi package, Pamba transport, Kerala driver hire, Kerala cab booking"
        path="/fleet"
        image="https://lachoosholidays.com/images/packages/fleet-bg.jpg"
      />
      {/* Hero */}
      <section className="fl-hero">
        <motion.div
          className="fl-hero-bg"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          style={{ backgroundImage: `url('/images/packages/fleet-bg.jpg')` }}
        />
        <div className="fl-hero-overlay" />
        <div className="container fl-hero-content">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="fl-hero-text"
          >
            <motion.span variants={fadeIn} className="fl-label">PREMIUM FLEET MANAGEMENT</motion.span>
            <motion.h1 variants={fadeIn} className="fl-title">Travel India<br />in Unmatched<br />Comfort</motion.h1>
            <motion.p variants={fadeIn} className="fl-subtitle">
              Every mile of your Kerala journey — from sacred pilgrimages to honeymoon getaways — defined by luxury, safety, and local mastery.
            </motion.p>
            <motion.div variants={fadeIn} className="fl-hero-actions">
              <a href="tel:+919074885337" className="fl-btn-primary">
                <Phone size={16} /> Call for Booking
              </a>
              <a href={getFleetGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="fl-btn-outline">
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="fl-filter-bar">
        <div className="container">
          <form className="fl-filter" onSubmit={handleAvailabilitySubmit}>
            <div className="fl-filter-item">
              <label>VEHICLE TYPE</label>
              <select
                value={filterForm.vehicleType}
                onChange={e => setFilterForm({ ...filterForm, vehicleType: e.target.value })}
              >
                <option value="Premium Sedan">Premium Sedan</option>
                <option value="Luxury SUV">Luxury SUV</option>
                <option value="Minivan">Minivan</option>
                <option value="Coach Bus">Coach Bus</option>
              </select>
            </div>
            <div className="fl-filter-item">
              <label>PICK-UP DATE</label>
              <input
                type="date"
                value={filterForm.pickupDate}
                onChange={e => setFilterForm({ ...filterForm, pickupDate: e.target.value })}
              />
            </div>
            <div className="fl-filter-item">
              <label>DURATION (DAYS)</label>
              <input
                type="number"
                min={1}
                value={filterForm.duration}
                onChange={e => setFilterForm({ ...filterForm, duration: parseInt(e.target.value) || 1 })}
              />
            </div>
            <button type="submit" className="fl-filter-btn">
              Check Availability <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* Vehicles + Sidebar */}
      <section className="fl-main section-padding">
        <div className="container fl-layout">

          {/* Vehicle Showcase */}
          <div className="fl-vehicles">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.span variants={fadeIn} className="fl-label dark">EXQUISITE SELECTION</motion.span>
              <motion.h2 variants={fadeIn} className="fl-heading">Our Premium Fleet</motion.h2>
            </motion.div>

            {vehicles.map((v) => (
              <motion.div
                key={v.id}
                className="fl-vehicle-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeIn}
              >
                <div className="fl-vehicle-img">
                  <img src={v.img} alt={v.imgAlt || v.name} loading="lazy" />
                  <span className={`fl-vehicle-tag ${v.tagClass}`}>{v.tag}</span>
                </div>
                <div className="fl-vehicle-info">
                  <h3>{v.name}</h3>
                  <p className="fl-vehicle-desc">{v.desc}</p>
                  <div className="fl-specs">
                    {v.specs.map((s, idx) => (
                      <div className="fl-spec-item" key={idx}>
                        {s.icon}
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="fl-vehicle-footer">
                    <div className="fl-price">
                      <span className="fl-price-from">Service Type</span>
                      <span className="fl-price-amount">Chauffeur Driven</span>
                    </div>
                    <a
                      href={getFleetWhatsAppLink(v)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fl-reserve-btn"
                    >
                      Reserve Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="fl-sidebar">
            {/* Quote Form */}
            <motion.div
              className="fl-quote-card"
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="fl-label dark">INSTANT QUOTE</span>
              <h3>Request a Premium Quote</h3>
              <p>Our fleet specialist will respond within 30 minutes.</p>
              <form onSubmit={handleQuoteSubmit}>
                <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                <input type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
                <input type="text" placeholder="Preferred Route / Destination" value={form.route} onChange={e => setForm({...form, route: e.target.value})} />
                <button type="submit" className="fl-submit-btn">
                  Send via WhatsApp <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>

            {/* Guarantees */}
            <motion.div
              className="fl-guarantee-card"
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="fl-label">THE LACHOOS GUARANTEE</span>
              <div className="fl-guarantees">
                {guarantees.map((g, i) => (
                  <div className="fl-guarantee-item" key={i}>
                    <Star size={18} className="fl-guarantee-icon" />
                    <div>
                      <h4>{g.title}</h4>
                      <p>{g.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
