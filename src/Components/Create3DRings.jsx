import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/Pranish.jpg';

const Create3DRings = ({ size = 'lg' }) => {
  const sizes = {
    sm: 'w-32 h-32 md:w-40 md:h-40',
    md: 'w-48 h-48 md:w-64 md:h-64',
    lg: 'w-64 h-64 md:w-96 md:h-96'
  };

  const ringVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  const reverseRingVariants = {
    rotate: {
      rotate: -360,
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      variants={floatingVariants}
      animate="float"
      className={`relative ${sizes[size]} flex items-center justify-center perspective-1000`}
    >
      {/* Central glow pulse */}
      <motion.div
        className="absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      ></motion.div>

      {/* Ring 1 - Cyan (outer, slowest) */}
      <motion.div
        variants={ringVariants}
        animate="rotate"
        className="absolute w-full h-full border-2 border-cyber-cyan/60 rounded-full shadow-[0_0_20px_rgba(0,243,255,0.4),inset_0_0_20px_rgba(0,243,255,0.2)]"
      >
        {/* Dot indicator */}
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyber-cyan rounded-full transform -translate-x-1/2 shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
      </motion.div>

      {/* Ring 2 - Magenta (middle) */}
      <motion.div
        variants={reverseRingVariants}
        animate="rotate"
        className="absolute w-3/4 h-3/4 border-2 border-cyber-magenta/60 rounded-full shadow-[0_0_20px_rgba(255,0,255,0.4),inset_0_0_20px_rgba(255,0,255,0.2)]"
      >
        {/* Dot indicator */}
        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-cyber-magenta rounded-full shadow-[0_0_10px_rgba(255,0,255,0.8)]"></div>
      </motion.div>

      {/* Ring 3 - Yellow (inner, dashed) */}
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute w-1/2 h-1/2 border-2 border-dashed border-cyber-yellow/50 rounded-full shadow-[0_0_15px_rgba(243,255,0,0.3)]"
      >
        {/* Dot indicator */}
        <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-cyber-yellow rounded-full transform -translate-x-1/2 shadow-[0_0_10px_rgba(243,255,0,0.8)]"></div>
      </motion.div>

      {/* Central portrait placeholder */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-cyber-cyan/40 bg-gradient-to-br from-cyber-cyan/10 to-cyber-magenta/10 flex items-center justify-center overflow-hidden"
      >
        <img
          src={profileImg}
          alt="Pranish Acharya"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Tech accents */}
      <motion.div
        className="absolute top-8 left-8 w-1 h-8 border-l-2 border-t-2 border-cyber-cyan/50"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-8 right-8 w-1 h-8 border-r-2 border-b-2 border-cyber-magenta/50"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      ></motion.div>
    </motion.div>
  );
};

export default Create3DRings;
