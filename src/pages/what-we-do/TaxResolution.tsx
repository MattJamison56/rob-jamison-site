const TaxResolution = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Tax Resolution</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Expert help resolving tax problems with the IRS or state tax authorities. We work 
            with you to find solutions and get back on track with your tax obligations.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>IRS audit representation</li>
            <li>Offer in Compromise negotiations</li>
            <li>Installment agreement setup</li>
            <li>Penalty abatement requests</li>
            <li>Liens and levies resolution</li>
            <li>Unfiled tax return preparation</li>
            <li>Innocent spouse relief</li>
          </ul>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              Don't face the IRS alone. We can help you resolve your tax issues and find peace of mind.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxResolution;
