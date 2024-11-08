import React from 'react';
import './SinglePage.css';
import { motion } from 'framer-motion';

const SinglePage = () => {
  return (
    <div className="relative h-96 w-screen overflow-hidden bg-black flex flex-col items-center">
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false }} 
        className="text-6xl text-center pt-10"
      >
        <span className="text-white">Cutting-Edge</span>{' '}
        <span className="custom-gradient-text">Hand Tracking</span>
      </motion.h1>

      <video 
        width="100" 
        height="100" 
        autoPlay 
        loop 
        muted 
        className="hand"
      >
        <source src="./hand.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SinglePage;
