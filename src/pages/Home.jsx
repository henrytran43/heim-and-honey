import { motion } from 'framer-motion';
import AnimatedBee from '../components/AnimatedBee';
import MatchaTiramisuGraphic from '../components/MatchaTiramisuGraphic';
import { ChevronDown } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Floating Bees */}
      <AnimatedBee delay={0} startPos={{ x: -100, y: 150 }} size={1} />
      <AnimatedBee delay={5} startPos={{ x: -200, y: 400 }} size={0.7} />
      <AnimatedBee delay={10} startPos={{ x: -150, y: 600 }} size={1.2} />
      
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1 
            className="hero-title logo-text"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Willkommen bei Heim & Honey
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Dein Ort für exzellenten Kaffee, feinsten Matcha und süße Momente.
          </motion.p>
          
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p>Entdecke mehr</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="highlight-section">
        <div className="highlight-content">
          <motion.div 
            className="highlight-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Sooo Matcha Good</h2>
            <p>
              Probiere unseren Signature Drink: Den Matcha Tiramisu Latte. 
              Slightly sweet, rich in antioxidants und einfach unvergleichlich lecker.
              Dazu unsere besonderen Cookies – ein Traum!
            </p>
            <a href="/menu" className="btn-primary">Zur Speisekarte</a>
          </motion.div>
          <motion.div 
            className="highlight-image"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MatchaTiramisuGraphic />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
