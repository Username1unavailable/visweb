import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParticleTransition = ({ imageRef }) => {
  const [imagePosition, setImagePosition] = useState({ top: 0 });

  useEffect(() => {
    const updateImagePosition = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setImagePosition({
          top: rect.top + window.scrollY,
        });
      }
    };

    // Initial position
    updateImagePosition();

    // Update on resize and scroll
    window.addEventListener('resize', updateImagePosition);
    window.addEventListener('scroll', updateImagePosition);

    return () => {
      window.removeEventListener('resize', updateImagePosition);
      window.removeEventListener('scroll', updateImagePosition);
    };
  }, [imageRef]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      {Array.from({ length: 100 }).map((_, i) => {
        const startX = Math.random() * window.innerWidth;
        const duration = 2 + Math.random() * 2;

        // Calculate the Y position where the square should stop (top of the image)
        const endY = imagePosition.top;

        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-red-500 rounded-sm"
            initial={{
              x: startX,
              y: -20,
              opacity: 1,
            }}
            animate={{
              y: endY - 5 - Math.random() * 10, // Adjust to make squares stop slightly above the image
              transitionEnd: {
                y: endY - 5 - Math.random() * 10,
              },
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleTransition;
