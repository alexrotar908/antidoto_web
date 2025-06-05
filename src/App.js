import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Tapas from './pages/menu/apartados/tapas/tapas';
import PrimerPlato from './pages/menu/apartados/primer_plato/primer_plato'; 
import SegundoPlato from './pages/menu/apartados/segundo_plato/segundo_plato';
import Postres from './pages/menu/apartados/postres/postres';
import Beibidas from './pages/menu/apartados/bebidas/bebidas';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/menu/tapas" element={<Tapas />} />
            <Route path="/menu/primer_plato" element={<PrimerPlato />} />
            <Route path="/menu/segundo_plato" element={<SegundoPlato />} />
            <Route path="/menu/postres" element={<Postres />} />
            <Route path="/menu/bebidas" element={<Beibidas />} />

          </Routes>
        </main>
        <footer className="footer">
             <div className="footer-left"> &copy; {new Date().getFullYear()} Antídoto · Madrid</div>
             <div className="footer-right">Sitio web realizado por <span className="autor-resaltado">Ai Creations Lex</span></div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
