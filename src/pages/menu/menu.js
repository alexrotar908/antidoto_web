import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';  // No olvides importar el CSS
import croquetasImg from '../../imagenes/croquetas.jpg';
import primeroImg from '../../imagenes/primeros_platos.jpg';
import segundoImg from '../../imagenes/segundo_plato.jpg';
import postresImg from '../../imagenes/postre.png';
import bebidasImg from '../../imagenes/bebidas.jpg';

function Menu() {
  return (
    <section className="menu-section">
      <h2 className="menu-title">Nuestro Menú</h2>
      <div className="menu-categories">
        <Link to="/menu/tapas" className="menu-card">
         <img src={croquetasImg} alt="Tapas" /> Tapas
        </Link>
        <Link to="/menu/primer_plato" className="menu-card">
          <img src={primeroImg} alt="primero" />Primer Plato</Link>
        <Link to="/menu/segundo_plato" className="menu-card">
          <img src={segundoImg} alt="segundo" />Segundo Plato</Link>
        <Link to="/menu/postres" className="menu-card">
          <img src={postresImg} alt="postres" />Postres</Link>
        <Link to="/menu/bebidas" className="menu-card">
          <img src={bebidasImg} alt="bebidas" />Bebidas</Link>
      </div>
    </section>
  );
}

export default Menu;

