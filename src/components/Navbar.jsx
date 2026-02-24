import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menü', path: '/menu' },
    { name: 'Philosophie', path: '/philosophy' },
    { name: 'Visit Us', path: '/visit' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-text" onClick={() => setIsOpen(false)}>
          Heim & Honey
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
