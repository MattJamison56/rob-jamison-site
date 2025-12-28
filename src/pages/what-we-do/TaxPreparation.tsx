const TaxPreparation = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Tax Preparation</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Expert tax preparation services for individuals and businesses. We ensure accuracy, 
            maximize your deductions, and handle all aspects of your tax filing needs.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Individual tax returns (Form 1040)</li>
            <li>Business tax returns (Forms 1120, 1065, 1120S)</li>
            <li>Estate and trust returns</li>
            <li>State and local tax returns</li>
            <li>Amended returns</li>
            <li>Multi-state filings</li>
          </ul>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              Ready to get started? Schedule your free consultation today to discuss your tax 
              preparation needs.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxPreparation;
