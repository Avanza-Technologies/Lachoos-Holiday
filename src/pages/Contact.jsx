import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Clock, Star } from 'lucide-react';
import SEO from '../components/SEO';
import './Contact.css';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const contactInfo = [
  {
    icon: <Phone size={22} />,
    label: "CALL US DIRECTLY",
    value: "+91 90748 85337",
    sub: "Mon–Sun, 7 AM – 10 PM",
    action: "tel:+919074885337",
    actionLabel: "Call Now"
  },
  {
    icon: <MessageCircle size={22} />,
    label: "WHATSAPP",
    value: "+91 90748 85337",
    sub: "Instant response guaranteed",
    action: "https://wa.me/919074885337?text=Hello! I'd like to plan a trip with Lachoos Holidays.",
    actionLabel: "Chat on WhatsApp"
  },
  {
    icon: <Mail size={22} />,
    label: "EMAIL US",
    value: "lachoosholidays@gmail.com",
    sub: "We respond within 2 hours",
    action: "mailto:lachoosholidays@gmail.com",
    actionLabel: "Send Email"
  },
  {
    icon: <MapPin size={22} />,
    label: "OUR OFFICE",
    value: "Pathanamthitta, Kerala",
    sub: "God's Own Country — India",
    action: "https://maps.google.com/?q=Pathanamthitta,Kerala",
    actionLabel: "Get Directions"
  },
];

