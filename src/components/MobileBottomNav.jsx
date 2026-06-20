import { NavLink } from 'react-router-dom';
import { Home, Heart, Phone, MessageCircle } from 'lucide-react';
import './MobileBottomNav.css';

const wa =
  'https://wa.me/919074885337?text=' +
  encodeURIComponent('Hi Lachoos Holidays! I need help with my Kerala trip.');

const MobileBottomNav = () => (
  <nav className="mbn" aria-label="Mobile primary">
    <NavLink to="/" end className={({ isActive }) => `mbn-item${isActive ? ' mbn-item--active' : ''}`}>
      <Home size={22} strokeWidth={1.75} />
      <span>Home</span>
    </NavLink>
    <NavLink to="/packages/honeymoon" className={({ isActive }) => `mbn-item${isActive ? ' mbn-item--active' : ''}`}>
      <Heart size={22} strokeWidth={1.75} />
      <span>Honeymoon</span>
    </NavLink>
    <a href={wa} className="mbn-item" target="_blank" rel="noopener noreferrer">
      <MessageCircle size={22} strokeWidth={1.75} />
      <span>WhatsApp</span>
    </a>
    <a href="tel:+919074885337" className="mbn-item">
      <Phone size={22} strokeWidth={1.75} />
      <span>Call</span>
    </a>
  </nav>
);

export default MobileBottomNav;
