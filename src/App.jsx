import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Honeymoon from './pages/Honeymoon';
import Sabarimala from './pages/Sabarimala';
import Fleet from './pages/Fleet';
import './index.css';

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/honeymoon" element={<Honeymoon />} />
            <Route path="/sabarimala" element={<Sabarimala />} />
            <Route path="/fleet" element={<Fleet />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
