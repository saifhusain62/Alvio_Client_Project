import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Services
import WebDevelopment from './pages/services/WebDevelopment';
import MobileApps from './pages/services/MobileApps';
import UiUxDesign from './pages/services/UiUxDesign';
import DigitalMarketing from './pages/services/DigitalMarketing';

// More
import Blog from './pages/more/Blog';
import Portfolio from './pages/more/Portfolio';
import Careers from './pages/more/Careers';
import FAQ from './pages/more/FAQ';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Services Routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          
          {/* More Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;