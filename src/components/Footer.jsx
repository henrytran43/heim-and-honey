import { Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2 className="logo-text">Heim & Honey</h2>
          <p>Sooo Matcha Good.</p>
        </div>
        
        <div className="footer-section hours">
          <h3>Öffnungszeiten</h3>
          <p>Mo - Fr: 08:00 - 18:00</p>
          <p>Sa - So: 09:00 - 19:00</p>
        </div>

        <div className="footer-section social">
          <h3>Folge uns</h3>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Heim & Honey. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;
