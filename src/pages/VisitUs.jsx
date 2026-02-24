import { motion } from 'framer-motion';
import { MapPin, Clock, Coffee, Wifi, Heart } from 'lucide-react';
import './VisitUs.css';

const VisitUs = () => {
  return (
    <div className="visit-page">
      <div className="visit-container">
          <motion.div 
            className="visit-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="logo-text">Komm uns besuchen</h1>
            <p className="subtitle">Wir freuen uns auf dich!</p>
          </motion.div>

          <div className="visit-split-layout">
            
            {/* Linke Seite: Das neue Aquarell-Bild */}
            <motion.div 
              className="visit-image-side"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <video 
                src="/Videoerstellung_Aus_Bildern.mp4" 
                className="visit-watercolor-image visit-watercolor-video"
                autoPlay 
                loop 
                muted 
                playsInline
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="visit-image-fallback" style={{ display: 'none' }}>
                <p>Bitte speichere dein Video als <strong>Videoerstellung_Aus_Bildern.mp4</strong> im Ordner public ab!</p>
              </div>
            </motion.div>

            {/* Rechte Seite: Content (Adresse, Zeiten, Benefits) */}
            <div className="visit-content-side">
              
              <motion.div 
                className="info-card location-info"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
            <h2 className="section-title">Standort & Zeiten</h2>
            <div className="title-divider"></div>
            
            <div className="location-content-wrapper">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div className="info-text-block">
                  <h3>Adresse</h3>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" />
                <div className="info-text-block">
                  <h3>Öffnungszeiten</h3>
                  <p><strong>Montag - Freitag:</strong> <span style={{ whiteSpace: 'nowrap' }}>08:00 - 18:00 Uhr</span></p>
                  <p><strong>Samstag - Sonntag:</strong> <span style={{ whiteSpace: 'nowrap' }}>09:00 - 19:00 Uhr</span></p>
                </div>
              </div>
            </div>
          </motion.div>

              <motion.div 
                className="info-card benefits-info"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
            <h2>Benefits bei Heim & Honey</h2>
            
            <ul className="benefits-list">
              <li>
                <Coffee className="benefit-icon" />
                <div>
                  <strong>Premium Qualität</strong>
                  <p>Von unseren Kaffeebohnen bis zum originalen japanischen Matcha.</p>
                </div>
              </li>
              <li>
                <Wifi className="benefit-icon" />
                <div>
                  <strong>Kostenloses WLAN</strong>
                  <p>Perfekt zum Arbeiten, Lernen oder Entspannen.</p>
                </div>
              </li>
              <li>
                <Heart className="benefit-icon" />
                <div>
                  <strong>Gemütliches Ambiente</strong>
                  <p>Warmes Beige, sanftes Braun – eine echte Oase der Ruhe.</p>
                </div>
              </li>
            </ul>
              </motion.div>

            </div> {/* Ende Content-Side */}
          </div> {/* Ende Split Layout */}
      </div>
    </div>
  );
};

export default VisitUs;
