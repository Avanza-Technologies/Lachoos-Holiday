import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';
import MobileBottomNav from './components/MobileBottomNav';
import Home from './pages/Home';
import Packages from './pages/Packages';
import CategoryShowcase from './pages/CategoryShowcase';
import PackageDetails from './pages/PackageDetails';
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
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:categorySlug" element={<CategoryShowcase />} />
            <Route path="/packages/:categorySlug/:packageId" element={<PackageDetails />} />
            {/* Redirect old path to new canonical route */}
            <Route path="/honeymoon" element={<Navigate to="/packages/honeymoon" replace />} />
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
