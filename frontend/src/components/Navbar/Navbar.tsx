// Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import DropdownMenu from './DropdownMenu';
import MobileMenu from './MobileMenu';
import Logo from '../../assets/logo.png'
import ALVIOLogo from '../../assets/ARVIO.png'

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesItems = [
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Mobile Apps', path: '/services/mobile-apps' },
    { label: 'UI/UX Design', path: '/services/ui-ux-design' },
    { label: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  const moreItems = [
    { label: 'Blog', path: '/blog' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Careers', path: '/careers' },
    { label: 'FAQ', path: '/faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-white'
        }`}
      >
        {/* Main container with 1600px max-width and side borders */}
        <div className="mx-auto max-w-[1600px] border-x border-gray-100">
          
          {/* Grid border system */}
          <div className="flex items-center justify-between h-20 md:h-24 divide-x divide-gray-100 border-b border-gray-100">
            
            {/* Left Logo Section (1st Column Style) */}
            <div className="flex-shrink-0 px-6 lg:px-10 h-full flex items-center min-w-[250px]">
              <Link to="/" className="flex items-center">
                <img src={Logo} alt="Logo" className="h-8 w-auto" />
              </Link>
            </div>

            {/* Desktop Menu (Middle Content) */}
            <div className="hidden lg:flex flex-grow items-center justify-center space-x-2 h-full">
              <Link
                to="/"
                className="px-5 py-2 text-gray-700 hover:text-[#FF7E28] transition-all duration-200 font-bold text-[14px] uppercase tracking-wider"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="px-5 py-2 text-gray-700 hover:text-[#FF7E28] transition-all duration-200 font-bold text-[14px] uppercase tracking-wider"
              >
                About
              </Link>

              <DropdownMenu label="Services" items={servicesItems} />
              
              <DropdownMenu label="More" items={moreItems} />

              <Link
                to="/contact"
                className="px-5 py-2 text-gray-700 hover:text-[#FF7E28] transition-all duration-200 font-bold text-[14px] uppercase tracking-wider"
              >
                Contact
              </Link>
            </div>

            {/* Right Side Logo/CTA Section */}
            <div className="hidden lg:flex flex-shrink-0 px-10 h-full items-center justify-end min-w-[200px]">
               <img src={ALVIOLogo} alt="ARVIO" className="h-6 w-auto opacity-80" />
            </div>

            {/* Mobile Menu Button (Visible on Mobile) */}
            <div className="lg:hidden flex items-center px-6">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        servicesItems={servicesItems}
        moreItems={moreItems}
      />

      {/* Spacer matching nav height to prevent content overlap */}
      <div className="h-20 md:h-24" />
    </>
  );
};

export default Navbar;