import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xzdbjgwl");

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Request a Free Consultation
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and we'll get back to you as soon as possible. 
            We're here to help with all your tax and accounting needs.
          </p>
        </div>

        {state.succeeded && (
          <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 rounded-xl shadow-lg animate-fade-in">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-green-800 font-semibold text-lg">
                Thank you! We'll be in touch soon.
              </p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 hover:border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  placeholder="John"
                />
                <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 hover:border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  placeholder="Doe"
                />
                <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-200 hover:border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                placeholder="john@example.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-200 hover:border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                placeholder="(555) 123-4567"
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Tell us about yourself *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-200 hover:border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                placeholder="Please describe your accounting or tax needs..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {state.submitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Submit Request
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
