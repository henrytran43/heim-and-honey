import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Philosophy from './pages/Philosophy';
import VisitUs from './pages/VisitUs';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/visit" element={<VisitUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
