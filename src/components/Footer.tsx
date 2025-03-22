import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
            <p>&copy; {new Date().getFullYear()} Parent Application</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">App Development</a></li>
              <li><a href="#" className="hover:underline">UI/UX Design</a></li>
              <li><a href="#" className="hover:underline">Digital Marketing</a></li>
              <li><a href="#" className="hover:underline">SEO Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">123 Street Name, City, Country</p>
            <p className="mb-2">Phone: +1 234 567 8901</p>
            <p className="mb-4">Email: info@example.com</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center">
          <p>All rights reserved. Parent Application &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;