import React from 'react';
import { Link } from 'react-router-dom';
import './comida.css';  
import entrantesImg from '../../imagenes/croquetas.jpg';
import huevosRotosImg from '../../imagenes/huevos-rotos.jpg';
import ensaladaImg from '../../imagenes/ensalada_griega.jpg';
import pescadoImg from '../../imagenes/pescado.png';
import carnesImg from '../../imagenes/entrecot_tronchado.jpg';
import arrocesImg from '../../imagenes/paella_mixta.jpg';
import pecarImg from '../../imagenes/tarta_queso.jpg';

function Comida() {
  return (
    <section className="comida-section">

      <h2 className="comida-title">Restaurante</h2>
      <div className="comida-categories">
        <Link to="/comida/entrantes" className="comida-card">
         <img src={entrantesImg} alt="entrantes" /> Entrantes
        </Link>
        <Link to="/comida/sartenes" className="comida-card">
          <img src={huevosRotosImg} alt="sartenes" />Sartenes y Cuchara</Link>
        <Link to="/comida/ensaladas" className="comida-card">
          <img src={ensaladaImg} alt="ensaladas" />Ensaladas</Link>
        <Link to="/comida/pescados" className="comida-card">
          <img src={pescadoImg} alt="pescados" />Pescados y Mariscos</Link>
          <Link to="/comida/carnes" className="comida-card">
          <img src={carnesImg} alt="carnes" />Carnes</Link>
          <Link to="/comida/arroces" className="comida-card">
          <img src={arrocesImg} alt="arroces" />Arroces</Link>
          <Link to="/comida/pecar" className="comida-card">
          <img src={pecarImg} alt="pecar" />Pecar es bueno</Link>
          <Link to="/restaurante" className="back-button">← Volver a Restaurante</Link>
      </div>
    </section>
  );
}

export default Comida;


