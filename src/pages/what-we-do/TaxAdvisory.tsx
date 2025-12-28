const TaxAdvisory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Tax Advisory</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Strategic tax planning and advisory services to help you make informed decisions 
            and minimize your tax liability throughout the year.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Year-round tax planning strategies</li>
            <li>Business structure optimization</li>
            <li>Estate and succession planning</li>
            <li>Investment tax strategies</li>
            <li>Retirement planning</li>
            <li>Tax impact analysis for major transactions</li>
          </ul>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              Proactive tax planning can save you thousands. Let's discuss your tax strategy.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxAdvisory;
