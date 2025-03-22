import React from 'react';

const ContentSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Content Section</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Feature One</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
            <a href="#" className="text-blue-600 hover:underline">Learn More</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Feature Two</h3>
            <p className="mb-4">Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-blue-600 hover:underline">Learn More</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Feature Three</h3>
            <p className="mb-4">Consectetur adipiscing elit, lorem ipsum dolor sit amet. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
            <a href="#" className="text-blue-600 hover:underline">Learn More</a>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">High Quality</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Fast & Reliable</h4>
                <p>Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Innovative</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Secure & Trusted</h4>
                <p>Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Get Started Today</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;