import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import DropdownMenu from './DropdownMenu';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  servicesItems: { label: string; path: string }[];
  moreItems: { label: string; path: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  servicesItems, 
  moreItems 
}) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-[#FF7E28]">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col py-4">
          <Link
            to="/"
            onClick={onClose}
            className="px-4 py-3 text-gray-700 hover:bg-[#FF7E28] hover:text-white transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          
          <Link
            to="/about"
            onClick={onClose}
            className="px-4 py-3 text-gray-700 hover:bg-[#FF7E28] hover:text-white transition-colors duration-200 font-medium"
          >
            About Us
          </Link>

          <DropdownMenu
            label="Services"
            items={servicesItems}
            isMobile={true}
            onItemClick={onClose}
          />

          <DropdownMenu
            label="More"
            items={moreItems}
            isMobile={true}
            onItemClick={onClose}
          />

          <Link
            to="/contact"
            onClick={onClose}
            className="px-4 py-3 text-gray-700 hover:bg-[#FF7E28] hover:text-white transition-colors duration-200 font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;