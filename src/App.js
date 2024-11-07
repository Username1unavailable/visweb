import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './Navbar'; // Import the Navbar
import VisEraSection from './VisEraSection';
import Hero from './hero';
import SinglePage from './SinglePage';
import SinglePage1 from './SinglePage1';
import SinglePage2 from './SinglePage2';
import SinglePage3 from './SinglePage3';
import Features from './Features';
import FAQ from './FAQ';
import Footer from './Footer';

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Video or Any Fullscreen Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div id="hero">
          <Hero />
        </div>

        {/* VisEraSection Component */}
        <div id="visera">
          <VisEraSection 
            leftVideo="./va.mp4" 
            rightVideo="./Animation - 1729573487691.webm" 
          />
        </div>

        {/* Features Section */}
        <div id="features">
          <Features />
        </div>
      </div>

      {/* Single Page Sections */}
      <div id="singlepage">
        <SinglePage />
        <SinglePage1 />
        <SinglePage2 />
        <SinglePage3 />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default App;
