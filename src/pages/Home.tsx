import { useState } from 'react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Working with Robert has transformed how we handle our business taxes. His strategic approach saved us over $180,000 in tax liability last year alone. Truly exceptional service.",
      name: "Sarah M.",
      title: "Tech Entrepreneur, Silicon Valley",
      stat: "$2.4M+",
      statLabel: "Tax Liability Reduced"
    },
    {
      quote: "Robert's expertise in tax advisory has been invaluable to our growing business. His proactive planning and attention to detail have saved us countless hours and significant money.",
      name: "Michael Chen",
      title: "Restaurant Owner, San Francisco",
      stat: "500+",
      statLabel: "Clients Served"
    },
    {
      quote: "I've worked with several CPAs over the years, but none compare to Robert's level of service and expertise. He's not just my accountant—he's a trusted business advisor.",
      name: "Jennifer Lopez",
      title: "E-commerce Business Owner",
      stat: "15+",
      statLabel: "Years of Excellence"
    }
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-navy-900 via-primary-900 to-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
              Expert Tax & Accounting
              <span className="block text-teal-300 mt-2">You Can Trust</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-blue-200 leading-relaxed">
              Professional CPA services for individuals and businesses. Personalized attention, 
              accurate results, and peace of mind for all your accounting needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-teal-400 text-base font-semibold rounded-xl text-white bg-teal-600 hover:bg-teal-500 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Request Free Consultation
              </a>
              <a
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-blue-300 text-base font-semibold rounded-xl text-white hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-teal-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive accounting solutions tailored to your unique needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <a href="/what-we-do/tax-preparation" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-primary-600 to-primary-700"></div>
            <div className="p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                Tax Preparation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expert tax preparation services for individuals and businesses
              </p>
            </div>
          </a>

          <a href="/what-we-do/tax-advisory" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-600"></div>
            <div className="p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-teal-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                Tax Advisory
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic tax planning and advisory services
              </p>
            </div>
          </a>

          <a href="/what-we-do/accounting" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-primary-700 to-teal-500"></div>
            <div className="p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                Accounting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive accounting and bookkeeping solutions
              </p>
            </div>
          </a>

          <a href="/what-we-do/tax-resolution" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-teal-600 to-primary-700"></div>
            <div className="p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-teal-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                Tax Resolution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Help resolving tax issues with the IRS
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Who We Work With Section */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Who We Work With
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-primary-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              We partner with diverse clients to help them achieve financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-700 hover:border-teal-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-teal-300">Entrepreneurs</h3>
              <p className="text-gray-300 leading-relaxed">
                We specialize in working with entrepreneurs and small business owners, providing strategic tax planning 
                and accounting services to help you grow your business while minimizing tax liability.
              </p>
            </div>

            <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-700 hover:border-primary-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Small Businesses</h3>
              <p className="text-gray-300 leading-relaxed">
                From startups to established companies, we provide comprehensive accounting, bookkeeping, 
                and tax services tailored to your business needs.
              </p>
            </div>

            <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-700 hover:border-primary-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Individuals</h3>
              <p className="text-gray-300 leading-relaxed">
                Personal tax preparation and planning services for individuals and families seeking to 
                maximize deductions and minimize tax obligations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Proven Track Record Section with Carousel */}
      <div className="bg-gray-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Proven Track Record
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Real results for real clients
            </p>
          </div>

          <div className="relative">
            {/* Left Arrow - Desktop Only */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl items-center justify-center text-primary-700 hover:text-primary-800 hover:bg-gray-50 transition-all"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow - Desktop Only */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl items-center justify-center text-primary-700 hover:text-primary-800 hover:bg-gray-50 transition-all"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side - Stats */}
                <div className="bg-gradient-to-br from-primary-700 to-primary-800 p-6 sm:p-12 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-4 sm:mb-6">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-teal-300 mx-auto mb-3 sm:mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <div className="text-4xl sm:text-5xl font-display font-bold text-white mb-2">{testimonials[currentTestimonial].stat}</div>
                      <div className="text-teal-200 text-base sm:text-lg font-semibold">{testimonials[currentTestimonial].statLabel}</div>
                    </div>
                    <p className="text-blue-100 text-base sm:text-lg px-2">
                      We've helped our clients save millions through strategic tax planning and expert guidance
                    </p>
                  </div>
                </div>

                {/* Right Side - Testimonial */}
                <div className="p-6 sm:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                  <div className="mb-4 sm:mb-6">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div>
                    <div className="font-display font-bold text-gray-900 text-base sm:text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm sm:text-base text-gray-600">{testimonials[currentTestimonial].title}</div>
                    <div className="flex mt-2 sm:mt-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentTestimonial === index 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-br from-navy-900 via-primary-900 to-navy-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Take the Next Steps?
          </h2>
          <p className="text-xl text-blue-200 mb-4 leading-relaxed">
            Have questions about how we can help you achieve your goals?
          </p>
          <p className="text-xl text-blue-200 mb-10 leading-relaxed">
            Interested in partnering with us? Reach out today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-lg font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Request a Free Consultation
            <svg className="w-6 h-6 ml-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
