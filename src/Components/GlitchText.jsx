import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className = '', size = 'lg', glow = true }) => {
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-7xl',
    xl: 'text-6xl md:text-8xl'
  };

  const baseClasses = `${sizeClasses[size]} font-bold font-orbitron tracking-widest`;

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <motion.span
        className={`relative z-10 text-white ${baseClasses}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.span>

      {/* Cyan glitch layer */}
      <motion.span
        className={`absolute top-0 left-0 z-0 text-cyber-cyan ${baseClasses} ${glow ? 'text-glow-cyan' : ''}`}
        initial={{ opacity: 0.7, x: 0, y: 0 }}
        animate={{ 
          opacity: [0.7, 0.5, 0.8, 0.3, 0.7],
          x: [-3, 2, -2, 3, 0],
          y: [0, -2, 1, -1, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        aria-hidden="true"
      >
        {text}
      </motion.span>

      {/* Magenta glitch layer */}
      <motion.span
        className={`absolute top-0 left-0 z-0 text-cyber-magenta ${baseClasses}`}
        initial={{ opacity: 0.5, x: 0, y: 0 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.4, 0.7, 0.5],
          x: [2, -3, 3, -2, 0],
          y: [0, 1, -2, 2, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.1
        }}
        aria-hidden="true"
      >
        {text}
      </motion.span>

      {/* Yellow accent layer */}
      <motion.span
        className={`absolute top-0 left-0 z-0 text-cyber-yellow ${baseClasses} opacity-30`}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ 
          opacity: [0, 0.3, 0, 0.2, 0],
          x: [-2, 1, -1, 2, 0],
          y: [1, 0, -1, 1, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.2
        }}
        aria-hidden="true"
      >
        {text}
      </motion.span>
    </div>
  );
};

export default GlitchText;
