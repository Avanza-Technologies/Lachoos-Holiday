import SEO from '../components/SEO';
import Hero from '../components/Hero';
import HeritageValues from '../components/HeritageValues';
import Destinations from '../components/Destinations';
import SignatureExperiences from '../components/SignatureExperiences';
import TrendingPackages from '../components/TrendingPackages';
import Testimonials from '../components/Testimonials';
import JourneyCTA from '../components/JourneyCTA';
import SabarimalaSection from '../components/SabarimalaSection';
import ExpertContact from '../components/ExpertContact';

const Home = () => (
  <>
    <SEO
      title="Kerala Tour Packages | Lachoos Holidays – Sabarimala, Munnar, Alleppey, Wayanad"
      description="Plan your Kerala holiday with Lachoos Holidays, Pathanamthitta's #1 travel experts. Book Sabarimala pilgrimage packages, honeymoon tours, Alleppey houseboats, Munnar hill stations & more. Call now!"
      keywords="Kerala tour packages, Sabarimala pilgrimage booking, Kerala tourism, Pathanamthitta travel agent, Kerala honeymoon packages, Alleppey houseboat tour, Munnar tour packages, Wayanad packages, Kerala holiday packages, God's Own Country travel, backwater houseboat Kerala, Kerala travel agency, Kumarakom backwater, Thekkady wildlife, Varkala beach"
      path="/"
    />
    <Hero />
    <HeritageValues />
    <Destinations />
    <SignatureExperiences />
    <TrendingPackages />
    <Testimonials />
    <JourneyCTA />
    <SabarimalaSection />
    <ExpertContact />
  </>
);

export default Home;

