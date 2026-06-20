import { motion } from 'framer-motion';
import { Heart, Compass, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import './Honeymoon.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const packages = [
  {
    id: 1,
    title: "Heritage & Backwater Bliss",
    tag: "DIRECT LIAISON",
    desc: "A 4-day odyssey through private canals. Surrender to the gentle rhythm of the backwaters while staying in century-old ancestral homes repurposed for modern luxury.",
    price: "₹48,500",
    img: "/images/packages/honeymoon-1.jpg",
    imgAlt: "Alleppey backwater houseboat Kerala honeymoon package",
  },
  {
    id: 2,
    title: "Wilderness of Gavi",
    tag: "ECO-LUXURY",
    desc: "Disconnect in the untouched highlands. Exclusive safari access, misty mornings, and private lakeside glamping designed for the adventurous, romantic soul.",
    price: "₹32,000",
    img: "/images/packages/honeymoon-2.jpg",
    imgAlt: "Gavi eco-luxury jungle camp Kerala honeymoon",
  },
  {
    id: 3,
    title: "Munnar Mist & Tea Gardens",
    tag: "HILL STATION",
    desc: "Wake up to the scent of fresh tea and crisp mountain air. Stay in boutique heritage estates overlooking the rolling, endless clouds of the Western Ghats.",
    price: "₹38,900",
    img: "https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Munnar tea estate Kerala honeymoon hill station package",
  }
];

const Honeymoon = () => {
  return (
    <div className="hm-page">
      <SEO
        title="Kerala Honeymoon Packages | Backwaters, Munnar, Gavi – Lachoos Holidays"
        description="Romantic Kerala honeymoon packages by Lachoos Holidays. Private Alleppey backwater houseboats, Munnar tea estate stays, Gavi eco-luxury camps. Curated by local Kerala experts from Pathanamthitta."
        keywords="Kerala honeymoon packages, Kerala honeymoon tour, Alleppey honeymoon package, Munnar honeymoon, Kerala romantic getaway, backwater honeymoon Kerala, Gavi honeymoon, Kerala couples tour, God's Own Country honeymoon, Kerala honeymoon trip"
        path="/honeymoon"
        image="https://lachoosholidays.com/images/packages/honeymoon-bg.jpg"
      />
      {/* Hero Section */}
      <section className="hm-hero">
        <motion.div 
          className="hm-hero-bg"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{ backgroundImage: `url('/images/packages/honeymoon-bg.jpg')` }}
        />
        <div className="hm-hero-overlay"></div>
        <div className="container hm-hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hm-hero-text"
          >
            <motion.span variants={fadeIn} className="hm-label">EXCLUSIVELY CRAFTED JOURNEYS</motion.span>
            <motion.h1 variants={fadeIn} className="hm-title">Intimate Kerala<br />Escapes</motion.h1>
            <motion.p variants={fadeIn} className="hm-subtitle">
              Discover the soul of God's Own Country through hand-picked retreats, where uncompromising luxury meets authentic local heritage.
            </motion.p>
            <motion.button variants={fadeIn} className="hm-btn">
              Explore Collections <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="hm-intro section-padding">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="hm-intro-grid"
          >
            <motion.div variants={fadeIn} className="hm-intro-text">
              <h2 className="hm-heading">A Symphony of Romance & Nature</h2>
              <p>We believe your honeymoon should be as unique as your love story. Step away from the crowds and immerse yourselves in the serene, untouched beauty of Kerala. From private backwater cruises to secluded mountain hideaways.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="hm-intro-stats flex">
              <div className="stat-item">
                <Heart className="stat-icon" />
                <span>Curated<br/>Experiences</span>
              </div>
              <div className="stat-item">
                <Star className="stat-icon" />
                <span>5-Star<br/>Hospitality</span>
              </div>
              <div className="stat-item">
                <Compass className="stat-icon" />
                <span>Local<br/>Expertise</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Packages - Magazine Style */}
      <section className="hm-collections">
        <div className="container">
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.id}
              className={`hm-package-showcase ${index % 2 !== 0 ? 'reverse' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="hm-pkg-image-wrapper">
                <div className="hm-pkg-image">
                  <img src={pkg.img} alt={pkg.imgAlt || pkg.title} loading="lazy" />
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="hm-pkg-info">
                <span className="hm-pkg-tag">{pkg.tag}</span>
                <h3 className="hm-pkg-title">{pkg.title}</h3>
                <p className="hm-pkg-desc">{pkg.desc}</p>
                <div className="hm-pkg-action">
                  <div className="hm-pkg-price">
                    <span className="label">Starting From</span>
                    <span className="amount">{pkg.price}</span>
                  </div>
                  <button className="hm-btn-outline">View Itinerary</button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="hm-philosophy section-padding">
        <div className="container">
          <motion.div 
            className="hm-phil-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="hm-phil-content">
              <span className="hm-label dark">OUR PHILOSOPHY</span>
              <h2 className="hm-heading">The Lachoos Way</h2>
              <p className="hm-phil-lead">We don't just book hotels; we architect memories. Rooted deeply in Kerala, we bring a level of accountability that only true local experts can provide.</p>
              
              <div className="hm-phil-grid">
                <div className="hm-phil-box">
                  <h4>Personalized Accountability</h4>
                  <p>Every itinerary is hand-crafted and backed by a named specialist you can call directly, anytime.</p>
                </div>
                <div className="hm-phil-box">
                  <h4>Homely Luxury</h4>
                  <p>The soul of a homestay with the precision of a 5-star hotel. Deeply local, exceptionally comfortable.</p>
                </div>
              </div>
            </div>
            <div className="hm-phil-image">
              <img src="/images/packages/honeymoon-3.jpg" alt="Lachoos Holidays Kerala luxury honeymoon philosophy" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Honeymoon;
