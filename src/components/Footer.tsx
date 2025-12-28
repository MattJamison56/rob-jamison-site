const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/src/assets/Jamison_Accounting_Counsulting_logo.png" 
                alt="Jamison Accounting & Consulting" 
                className="h-12 w-auto" 
              />
            </div>
            <h3 className="text-lg font-display font-semibold mb-2">Jamison Accounting & Consulting</h3>
            <p className="text-gray-400 leading-relaxed">
              Professional Tax & Accounting Services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/what-we-do/tax-preparation" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  <span>Tax Preparation</span>
                </a>
              </li>
              <li>
                <a href="/what-we-do/tax-advisory" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  <span>Tax Advisory</span>
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Get Started</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ready to discuss your accounting needs?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-teal-600 hover:to-teal-700 font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Request Consultation
              <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Jamison Accounting & Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
