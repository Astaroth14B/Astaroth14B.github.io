import React from 'react';
import { motion } from 'framer-motion';

const CyberButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false 
}) => {
  const baseStyles = "relative font-orbitron font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeVariants = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const colorVariants = {
    primary: "bg-cyber-cyan text-cyber-dark border border-cyber-cyan hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]",
    secondary: "bg-transparent border-2 border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-cyber-dark hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]",
    outline: "bg-transparent border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]",
    danger: "bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`
        ${baseStyles}
        ${sizeVariants[size]}
        ${colorVariants[variant]}
        ${className}
        clip-diagonal
      `}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative z-10 block">{children}</span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
    </motion.button>
  );
};

export default CyberButton;
