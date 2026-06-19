import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';
import MobileBottomNav from './components/MobileBottomNav';
import Home from './pages/Home';
import Honeymoon from './pages/Honeymoon';
import Sabarimala from './pages/Sabarimala';
import Fleet from './pages/Fleet';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/honeymoon" element={<Honeymoon />} />
            <Route path="/sabarimala" element={<Sabarimala />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
        <MobileBottomNav />
      </div>
    </Router>
  );
}

export default App;
