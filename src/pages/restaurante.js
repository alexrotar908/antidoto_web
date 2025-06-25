// src/pages/Restaurante.js
import React from 'react';
import { Link } from 'react-router-dom';
import desayunoImg from '../imagenes_desayuno/churros.jpg';
import comidaImg from '../imagenes/comida.jpg';
import bocadilloImg from '../imagenes_bocadillo/bocadillo.jpg';
import menuImg from '../imagenes_menu/menu_del_dia.png';
import bebidaImg from '../imagenes_bebidas/bebida.jpg';
import './restaurante.css';

const Restaurante = () => {
  const restauranteList = [
    { nombre: 'Desayunos y meriendas', ruta: '/desayunos-meriendas', imagen: desayunoImg },
    { nombre: 'Menú del día', ruta: '/menu_del_dia', imagen: menuImg },
    { nombre: 'Comidas', ruta: '/comida', imagen: comidaImg },
    { nombre: 'Tostas y Bocadillos', ruta: '/tostas_bocadillos' , imagen: bocadilloImg },
    { nombre: 'Bebidas', ruta: '/bebidas' , imagen: bebidaImg },
  ];

  return (
    <div className="restaurante-container">
      <h1>Restaurante</h1>
      <div className="restaurante-grid">
        {restauranteList.map((restaurante, index) => (
          <Link to={restaurante.ruta} className="restaurante-card" key={index}>
            <img src={restaurante.imagen} alt={restaurante.nombre} className="restaurante-imagen" />
            <div className="restaurante-content">
              {restaurante.nombre}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurante;
