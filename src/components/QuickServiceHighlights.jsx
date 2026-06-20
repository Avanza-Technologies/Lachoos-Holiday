import { Link } from 'react-router-dom';
import { Compass, Heart, Award, Car } from 'lucide-react';
import './QuickServiceHighlights.css';

const highlights = [
  {
    icon: <Compass className="qsh-icon" size={24} />,
    title: 'Kerala Tours',
    desc: 'Curated South India circuits',
    link: '/packages'
  },
  {
    icon: <Heart className="qsh-icon" size={24} />,
    title: 'Honeymoon Packages',
    desc: 'Intimate escapes for couples',
    link: '/packages/honeymoon'
  },
  {
    icon: <Award className="qsh-icon" size={24} />,
    title: 'Sabarimala Services',
    desc: 'Spiritual pilgrimage transits',
    link: '/sabarimala'
  },
  {
    icon: <Car className="qsh-icon" size={24} />,
    title: 'Fleet Services',
    desc: 'Chauffeur-driven AC vehicles',
    link: '/fleet'
  }
];

const QuickServiceHighlights = () => {
  return (
    <section className="qsh-section">
      <div className="container">
        <div className="qsh-grid">
          {highlights.map((item, idx) => (
            <Link to={item.link} key={idx} className="qsh-card">
              <div className="qsh-icon-box">{item.icon}</div>
              <div className="qsh-info">
                <h4 className="qsh-card-title">{item.title}</h4>
                <p className="qsh-card-desc">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServiceHighlights;
