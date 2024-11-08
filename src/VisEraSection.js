import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import './VisEraSection.css';
import { motion } from 'framer-motion';
import Particles from './Particles';

const VisEraSection = () => {


  



  const [gradientStyle, setGradientStyle] = useState({
    background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.6), rgba(255, 0, 0, 0.3))'
  });
  const [isInteracted, setIsInteracted] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;
    const xPercent = (clientX / offsetWidth) * 100;
    const yPercent = (clientY / offsetHeight) * 100;

    setGradientStyle({
      background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 0, 0, 0.6), rgba(255, 0, 0, 0.6))`
    });
    setIsInteracted(true); // Set interaction as true once the user moves on the screen
  };

  // Mobile-friendly interaction handler
  useEffect(() => {
    const handleTouchStart = () => setIsInteracted(true);
    window.addEventListener('touchstart', handleTouchStart, { once: true });
    return () => window.removeEventListener('touchstart', handleTouchStart);
  }, []);


  return (
    <div>
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="relative h-screen w-screen overflow-hidden p-6 lg:p-24 text-white flex flex-col justify-center items-center"
      onMouseMove={handleMouseMove}
    >
<Canvas 
          className="absolute top-0 left-0 w-screen h-screen z-10"
          style={{ position: 'absolute', width: '100vw', height: '100vh', zIndex: -10 }}
        >
          <Particles />
        </Canvas>


    
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-40"
        autoPlay
        muted
        loop
      >
          <source src="./vibe3short.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="./vibe3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      
      {/* Dynamic Gradient Overlay */}
      <div className="gradient-overlay absolute top-0 left-0 w-full h-full -z-30" style={gradientStyle}></div>
      
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false }}
        className="text-center text-5xl lg:text-6xl font-roboto-extraLight mb-12 lg:mb-16 hover-effect2 mx-auto max-w-7xl"
      >
        Control Your World with a Glance and Gesture
      </motion.h3>

      <div className="flex flex-col items-center justify-center w-full gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
          className="text-center max-w-4xl px-6 lg:px-12 mx-auto"
        >
          <h2 className="font-roboto-extraLight text-4xl lg:text-5xl mb-6 hover-effect">
            What is Vis Era?
          </h2>
          <p className="text-gray-300 font-roboto-extraLight text-lg leading-relaxed mb-8 lg:text-2xl">
          Vis Era lets you navigate and control your device using natural hand gestures and eye movements—no touch required. Experience seamless interaction with our advanced gesture and eye-tracking technology.          </p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 133, 133, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="download-beta-btn"
          >
            Download Beta
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default VisEraSection;
