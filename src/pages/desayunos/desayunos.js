import React from 'react';
import { Link } from 'react-router-dom';
import cafeImg from '../../imagenes_desayuno/cafe.jpg';
import dulceImg from '../../imagenes_desayuno/dulces.jpg';
import meriendaImg from '../../imagenes_desayuno/merienda.jpg';
import './desayunos.css';

const Desayunos = () => {
  const desayunosList = [
    { nombre: 'Cafés', ruta: '/cafe', imagen: cafeImg },
    { nombre: 'Dulces y salados', ruta: '/dulces_salados', imagen: dulceImg },
    { nombre: 'Meriendas', ruta: '/merienda', imagen: meriendaImg },
  ];

  return (
    <div className="desayunos-container">
      <h1>Desayunos & Meriendas</h1>
      <div className="desayunos-grid">
        {desayunosList.map((desayunos, index) => (
          <Link to={desayunos.ruta} className="desayunos-card" key={index}>
            <img src={desayunos.imagen} alt={desayunos.nombre} className="desayunos-imagen" />
            <div className="desayunos-content">
              {desayunos.nombre}
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

export default Desayunos;
