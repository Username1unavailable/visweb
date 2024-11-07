import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Footer() {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const toggleFilter = () => {
    const rootElement = document.body;
    rootElement.style.filter = isFilterActive ? 'none' : 'invert(1)';
    setIsFilterActive(!isFilterActive);
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <img className="mb-4 md:mb-0 w-[300px]" src="./visera logo.png" alt="Medium Image" />

          <div className="flex space-x-20 text-red-500">
            <a href="#facebook" className="hover:text-white">Facebook</a>
            <a href="#twitter" className="hover:text-white">Twitter</a>
            <a href="#instagram" className="hover:text-white">Instagram</a>
          </div>

          <div className="text-center pl-4 relative z-50">
            <button
              onClick={toggleFilter}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:scale-105 transition-colors cursor-pointer"
            >
              {isFilterActive ? '❄️' : '👀 '}
            </button>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-400">
          © 2024 Vis Era. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
