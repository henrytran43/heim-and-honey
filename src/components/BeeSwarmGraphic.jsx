import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './BeeSwarmGraphic.css';

// Kompakte Version der Biene für den Schwarm
const MiniBeeSVG = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="35" rx="15" ry="25" fill="#f0e9dd" stroke="#382414" strokeWidth="3" transform="rotate(-30 40 35)"/>
    <ellipse cx="60" cy="55" rx="30" ry="20" fill="#d4a373" stroke="#382414" strokeWidth="3" transform="rotate(-20 60 55)"/>
    <path d="M45 42 C40 50, 45 65, 50 68" stroke="#382414" strokeWidth="6" strokeLinecap="round"/>
    <path d="M55 40 C50 48, 55 60, 60 65" stroke="#382414" strokeWidth="7" strokeLinecap="round"/>
    <path d="M68 40 C62 48, 65 58, 70 60" stroke="#382414" strokeWidth="6" strokeLinecap="round"/>
    <path d="M30 65 L22 70 L35 70 Z" fill="#382414" />
    <ellipse cx="30" cy="45" rx="15" ry="25" fill="#ffffff" stroke="#382414" strokeWidth="3" transform="rotate(-60 30 45)"/>
    <circle cx="80" cy="50" r="2.5" fill="#382414"/>
    <path d="M75 40 Q70 30 78 25" stroke="#382414" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M82 42 Q85 30 90 28" stroke="#382414" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

const SwarmBee = ({ delay, duration, path, size, flip }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        x: path.x,
        y: path.y
      }}
      transition={{ 
        duration: duration, 
        delay: delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.1, 0.9, 1] // fadeIn, fly, fadeOut
      }}
      style={{
        position: 'absolute',
        transform: `scale(${size}) ${flip ? 'scaleX(-1)' : ''}`,
        zIndex: 10,
        pointerEvents: 'none',
        left: 0,
        top: 0
      }}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <MiniBeeSVG />
      </motion.div>
    </motion.div>
  );
};

const BeeSwarmGraphic = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Verschiedene Pfade für die Bienen innerhalb der Container-Box
  const beesConfigs = [
    { id: 1, delay: 0, duration: 12, size: 1.2, flip: false, path: { x: [-50, 100, 250, 400], y: [100, 50, 150, 80] } },
    { id: 2, delay: 2, duration: 15, size: 0.8, flip: true, path: { x: [400, 200, 50, -50], y: [250, 200, 280, 150] } },
    { id: 3, delay: 5, duration: 10, size: 1.5, flip: false, path: { x: [-20, 150, 280, 450], y: [200, 250, 100, 220] } },
    { id: 4, delay: 1, duration: 18, size: 0.9, flip: true, path: { x: [450, 300, 150, -20], y: [80, 120, 50, 100] } },
    { id: 5, delay: 7, duration: 14, size: 1.1, flip: false, path: { x: [0, 120, 200, 350], y: [300, 280, 200, 250] } },
    { id: 6, delay: 4, duration: 11, size: 0.7, flip: true, path: { x: [380, 250, 100, -30], y: [150, 50, 180, 120] } },
  ];

  return (
    <div className="bee-swarm-container">
      {/* Zentraler Kaffee/Matcha-Cup als "Fokus" der Bienen */}
      <motion.div 
        className="central-cafe-cup"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tasse */}
          <path d="M20 30 L80 30 C80 60 70 85 50 85 C30 85 20 60 20 30 Z" fill="#eaddc0" stroke="#382414" strokeWidth="4"/>
          {/* Henkel */}
          <path d="M80 40 C95 40 95 65 80 65" fill="none" stroke="#382414" strokeWidth="4"/>
          {/* Matcha/Cafe Füllung */}
          <ellipse cx="50" cy="30" rx="30" ry="10" fill="#557a46"/>
          {/* Tassenrand */}
          <ellipse cx="50" cy="30" rx="30" ry="10" fill="none" stroke="#382414" strokeWidth="4"/>
          {/* Dampf */}
          <path d="M40 15 Q35 5 45 -5" stroke="#382414" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="4 4" opacity="0.6"/>
          <path d="M60 15 Q65 5 55 -5" stroke="#382414" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="4 4" opacity="0.6"/>
          {/* Heim & Honey Logo Mini */}
          <text x="50" y="60" fontFamily="Caveat, cursive" fontSize="14" fill="#382414" textAnchor="middle">H&H</text>
        </svg>
      </motion.div>

      {/* Fliegende Bienen */}
      {mounted && beesConfigs.map(bee => (
        <SwarmBee key={bee.id} {...bee} />
      ))}
      
      {/* Sanfter Hintergund Glow */}
      <div className="swarm-glow"></div>
    </div>
  );
};

export default BeeSwarmGraphic;
