const Accounting = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Accounting</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Comprehensive accounting and bookkeeping services to keep your financial records 
            accurate and organized. We provide the insights you need to make smart business decisions.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Bookkeeping and financial record keeping</li>
            <li>Financial statement preparation</li>
            <li>Accounts payable and receivable management</li>
            <li>Payroll processing</li>
            <li>Bank reconciliation</li>
            <li>QuickBooks setup and training</li>
            <li>Financial reporting and analysis</li>
          </ul>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              Keep your books in order and gain valuable insights into your business finances.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
