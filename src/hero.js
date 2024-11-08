import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const Hero = () => {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  // Helper function to attempt autoplay, switching to image if it fails
  const attemptVideoAutoplay = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        console.log("Autoplay successful");
      } catch (error) {
        console.log("Autoplay failed, switching to fallback image");
        setVideoFailed(true); // Switch to fallback image
      }
    }
  };

  useEffect(() => {
    attemptVideoAutoplay();
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video or Fallback Image */}
      <video
  className="hero-video"
  id="loadingVideo"
  width="100%"
  autoPlay
  muted
  loop
  playsInline
  ref={videoRef}
  disablePictureInPicture
  controls={false}
>
          <source src="./vis2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
     

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-end h-full pb-16 z-10">
        <img
          className="w-[500px] mb-4"
          src="./visera logo.png" // Replace with your logo image path
          alt="Medium Image"
        />
        <p className="text-white font-roboto text-xl">A New Era For Vision</p>
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
