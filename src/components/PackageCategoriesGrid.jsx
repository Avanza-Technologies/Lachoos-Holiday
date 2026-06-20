import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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

// Component for individual category cards, handling desktop scroll transforms
const CategoryCardHorizontal = ({ category, index, smoothX, containerWidth, isDesktop }) => {
  const packageCount = category.packages.length;
  
  // Card dimensions on desktop: Width 350px, Gap 30px -> Pitch 380px
  const offset = index * 380;
  
  // 1. Viewport boundary calculations for progressive reveal (Desktop only)
  const scroll_enter_start = offset - containerWidth;
  const scroll_enter_end = scroll_enter_start + 200;
  const scroll_exit_start = offset + 350 - 200;
  const scroll_exit_end = offset + 350;
  
  // Framer Motion transforms for progressive card entry/exit
  const opacity = useTransform(
    smoothX,
    [scroll_enter_start, scroll_enter_end, scroll_exit_start, scroll_exit_end],
    [0, 1, 1, 0]
  );
  
  const scaleReveal = useTransform(
    smoothX,
    [scroll_enter_start, scroll_enter_end, scroll_exit_start, scroll_exit_end],
    [0.8, 1, 1, 0.8]
  );
  
  const translateYReveal = useTransform(
    smoothX,
    [scroll_enter_start, scroll_enter_end, scroll_exit_start, scroll_exit_end],
    [60, 0, 0, 60]
  );
  
  const rotateX = useTransform(
    smoothX,
    [scroll_enter_start, scroll_enter_end, scroll_exit_start, scroll_exit_end],
    [10, 0, 0, 10]
  );
  
  const filterBlur = useTransform(
    smoothX,
    [scroll_enter_start, scroll_enter_end, scroll_exit_start, scroll_exit_end],
    ["blur(6px)", "blur(0px)", "blur(0px)", "blur(6px)"]
  );
  
  // 2. Active Card center alignment calculations (Desktop only)
  const scroll_center = offset + 175 - containerWidth / 2;
  
  const activeScale = useTransform(
    smoothX,
    [scroll_center - 380, scroll_center, scroll_center + 380],
    [1, 1.04, 1]
  );
  
  const activeLift = useTransform(
    smoothX,
    [scroll_center - 380, scroll_center, scroll_center + 380],
    [0, -10, 0]
  );
  
  const shadowOpacity = useTransform(
    smoothX,
    [scroll_center - 380, scroll_center, scroll_center + 380],
    [0.05, 0.18, 0.05]
  );
  
  // Combine progressive reveal and active card adjustments
  const combinedScale = useTransform([scaleReveal, activeScale], ([r, a]) => {
    return isDesktop ? r * a : 1;
  });
  
  const combinedY = useTransform([translateYReveal, activeLift], ([r, l]) => {
    return isDesktop ? r + l : 0;
  });
  
  const combinedShadow = useTransform(shadowOpacity, (op) => {
    return isDesktop 
      ? `0 16px 36px rgba(15, 107, 62, ${op})` 
      : '0 4px 20px rgba(0, 0, 0, 0.05)';
  });
  
  return (
    <motion.div
      className="category-card"
      variants={!isDesktop ? cardVariants : undefined}
      whileHover={!isDesktop ? { y: -8 } : undefined}
      transition={!isDesktop ? { type: "spring", stiffness: 300, damping: 20 } : undefined}
      style={{
        opacity: isDesktop ? opacity : undefined,
        scale: isDesktop ? combinedScale : undefined,
        y: isDesktop ? combinedY : undefined,
        rotateX: isDesktop ? rotateX : undefined,
        filter: isDesktop ? filterBlur : undefined,
        boxShadow: isDesktop ? combinedShadow : undefined,
        willChange: isDesktop ? "transform, opacity, filter" : undefined,
      }}
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
};

const PackageCategoriesGrid = ({ limit = null }) => {
  const categories = Object.values(CATEGORIES_CONFIG);
  const displayCategories = limit ? categories.slice(0, limit) : categories;

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  
  const [containerWidth, setContainerWidth] = useState(1200);
  const [trackWidth, setTrackWidth] = useState(2280); // Fallback: 6 * 380px
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(min-width: 1024px)').matches;
    }
    return false;
  });
  
  const [scrollPos, setScrollPos] = useState(0);

  // Monitor screen width to enable/disable desktop scroll-driven behavior
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const listener = (e) => setIsDesktop(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  // Measure container and horizontal track sizes
  useEffect(() => {
    const updateSizes = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
      }
    };

    // Defer execution to avoid synchronous cascading render warnings
    requestAnimationFrame(updateSizes);
    window.addEventListener('resize', updateSizes);
    
    // Extra check after DOM loads to get actual scrollWidth
    const timer = setTimeout(updateSizes, 500);

    return () => {
      window.removeEventListener('resize', updateSizes);
      clearTimeout(timer);
    };
  }, [displayCategories]);

  // Max translation range
  const maxTranslateX = Math.max(0, trackWidth - containerWidth);

  // Framer Motion values for desktop horizontal translation
  const targetX = useMotionValue(0);
  const smoothX = useSpring(targetX, { stiffness: 120, damping: 24, mass: 0.5 });
  const translateX = useTransform(smoothX, (v) => -v);

  // Keep scroll position clamped when maxTranslateX changes
  useEffect(() => {
    if (scrollPos > maxTranslateX) {
      const clamped = Math.max(0, maxTranslateX);
      requestAnimationFrame(() => {
        setScrollPos(clamped);
        targetX.set(clamped);
      });
    }
  }, [maxTranslateX, scrollPos, targetX]);

  // Scroll navigation handlers
  const handleScrollLeft = () => {
    const nextX = Math.max(0, scrollPos - 380);
    setScrollPos(nextX);
    targetX.set(nextX);
  };

  const handleScrollRight = () => {
    const nextX = Math.min(maxTranslateX, scrollPos + 380);
    setScrollPos(nextX);
    targetX.set(nextX);
  };

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

        <div className="categories-carousel-container">
          <AnimatePresence>
            {isDesktop && maxTranslateX > 0 && scrollPos > 10 && (
              <motion.button
                type="button"
                className="category-nav-arrow left-arrow"
                onClick={handleScrollLeft}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                aria-label="Previous Categories"
              >
                <ChevronLeft size={24} />
              </motion.button>
            )}
          </AnimatePresence>

          <div className="categories-grid-wrapper" ref={containerRef}>
            <motion.div 
              className="categories-grid"
              ref={trackRef}
              variants={!isDesktop ? containerVariants : undefined}
              initial={!isDesktop ? "hidden" : undefined}
              whileInView={!isDesktop ? "visible" : undefined}
              viewport={!isDesktop ? { once: true, margin: "-50px" } : undefined}
              style={{
                x: isDesktop ? translateX : undefined,
              }}
            >
              {displayCategories.map((category, index) => (
                <CategoryCardHorizontal
                  key={category.slug}
                  category={category}
                  index={index}
                  smoothX={smoothX}
                  containerWidth={containerWidth}
                  isDesktop={isDesktop}
                />
              ))}
            </motion.div>
          </div>

          <AnimatePresence>
            {isDesktop && maxTranslateX > 0 && scrollPos < maxTranslateX - 10 && (
              <motion.button
                type="button"
                className="category-nav-arrow right-arrow"
                onClick={handleScrollRight}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                aria-label="Next Categories"
              >
                <ChevronRight size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PackageCategoriesGrid;
