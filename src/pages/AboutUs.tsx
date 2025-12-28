const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Robert Jamison, CPA</h2>
          <p className="text-gray-600 mb-6">
            With years of experience in accounting and tax services, Robert Jamison provides 
            professional, personalized service to individuals and businesses alike.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            We are dedicated to providing exceptional accounting and tax services while building 
            lasting relationships with our clients. Our goal is to help you navigate complex 
            financial matters with confidence and clarity.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Us</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Experienced and certified professional</li>
            <li>Personalized attention to your unique needs</li>
            <li>Comprehensive tax and accounting services</li>
            <li>Commitment to accuracy and integrity</li>
            <li>Clear communication and guidance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
