import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Inicio </NavLink>
      <NavLink to="/restaurante">Restaurante</NavLink>
      <NavLink to="/reservas">Reservas</NavLink>
      <NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink>
    </nav>
  );
}

export default Navbar;
