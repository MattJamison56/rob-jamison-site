import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../utils/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchClick: () => void;
}

const MobileMenu = ({ isOpen, onClose, onSearchClick }: MobileMenuProps) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSubmenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  const handleSearchClick = () => {
    onClose();
    onSearchClick();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close menu"
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
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <span className="font-medium">{item.label}</span>
                        <svg
                          className={`h-4 w-4 transform transition-transform ${
                            expandedMenu === item.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedMenu === item.label && (
                        <ul className="mt-2 ml-4 space-y-1">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                to={subItem.path}
                                onClick={onClose}
                                className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              
              <li>
                <button
                  onClick={handleSearchClick}
                  className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="p-4 border-t">
            <Link
              to="/contact"
              onClick={onClose}
              className="block w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center px-4 py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 font-semibold shadow-md transition-all"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
