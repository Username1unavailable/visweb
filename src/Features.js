import React, { useRef, useEffect} from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './VisEraSection.css';

const features = [
  {
    title: 'Eye-tracking',
    description:
      'Control your computer simply by looking at objects on the screen, making navigation faster and more intuitive without needing to click.',
    image: './eye.png',
  },
  {
    title: 'Hand-tracking',
    description:
      'Use hand gestures to interact with your computer, allowing you to scroll, click, and swipe with a natural, touch-free experience.',
    image: './hand.png',
  },
  {
    title: 'Drawing tool',
    description:
      'Easily sketch and draw directly on your screen with simple hand movements, perfect for brainstorming, design work, and quick notes.      ',
    image: './art.jpg',
  },
  {
    title: 'AI with vision',
    description:
      'Our AI can understand what’s on your screen, making it easier to perform tasks like text recognition and smart suggestions based on what you’re doing.      ',
    image: './ai.jpg',
  },
  {
    title: 'Secure & Reliable',
    description:
      'Enjoy a secure experience with encryption and reliability, ensuring your data is safe while you interact seamlessly with your computer.      ',
    image: './secure.jpg',
  },
  {
    title: 'Customizable Workflows',
    description:
      'Create your own personalized workflow to optimize how you interact with your computer, streamlining your daily tasks and boosting productivity.      ',
    image: './custim.jpg',
  },
];

const FeatureItem = ({ image, title, description, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.8, ease: 'easeOut' },
    },
    hover: {
      scale: 1.02,
      y: -10,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="group relative cursor-pointer"
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
    >
      <div className="overflow-hidden rounded-xl shadow-lg relative">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-500"
        />
      </div>
      <h3 className="mt-6 text-2xl font-semibold custom-gradient-text group-hover:custom-gradient-text transition-colors duration-500">
        {title}
      </h3>
      <p className="mt-4 text-gray-300">{description}</p>
    </motion.div>
  );
};const ParticleTransition = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-64 pointer-events-none z-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-12 bg-gradient-to-t from-red-500/50 to-transparent rounded-lg "
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 0
            }}
            animate={{
              y: 600,
              opacity: [0, 1, 0],
              
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
    );
  };





  const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const canvasRef = useRef(null);
    const isDrawing = useRef(false);
    const lastPos = useRef({ x: 0, y: 0 });
  
    useEffect(() => {
      const moveCursor = (e) => {
        cursorX.set(e.clientX - 8); // Center the cursor
        cursorY.set(e.clientY - 8);
      };
  
      const handleMouseDown = (e) => {
        console.log('Mouse down:', e.button, 'Shift key:', e.shiftKey);
        if (e.button === 0 && e.shiftKey) { // Left mouse button + Shift key
          isDrawing.current = true;
          lastPos.current = { x: e.clientX, y: e.clientY };
        }
      };
  
      const handleMouseUp = (e) => {
        console.log('Mouse up:', e.button);
        if (e.button === 0) {
          isDrawing.current = false;
        }
      };
  
      const handleMouseMove = (e) => {
        moveCursor(e);
        if (isDrawing.current) {
          console.log('Drawing at:', e.clientX, e.clientY);
          const canvas = canvasRef.current;
          if (!canvas) {
            console.error('Canvas not found during drawing');
            return;
          }
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            console.error('2D context not found');
            return;
          }
  
          ctx.strokeStyle = 'rgba(255, 8, 68, 1)';
          ctx.lineWidth = 7;
          ctx.lineCap = 'round';
          ctx.mixBlendMode= 'difference';
         

  
          ctx.beginPath();
          ctx.moveTo(lastPos.current.x, lastPos.current.y);
          ctx.lineTo(e.clientX, e.clientY);
          ctx.stroke();
  
          lastPos.current = { x: e.clientX, y: e.clientY };
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [cursorX, cursorY]);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) {
        console.error('Canvas not found during initialization');
        return;
      }
      const ctx = canvas.getContext('2d');
  
      const setCanvasSize = () => {
        // Save current content
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
        // Resize canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        // Restore content
        ctx.putImageData(imageData, 0, 0);
      };
  
      setCanvasSize();
  
      window.addEventListener('resize', setCanvasSize);
      return () => {
        window.removeEventListener('resize', setCanvasSize);
      };
    }, []);
  
    return (
      <>
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 pointer-events-none z-40"
        />
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
          style={{
            translateX: cursorX,
            translateY: cursorY,
            backgroundColor: '#FF0844',
            mixBlendMode: 'difference',
          }}
        />
      </>
    );
  };



  
const Features = () => {
  const headingRef = useRef(null);
  const headingControls = useAnimation();
  const [headingInViewRef, headingInView] = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (headingInView) {
      headingControls.start('visible');
    }
  }, [headingControls, headingInView]);

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.20 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };






  const AnimatedGradientHeader = () => (
    <motion.div
      className="absolute top-0 left-0 w-full h-36 pointer-events-none z-0"
      animate={{
        background: [
          'linear-gradient(to bottom,   rgba(255,0,0,0.6), rgba(0,0,0,0))',
          'linear-gradient(to bottom,  rgba(255,0,0,0.6), rgba(0,0,0,0))',
          'linear-gradient(to bottom,  rgba(255,0,0,0.6), rgba(0,0,0,0))',
        ],
      }}
      transition={{
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    />
  );

  

  return (
    
    <section className="relative bg-black text-white py-24 overflow-hidden -mt-1">
      <AnimatedGradientHeader />
      <ParticleTransition />
      <CustomCursor />
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16 ">
      <div className="flex justify-center mb-8">
          <img src="./visera app logo.png" alt="Logo" className="w-16 h-16 rounded-lg " />
        </div>
        <motion.h2
          ref={headingInViewRef}
          className="text-5xl font-bold mb-16 text-center custom-gradient-text "
          variants={headingVariants}
          initial="hidden"
          animate={headingControls}
        >
          {Array.from('Features').map((char, index) => (
            <motion.span
              key={index}
              className={char === 'Visera' ? 'text-green-500' : ''}
              variants={letterVariants}
              
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h2>
        <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              index={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
