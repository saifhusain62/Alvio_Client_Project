import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  path: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  label, 
  items, 
  isMobile = false,
  onItemClick 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = () => {
    setIsOpen(false);
    if (onItemClick) onItemClick();
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-[#FF7E28] hover:text-white transition-colors duration-200"
        >
          <span className="font-medium">{label}</span>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="bg-gray-50 border-l-4 border-[#FF7E28]">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={handleItemClick}
                className="block px-8 py-2.5 text-gray-600 hover:bg-[#FF7E28] hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#FF7E28] transition-colors duration-200 font-medium"
      >
        {label}
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={handleItemClick}
              className="block px-4 py-2.5 text-gray-700 hover:bg-[#FF7E28] hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;