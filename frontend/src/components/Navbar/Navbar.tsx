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

  // Services dropdown items
  const servicesItems = [
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Mobile Apps', path: '/services/mobile-apps' },
    { label: 'UI/UX Design', path: '/services/ui-ux-design' },
    { label: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  // More dropdown items
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

  // Prevent body scroll when mobile menu is open
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
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <img src={Logo} alt="" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 hover:text-[#FF7E28] transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="px-4 py-2 text-gray-700 hover:text-[#FF7E28] transition-colors duration-200 font-medium"
              >
                About Us
              </Link>

              <DropdownMenu label="Services" items={servicesItems} />
              
              <DropdownMenu label="More" items={moreItems} />

              <Link
                to="/contact"
                className="px-4 py-2 text-gray-700 hover:text-[#FF7E28] transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Right Logo (Desktop only) */}
            <div className="hidden lg:block flex-shrink-0">
             <img src={ALVIOLogo} alt="" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        servicesItems={servicesItems}
        moreItems={moreItems}
      />

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;