const services = [
  "Sabarimala Pilgrimage Packages",
  "Kerala Honeymoon Escapes",
  "Backwaters & Houseboat Tours",
  "Hill Station & Wildlife Retreats",
  "Premium Fleet Hire",
  "Custom Group Travel",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Inquiry — Lachoos Holidays*\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`;
    window.open(`https://wa.me/919074885337?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="ct-page">
      <SEO
        title="Contact Lachoos Holidays | Kerala Tour Booking – Pathanamthitta"
        description="Contact Lachoos Holidays for Kerala tour bookings. Call or WhatsApp +91 9074885337 to plan Sabarimala pilgrimage packages, honeymoon tours, backwater trips & more. Based in Pathanamthitta, Kerala."
        keywords="contact Kerala travel agent, Lachoos Holidays contact, Kerala tour booking, Sabarimala tour booking, Pathanamthitta travel agent contact, Kerala holiday booking, Kerala tour inquiry, plan Kerala trip, Kerala tourism contact"
        path="/contact"
      />

      {/* Hero */}
      <section className="ct-hero">
        <motion.div
          className="ct-hero-bg"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "easeOut" }}
          style={{ backgroundImage: `url('/images/packages/hero-bg.jpg')` }}
        />
        <div className="ct-hero-overlay" />
        <div className="container ct-hero-content">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="ct-hero-text"
          >
            <motion.span variants={fadeIn} className="ct-label">GET IN TOUCH</motion.span>
            <motion.h1 variants={fadeIn} className="ct-title">
              Let's Plan Your<br />Perfect Kerala Journey
            </motion.h1>
            <motion.p variants={fadeIn} className="ct-subtitle">
              Talk directly to our Kerala travel specialists. No call centers, no bots — just local experts who know every corner of God's Own Country.
            </motion.p>
            <motion.div variants={fadeIn} className="ct-hero-badges">
              <div className="ct-badge"><Clock size={14} /> Respond in under 2 hours</div>
              <div className="ct-badge"><Star size={14} /> 500+ Happy Travellers</div>
              <div className="ct-badge"><MapPin size={14} /> Based in Pathanamthitta, Kerala</div>
            </motion.div>
          </motion.div>
        </div>
        <div className="ct-hero-scroll">
          <div className="ct-hero-scroll-line" />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="ct-info-section">
        <div className="container">
          <motion.div
            className="ct-info-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.action}
                target={item.action.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="ct-info-card"
                variants={fadeIn}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="ct-info-icon">{item.icon}</div>
                <span className="ct-info-label">{item.label}</span>
                <strong className="ct-info-value">{item.value}</strong>
                <p className="ct-info-sub">{item.sub}</p>
                <span className="ct-info-action">{item.actionLabel} <ArrowRight size={14} /></span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content: Form + Map */}
      <section className="ct-main section-padding">
        <div className="container ct-main-layout">

          {/* Form */}
          <motion.div
            className="ct-form-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeIn} className="ct-label dark">SEND US A MESSAGE</motion.span>
            <motion.h2 variants={fadeIn} className="ct-heading">Plan Your Dream Trip</motion.h2>
            <motion.p variants={fadeIn} className="ct-form-lead">
              Fill in the details below and we'll get back to you on WhatsApp within 2 hours with a personalized itinerary proposal.
            </motion.p>

            <motion.form variants={fadeIn} onSubmit={handleSubmit} className="ct-form">
              <div className="ct-form-row">
                <div className="ct-field">
                  <label>YOUR NAME *</label>
                  <input name="name" type="text" placeholder="e.g. Priya Nair" value={form.name} onChange={handleChange} required />
                </div>
                <div className="ct-field">
                  <label>PHONE NUMBER *</label>
                  <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="ct-field">
                <label>EMAIL ADDRESS</label>
                <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="ct-field">
                <label>I'M INTERESTED IN</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">— Select a Service —</option>
                  {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="ct-field">
                <label>YOUR MESSAGE OR TRAVEL DETAILS</label>
                <textarea name="message" rows={5} placeholder="Tell us about your travel plans, group size, preferred dates, budget..." value={form.message} onChange={handleChange} />
              </div>

              <button type="submit" className="ct-submit-btn">
                {sent ? '✓ Sent! Check your WhatsApp' : <>Send via WhatsApp <ArrowRight size={16} /></>}
              </button>
            </motion.form>
          </motion.div>

          {/* Sidebar Info */}
          <motion.aside
            className="ct-sidebar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Why Us */}
            <motion.div className="ct-why-card" variants={fadeIn}>
              <span className="ct-label">WHY CHOOSE US</span>
              <h3 className="ct-subheading">The Lachoos Promise</h3>
              <div className="ct-why-list">
                {[
                  { title: "Direct Specialists", desc: "You speak to the same person who plans your trip — no intermediaries." },
                  { title: "Kerala-Root Experts", desc: "Based in Pathanamthitta, we know every road, temple, and houseboat personally." },
                  { title: "24/7 On-Trip Support", desc: "We're always a call away, even during your journey across Kerala." },
                  { title: "Transparent Pricing", desc: "No hidden fees. Clear breakdowns from day one." },
                ].map((item, i) => (
                  <div className="ct-why-item" key={i}>
                    <div className="ct-why-dot" />
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div className="ct-hours-card" variants={fadeIn}>
              <span className="ct-label dark">OFFICE HOURS</span>
              <div className="ct-hours-list">
                <div className="ct-hours-row"><span>Monday – Friday</span><strong>7:00 AM – 10:00 PM</strong></div>
                <div className="ct-hours-row"><span>Saturday</span><strong>8:00 AM – 9:00 PM</strong></div>
                <div className="ct-hours-row"><span>Sunday</span><strong>9:00 AM – 8:00 PM</strong></div>
              </div>
              <a
                href="https://wa.me/919074885337"
                target="_blank"
                rel="noreferrer"
                className="ct-wa-btn"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </motion.div>
          </motion.aside>
        </div>
      </section>

      {/* Map Section */}
      <section className="ct-map-section">
        <motion.div
          className="ct-map-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="ct-label dark">FIND US</span>
          <h2 className="ct-heading">Rooted in Kerala's Heart</h2>
          <p>We operate from Pathanamthitta — the gateway to Sabarimala — at the spiritual and geographical heart of Kerala.</p>
        </motion.div>
        <div className="ct-map-embed">
          <iframe
            title="Lachoos Holidays Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31624.78!2d76.787!3d9.2648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062d5e0e1e1f5d%3A0x4d8b0a2e8b6f0a8c!2sPathanamthitta%2C%20Kerala!5e0!3m2!1sen!2sin!4v1620000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
};

export default Contact;
