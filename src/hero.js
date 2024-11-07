import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        console.log("Video autoplay failed");
      }
    };
    
    playVideo();
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        playsInline
        muted
        loop
        disablePictureInPicture
        preload="auto"
        controls={false}
        style={{ pointerEvents: 'none' }}
        src="./vis3.mp4"
         // Replace with your video source
      />

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-end h-full pb-16 z-10">
        {/* Medium Image */}
        <img
          className="w-[500px] mb-4"
          src="./visera logo.png" // Replace with your image source
          alt="Medium Image"
        />

        {/* Text in Roboto */}
        <p className="text-white font-roboto text-xl">
          A New Era For Vision
        </p>

        {/* Down Arrow with hover animation */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white mt-4"
          initial={{ y: 0 }}
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileHover={{ scale: 1.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </div>
    </div>
  );
};

export default Hero;