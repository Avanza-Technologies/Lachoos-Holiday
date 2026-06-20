import SEO from '../components/SEO';
import Hero from '../components/Hero';
import QuickServiceHighlights from '../components/QuickServiceHighlights';
import HeritageValues from '../components/HeritageValues';
import PackageCategoriesGrid from '../components/PackageCategoriesGrid';
import FeaturedPackages from '../components/FeaturedPackages';
import WhyChoose from '../components/WhyChoose';
import Destinations from '../components/Destinations';
import SignatureExperiences from '../components/SignatureExperiences';
import SabarimalaSection from '../components/SabarimalaSection';
import FleetHighlight from '../components/FleetHighlight';
import Testimonials from '../components/Testimonials';
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
    <QuickServiceHighlights />
    <HeritageValues />
    <PackageCategoriesGrid />
    <FeaturedPackages />
    <WhyChoose />
    <Destinations />
    <SignatureExperiences />
    <SabarimalaSection />
    <FleetHighlight />
    <Testimonials />
    <ExpertContact />
  </>
);

export default Home;

