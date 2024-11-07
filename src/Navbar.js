import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { UserIcon, StarIcon, DocumentTextIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import './VisEraSection.css';

const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1500); // Duration for white ball animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-20 px-4 py-2 font-roboto-extraLight ${isAnimating ? 'bg-white-ball' : 'bg-opacity-90'} transition-all duration-1000`}>
      <ul className={`flex justify-between md:justify-center md:space-x-44 py-2 text-lg md:text-2xl font-semibold text-white ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000 ease-in-out`}>
        
        {/* About Link */}
        <li className="mx-2 md:mx-4 animate-navItem">
          <Link
            to="visera"
            smooth={true}
            duration={500}
            className="cursor-pointer  flex flex-col items-center md:flex-row md:items-baseline transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-custom px-4 md:px-8 py-2 rounded-lg bg-red-400 hover:bg-white hover:text-red-300 "
          >
            <UserIcon className="h-6 w-6 md:hidden" />
            <span className="md:inline hidden">About</span>
          </Link>
        </li>

        {/* Features Link */}
        <li className="mx-2 md:mx-4 animate-navItem">
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="cursor-pointer  flex flex-col items-center md:flex-row md:items-baseline transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-custom px-4 md:px-8 py-2 rounded-lg  bg-red-400 hover:bg-white hover:text-red-300"
          >
            <StarIcon className="h-6 w-6 md:hidden" />
            <span className="md:inline hidden">Features</span>
          </Link>
        </li>

        {/* Single Page Link */}
        <li className="mx-2 md:mx-4 animate-navItem">
          <Link
            to="singlepage"
            smooth={true}
            duration={500}
            className="cursor-pointer flex flex-col items-center md:flex-row md:items-baseline transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-custom px-4 md:px-8 py-2 rounded-lg bg-red-400 hover:bg-white hover:text-red-300"
          >
            <DocumentTextIcon className="h-6 w-6 md:hidden" />
            <span className="md:inline hidden">Benefits</span>
          </Link>
        </li>

        {/* FAQ Link */}
        <li className="mx-2 md:mx-4 animate-navItem">
          <Link
            to="faq"
            smooth={true}
            duration={500}
            className="cursor-pointer  flex flex-col items-center md:flex-row md:items-baseline transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-custom px-4 md:px-8 py-2 rounded-lg bg-red-400 hover:bg-white hover:text-red-300"
          >
            <QuestionMarkCircleIcon className="h-6 w-6 md:hidden" />
            <span className="md:inline hidden">FAQ</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
