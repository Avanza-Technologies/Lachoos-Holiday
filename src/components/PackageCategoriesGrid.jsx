import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES_CONFIG } from '../data/packages';
import './PackageCategoriesGrid.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const PackageCategoriesGrid = ({ limit = null }) => {
  const categories = Object.values(CATEGORIES_CONFIG);
  const displayCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-header text-center">
          <span className="categories-eyebrow">EXPERIENCE CATEGORIES</span>
          <h2 className="categories-title">
            Choose Your <em>Journey Style.</em>
          </h2>
          <p className="categories-subtitle">
            Whether it is an intimate escape, a family adventure, or a sacred pilgrimage, we have a perfectly tailored itinerary for you.
          </p>
        </div>

        <motion.div 
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayCategories.map((category) => {
            const packageCount = category.packages.length;
            return (
              <motion.div 
                key={category.slug} 
                className="category-card"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link to={`/packages/${category.slug}`} className="category-card-inner">
                  <div className="category-image-wrapper">
                    <img 
                      src={category.coverImage} 
                      alt={category.name} 
                      className="category-image"
                      loading="lazy"
                    />
                    <div className="category-image-overlay" />
                    <span className="category-badge">
                      {packageCount} {packageCount === 1 ? 'Package' : 'Packages'} Available
                    </span>
                  </div>
                  <div className="category-content">
                    <h3 className="category-name">{category.name}</h3>
                    <p className="category-desc">{category.shortDescription}</p>
                    <span className="category-link">
                      Explore Full Collection <ArrowRight size={16} className="category-link-icon" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PackageCategoriesGrid;
