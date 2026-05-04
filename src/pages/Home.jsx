import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import WhyChooseUs from '../components/WhyChooseUs';
import TrendingPackages from '../components/TrendingPackages';
import Testimonials from '../components/Testimonials';
import SabarimalaSection from '../components/SabarimalaSection';
import ExpertContact from '../components/ExpertContact';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <div style={{ backgroundColor: '#F5F5F5' }}>
        <Destinations />
      </div>
      <TrendingPackages />
      <Testimonials />
      <SabarimalaSection />
      <ExpertContact />
    </>
  );
};

export default Home;
