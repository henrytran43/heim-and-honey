import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Wir nutzen ein lustiges SVG für die Biene basierend auf dem hochgeladenen Bild!
const BeeSVG = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Flügel Hinten */}
    <ellipse cx="40" cy="35" rx="15" ry="25" fill="#f0e9dd" stroke="#382414" strokeWidth="3" transform="rotate(-30 40 35)"/>
    {/* Körper */}
    <ellipse cx="60" cy="55" rx="30" ry="20" fill="#d4a373" stroke="#382414" strokeWidth="3" transform="rotate(-20 60 55)"/>
    {/* Streifen */}
    <path d="M45 42 C40 50, 45 65, 50 68" stroke="#382414" strokeWidth="6" strokeLinecap="round"/>
    <path d="M55 40 C50 48, 55 60, 60 65" stroke="#382414" strokeWidth="7" strokeLinecap="round"/>
    <path d="M68 40 C62 48, 65 58, 70 60" stroke="#382414" strokeWidth="6" strokeLinecap="round"/>
    {/* Stachel */}
    <path d="M30 65 L22 70 L35 70 Z" fill="#382414" />
    {/* Flügel Vorne */}
    <ellipse cx="30" cy="45" rx="15" ry="25" fill="#ffffff" stroke="#382414" strokeWidth="3" transform="rotate(-60 30 45)"/>
    {/* Gesicht */}
    <circle cx="80" cy="50" r="2.5" fill="#382414"/>
    <path d="M85 55 Q88 58 90 55" stroke="#382414" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Fühler */}
    <path d="M75 40 Q70 30 78 25" stroke="#382414" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="78" cy="25" r="2" fill="#382414"/>
    <path d="M82 42 Q85 30 90 28" stroke="#382414" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="90" cy="28" r="2" fill="#382414"/>
  </svg>
);

const AnimatedBee = ({ delay = 0, startPos = {x: -100, y: 100}, size=1 }) => {
  return (
    <motion.div
      initial={{ 
        x: startPos.x, 
        y: startPos.y, 
        opacity: 0,
        scale: size
      }}
      animate={{ 
        x: [startPos.x, startPos.x + 300, startPos.x + 600, window.innerWidth + 100],
        y: [startPos.y, startPos.y - 100, startPos.y + 50, startPos.y - 100],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ 
        duration: 15, 
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        position: 'absolute',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <BeeSVG />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedBee;
