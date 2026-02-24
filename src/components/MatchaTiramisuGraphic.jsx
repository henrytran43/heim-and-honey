import { motion } from 'framer-motion';
import './MatchaTiramisuGraphic.css';

const CloudSVG = () => (
  <svg width="150" height="100" viewBox="0 0 120 80" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.1))' }}>
    <path d="M40 50 A 20 20 0 0 1 40 10 A 30 30 0 0 1 90 20 A 20 20 0 0 1 90 60 Z" />
    <rect x="35" y="30" width="60" height="30" rx="15" />
  </svg>
);

const MatchaTiramisuGraphic = () => {
  return (
    <div className="matcha-image-container">
      {/* Das echte Bild wird hier geladen */}
      <img 
        src="/Matchamisu Poster.png" 
        alt="Matcha Tiramisu Latte" 
        className="real-matcha-image"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      {/* Fallback, falls das Bild noch nicht eingefügt wurde */}
      <div className="image-fallback" style={{ display: 'none' }}>
        <p>Bitte speichere dein Bild als <strong>matcha-poster.jpg</strong> im Ordner <strong>public</strong> ab!</p>
      </div>

      {/* Animierte Wolken */}
      <motion.div 
        className="cloud cloud-1"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: [ -50, 20, -50 ], opacity: 1 }}
        transition={{ x: { duration: 15, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 1 } }}
      >
        <CloudSVG />
      </motion.div>

      <motion.div 
        className="cloud cloud-2"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: [ 50, -30, 50 ], opacity: 1 }}
        transition={{ x: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }, opacity: { duration: 1, delay: 0.5 } }}
      >
        <CloudSVG />
      </motion.div>
      
      <motion.div 
        className="cloud cloud-3"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: [ -30, 40, -30 ], opacity: 1 }}
        transition={{ x: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }, opacity: { duration: 1, delay: 1 } }}
      >
        <CloudSVG />
      </motion.div>
    </div>
  );
};

export default MatchaTiramisuGraphic;
