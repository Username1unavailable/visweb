import React from 'react';
import './SinglePage.css';
import { motion } from 'framer-motion';

const SinglePage3 = () => {
  return (
    <div className="relative h-{40rem} w-screen overflow-hidden bg-black flex flex-col items-center">
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false }} 
        className="text-6xl text-center pt-10"
      >
       
        <span className="custom-gradient-text">C</span>

        <span className="text-white">r</span>
        <span className="custom-gradient-text">e</span>

        <span className="text-white">a</span>
        <span className="custom-gradient-text">t</span>

        <span className="text-white">i</span>
        <span className="custom-gradient-text">v</span>

        <span className="text-white">e</span>{" "}

        <span className="custom-gradient-text">D</span>

        <span className="text-white">r</span>
        <span className="custom-gradient-text">a</span>

        <span className="text-white">w</span>
        <span className="custom-gradient-text">i</span>

        <span className="text-white">n</span>
        <span className="custom-gradient-text">g</span>{" "}

        <span className="text-white">t</span>
        <span className="custom-gradient-text">o</span>

<span className="text-white">o</span>
<span className="custom-gradient-text">l</span>
      </motion.h1>

      <video 
        width="250" 
        height="250" 
        autoPlay 
        loop 
        muted 
        className="draw "
      >
        <source src="./draw.mp4 " type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <motion.p
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  whileHover={{ scale: 1.05 }}
  className="text-white mt-6 text-xl font-semibold tracking-wide px-6 py-3 rounded-lg border border-purple-500/30 backdrop-blur-sm shadow-lg animate-gradient bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 bg-[length:200%_auto]"
>
  Press Shift + Left Click to draw
</motion.p>

    </div>
  );
};

export default SinglePage3;