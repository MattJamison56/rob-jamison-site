import { Link } from 'react-router-dom';
import { navigationItems } from '../utils/navigation';

interface DesktopMenuProps {
  onSearchClick: () => void;
}

const DesktopMenu = ({ onSearchClick }: DesktopMenuProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item) => (
        <div
          key={item.path}
          className="relative group"
        >
          {item.subItems ? (
            <>
              <button className="text-gray-700 hover:text-primary-600 font-semibold transition-colors flex items-center space-x-1 py-2">
                <span>{item.label}</span>
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 mt-0 w-56 rounded-xl shadow-xl bg-navy-900 border border-navy-700 z-50 overflow-hidden transition-all duration-200">
                <div className="py-2">
                  {item.subItems.map((subItem) => (
                    subItem.external ? (
                      <a
                        key={subItem.path}
                        href={subItem.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-primary-800 hover:text-white transition-all"
                      >
                        {subItem.label}
                        <svg className="w-3 h-3 inline ml-1 mb-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-primary-800 hover:text-white transition-all"
                      >
                        {subItem.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </>
          ) : (
            <Link
              to={item.path}
              className="text-gray-700 hover:text-primary-600 font-semibold transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
      
      <button
        onClick={onSearchClick}
        className="text-gray-700 hover:text-primary-600 transition-colors p-2 hover:bg-gray-50 rounded-lg"
        aria-label="Search"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      
      <Link
        to="/contact"
        className="bg-gradient-to-r from-primary-700 to-primary-800 text-white px-6 py-2.5 rounded-lg hover:from-primary-800 hover:to-primary-900 font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
      >
        Free Consultation
      </Link>
    </nav>
  );
};

export default DesktopMenu;
