import React from 'react';
import { Link } from 'react-router-dom';
import vinoImg from '../../imagenes_bebidas/vino.jpg';
import './bebidas.css';

const Bebidas = () => {
  const bebidasList = [
    { nombre: 'Vinos', ruta: '/vino', imagen: vinoImg },
  ];

  return (
    <div className="bebidas-container">
      <h1>Bebidas</h1>
      <div className="bebidas-grid">
        {bebidasList.map((bebidas, index) => (
          <Link to={bebidas.ruta} className="bebidas-card" key={index}>
            <img src={bebidas.imagen} alt={bebidas.nombre} className="bebidas-imagen" />
            <div className="bebidas-content">
              {bebidas.nombre}
            </div>
          </Link>
        ))}
      </div>

        <div className="link-container">
              <Link to="/restaurante" className="back-button">
                ← Volver a Restaurante
              </Link>
            </div>
    </div>
  );
};

export default Bebidas;
