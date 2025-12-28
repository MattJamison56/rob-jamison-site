import { useState } from 'react';
import { Link } from 'react-router-dom';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">RJ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-gray-900">
                  Robert Jamison
                </span>
                <span className="text-xs text-teal-600 font-semibold tracking-wide">
                  CERTIFIED PUBLIC ACCOUNTANT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <DesktopMenu onSearchClick={() => setIsSearchOpen(true)} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      {/* Search Bar */}
      <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Navbar;
