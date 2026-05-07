import React, { useEffect, useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingContact.css';

const WA_LINK =
  'https://wa.me/919447912456?text=' +
  encodeURIComponent('Hi Lachoos Holidays! I would like to plan a Kerala trip.');
const CALL_LINK = 'tel:+919447912456';

const FloatingContact = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Appear once user scrolls past 60% of the viewport (after the hero)
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fc-root"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                className="fc-menu"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={WA_LINK}
                  className="fc-menu-item fc-menu-item--wa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fc-menu-icon">
                    <MessageCircle size={16} />
                  </span>
                  <span className="fc-menu-text">
                    <span className="fc-menu-label">CHAT ON WHATSAPP</span>
                    <span className="fc-menu-sub">Reply within minutes</span>
                  </span>
                </a>
                <a
                  href={CALL_LINK}
                  className="fc-menu-item fc-menu-item--call"
                >
                  <span className="fc-menu-icon">
                    <Phone size={16} />
                  </span>
                  <span className="fc-menu-text">
                    <span className="fc-menu-label">CALL DIRECT</span>
                    <span className="fc-menu-sub">+91 944 791 2456</span>
                  </span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            className={`fc-toggle ${open ? 'fc-toggle--open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close contact menu' : 'Open contact menu'}
            aria-expanded={open}
          >
            <span className="fc-toggle-pulse" aria-hidden="true" />
            <span className="fc-toggle-icon">
              {open ? <X size={20} /> : <MessageCircle size={20} />}
            </span>
            {!open && <span className="fc-toggle-label">Plan my trip</span>}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;
