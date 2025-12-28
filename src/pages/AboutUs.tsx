const AboutUs = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-900 via-navy-900 to-primary-800 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">About Our Firm</h1>
          <p className="text-xl text-blue-200 leading-relaxed">
            Trusted CPA services delivering expert guidance and personalized solutions for your financial success
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Who We Are */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are a professional accounting firm dedicated to providing comprehensive tax and accounting 
            services to individuals, entrepreneurs, and businesses. With years of combined experience and 
            a commitment to excellence, our team stays current with the latest tax laws and regulations 
            to ensure you receive the most accurate and beneficial guidance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our approach is built on understanding your unique financial situation and goals. We don't 
            believe in one-size-fits-all solutions—instead, we take the time to develop strategies 
            tailored specifically to your needs.
          </p>
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We operate with the highest ethical standards, ensuring transparency and honesty in every interaction.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">Client-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Your success is our success. We prioritize understanding your goals and delivering personalized solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards of professional competence and stay current with changing tax laws.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-primary-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in clear, timely communication and making complex financial matters easy to understand.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-8 text-center">Why Choose Our Firm</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  From tax preparation and planning to bookkeeping and resolution services, we offer a full suite of accounting solutions under one roof.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proactive Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't just react to tax season—we work year-round to identify opportunities for savings and help you plan for the future.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  With millions in tax savings achieved for our clients and hundreds of satisfied customers, our results speak for themselves.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Attention</h3>
                <p className="text-gray-600 leading-relaxed">
                  You're not just a number to us. We take the time to understand your unique situation and provide tailored solutions that fit your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary-900 to-navy-900 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your financial goals and navigate complex tax matters with confidence.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-lg font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Request Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
