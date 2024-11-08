import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './SinglePage.css'; // Ensure to include your CSS file

const SinglePage = () => {
  const phrase = "It's Affordable  Free!"; // Set the phrase you want to display
  const [shouldAnimate, setShouldAnimate] = useState(false); // State to trigger animation

  return (
    <div className="relative h-96 w-screen overflow-hidden bg-black flex flex-col items-center ">
      <h2 className="text-2xl text-white absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 font-roboto-extraLight ">
        What Makes Vis Era Stand Out?
      </h2>
      <h1 className="text-6xl custom-gradient-text text-center pt-20 ">
        {phrase.split(" ").map((word, index) => (
          <span
            key={index}
            className={word === "Affordable" ? "cross-out" : ""}
          >
            {word}{" "}
            {word === "Affordable" && (
              <motion.div
                className="line"
                initial={{ width: 0 }}
                animate={shouldAnimate ? { width: "100%" } : { width: 0 }} // Animate based on state
                transition={{ duration: 1 }}
                onViewportEnter={() => setShouldAnimate(true)} // Set to true when in view
                onViewportLeave={() => setShouldAnimate(false)} // Reset when out of view
                viewport={{ once: false }} // Allow multiple animations
              />
            )}
          </span>
        ))}
      </h1>

      <video 
     
        autoPlay 
        loop 
        muted 
        playsInline
        className="pig"
      >
        <source src="./pig.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
};

export default SinglePage;
