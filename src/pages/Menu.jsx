import { motion } from 'framer-motion';
import './Menu.css';

const menuData = {
  getraenke: {
    title: "Getränke",
    categories: [
      {
        name: "Kaffee Klassiker",
        items: [
          { name: "Espresso", price: "2,20" },
          { name: "Doppio", price: "2,80" },
          { name: "Cappuccino", price: "4,20" },
          { name: "Flat White", price: "4,70" },
          { name: "Latte Macchiato", price: "4,50" },
        ]
      },
      {
        name: "Creative Specials",
        items: [
          { name: "„Matchamisu“", desc: "Matcha mit Tiramisu On Top deiner Wahl", price: "8,80" },
          { name: "„Lattemisu“", desc: "Latte mit Tiramisu On Top deiner Wahl", price: "7,80" },
          { name: "Vietnamese Egg Drop Coffee", desc: "Vietnamesischer Cafe mit einer Creme aus Eigelb gewonnen", price: "6,00" },
        ]
      },
      {
        name: "Matcha Bar",
        items: [
          { name: "Matcha Latte (Heiß)", price: "4,90" },
          { name: "Iced Matcha Latte", price: "4,90" },
          { name: "Kokos Matcha Latte", price: "5,90" },
          { name: "Pistazien Matcha Latte", price: "6,40" },
        ]
      },
      {
        name: "Cold & Iced",
        items: [
          { name: "Cold Brew", price: "3,30" },
          { name: "Iced Latte / Cappuccino", price: "4,90 / 3,90" },
        ]
      },
      {
        name: "Softgetränke",
        items: [
          { name: "Fritz Kola / Limo", desc: "Fanta, Kola", price: "4,20" },
          { name: "Stuggi Schorle", desc: "alle Geschmäcker deiner Wahl", price: "4,00" },
          { name: "Viva Con Agua", desc: "Laut und Leise", price: "4,00" },
        ]
      }
    ]
  },
  cookies: {
    title: "Unsere Cookies",
    categories: [
      {
        name: "Die Besonderen",
        items: [
          { name: "Pandan Cookie", desc: "Asian Pandan Cake Style Cookie", price: "5,50" },
          { name: "Pistachio Butter Cookie", desc: "veredelt mit türkischer Pistazie", price: "5,50" },
          { name: "Rosa-Poco Cookie", desc: "Strawberry & White Chocolate", price: "5,50" },
          { name: "Matcha White Chocolate", desc: "Japanischer Matcha & White Chocolate", price: "5,50" },
        ]
      },
      {
        name: "Klassiker",
        items: [
          { name: "Chocolate-Chip Cookie", price: "4,00" },
          { name: "Double Choc", price: "4,00" },
          { name: "Chocolate Puddle", price: "4,00" },
          { name: "Macadamia Cookie", price: "4,00" },
        ]
      }
    ]
  }
};

const MenuSection = ({ data, delay }) => (
  <motion.div 
    className="menu-section"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    <h1 className="menu-main-title logo-text">{data.title}</h1>
    <div className="menu-grid">
      {data.categories.map((category, idx) => (
        <div key={idx} className="menu-category">
          <h2 className="category-title">{category.name}</h2>
          <ul className="item-list">
            {category.items.map((item, idy) => (
              <li key={idy} className="menu-item-row">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  {item.desc && <span className="item-desc">{item.desc}</span>}
                </div>
                <div className="item-price-info">
                  <div className="item-dots"></div>
                  <span className="item-price">{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </motion.div>
);

const Menu = () => {
  return (
    <div className="menu-page">
      <div className="menu-container">
        <MenuSection data={menuData.getraenke} delay={0.2} />
        <MenuSection data={menuData.cookies} delay={0.4} />
      </div>
    </div>
  );
};

export default Menu;
