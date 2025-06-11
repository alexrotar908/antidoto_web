import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/menu">Menú</Link>
      <Link to="/reservas">Reservas</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/sobre-nosotros">Sobre Nosotros</Link>
    </nav>
  );
}

export default Navbar;
