import { motion } from 'framer-motion';
import BeeSwarmGraphic from '../components/BeeSwarmGraphic';
import './Philosophy.css';

const Philosophy = () => {
  return (
    <div className="philosophy-page">
      <div className="phil-container">
        <motion.div 
          className="phil-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="logo-text">Unsere Philosophie</h1>
          <p className="subtitle">Mehr als nur ein Café. Ein Stück Zuhause.</p>
        </motion.div>

        <div className="phil-content">
          <motion.div 
            className="phil-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2>Heim & Honey</h2>
            <p>
              Alles begann mit der Idee, einen Ort zu schaffen, an dem Qualität, Gemütlichkeit und 
              exzellenter Geschmack aufeinandertreffen. Unser Name <strong>Heim & Honey</strong> spiegelt 
              unsere Mission wider: Wir möchten, dass du dich bei uns wie zu Hause ("Heim") fühlst, während 
              wir dir die süßen Momente ("Honey") des Lebens versüßen – sei es durch unsere handgemachten 
              Cookies oder eine perfekte Tasse Matcha Latte.
            </p>
            <p>
              Unsere kleine Biene, unser Markenzeichen, steht für Fleiß, Naturverbundenheit und Qualität. 
              Genau wie sie wählen wir unsere Zutaten mit größter Sorgfalt aus. Unser Matcha kommt direkt 
              aus Japan und unsere Kaffeebohnen werden fair gehandelt und schonend geröstet.
            </p>
          </motion.div>

          <motion.div 
            className="phil-image-placeholder"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <BeeSwarmGraphic />
          </motion.div>
        </div>

        <motion.div 
          className="phil-quote"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote>"Sooo Matcha Good – das ist nicht nur ein Spruch, das ist ein Versprechen."</blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
