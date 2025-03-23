import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black-600 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Parent Application</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;