import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import VideoBanner from './VideoBanner';
import './VisEraSection.css';


/**
 * An array of FAQs containing question and answer pairs.
 */
const faqs = [
  {
    question: "What was the inspiration behind Vis Era?",
    answer:
      "The inspiration behind Vis Era came from the desire to create a more intuitive, hands-free way to interact with technology, much like the Apple Vision Pro. We wanted to build something that would let users feel more connected to their devices, making control as natural as simply looking at or gesturing toward something",
  },
  {
    question: "How does eye-tracking work in Vis Era?",
    answer:
      "Vis Era’s eye-tracking technology uses advanced algorithms to detect and track your eye movements in real-time. By recognizing the direction of your gaze, it allows you to seamlessly control your screen—scrolling, selecting, and navigating simply by looking at what you want. The system continuously adapts to your eyes' movement for precise control, without the need for any physical input.      ",
  },
  {
    question: "Is Vis Era secure? How is my data protected?",
    answer:
      "Yes, Vis Era is designed with security in mind. All user data is encrypted using industry-standard encryption protocols to ensure that your personal information and interactions remain private. We also implement robust security measures to protect against unauthorized access, giving you peace of mind as you use the app.      ",
  },
  {
    question: "What makes Vis Era different from other control systems?    ",
    answer:
      "What sets Vis Era apart is its combination of eye and hand-tracking, allowing users to control their computer in a way that feels completely natural. Unlike traditional control systems, Vis Era is designed for efficiency and ease, enabling you to navigate, interact, and multitask without being tied to a keyboard or mouse. Plus, the integration of AI that can understand what’s happening on your screen adds an extra layer of smart control, making the experience more intuitive than ever before.      ",
  },
  {
    question: "Do I need any special hardware or equipment to use Vis Era?",
    answer:
      "No, you don’t need any special hardware—just a device with a decent camera and good quality. Vis Era works by using your device's existing camera to detect eye and hand movements, so you can start using it right away without needing extra equipment or sensors.",
  },
];

/**
 * Functional component representing a single FAQ item.
 */
function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-700">
      {/* Question Button */}
      <button
        className="w-full text-left py-4 flex items-center justify-between focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-xl custom-gradient-text font-semibold">
          {faq.question}
        </span>
        {/* Animated Icon */}
        <FiChevronDown
          className={`text-red-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={24}
        />
      </button>

      {/* Answer Section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        role="region"
        aria-hidden={!isOpen}
      >
        <p className="text-gray-300 py-2 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

// Add this new component above the FAQ component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-[500px] h-[500px] top-1/4 -left-48 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] top-3/4 right-0 bg-orange-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute w-[300px] h-[300px] bottom-0 left-1/3 bg-pink-500/20 rounded-full blur-3xl animate-drift"></div>
    </div>
  );
}

/**
 * Main FAQ component containing all FAQ items.
 */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      
      <VideoBanner />
      <div className="bg-black min-h-screen flex items-center justify-center px-4 py-10">
        {/* FAQ container */}
        <div className="w-full max-w-3xl">
        <h2 className="text-xl md:text-3xl lg:text-3xl font-bold custom-gradient-text mb-8 text-center truncate">
  Frequently Asked Questions
</h2>
          <div
            className="space-y-4 p-6 rounded-lg "
            style={{
              background: 'linear-gradient(0deg, #FF0844 0%, #FF0844 70%, #FFB199 100%)',
            }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-black rounded-lg p-4  transition-transform duration-300 z-50${
                  openIndex === index ? 'transform scale-105' : ''
                }`}
              >
                <FAQItem
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => handleClick(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;


