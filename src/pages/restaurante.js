import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import desayunoImg from '../imagenes_desayuno/churros.jpg';
import comidaImg from '../imagenes/comida.jpg';
import bocadilloImg from '../imagenes_bocadillo/bocadillo.jpg';
import menuImg from '../imagenes_menu/menu_del_dia.png';
import bebidaImg from '../imagenes_bebidas/bebida.jpg';

import './restaurante.css';

const Restaurante = () => {
  const { t } = useTranslation();

  // Organizar por filas
  const filas = [
    [
      { nombre: t('restaurante.desayuno'), ruta: '/desayunos-meriendas', imagen: desayunoImg },
      { nombre: t('restaurante.menuDia'), ruta: '/menu_del_dia', imagen: menuImg },
      { nombre: t('restaurante.tostasBocadillos'), ruta: '/tostas_bocadillos', imagen: bocadilloImg },
    ],
    [
      { nombre: t('restaurante.comidas'), ruta: '/comida', imagen: comidaImg },
      { nombre: t('restaurante.bebidas'), ruta: '/bebidas', imagen: bebidaImg },
    ]
  ];

  return (
    <div className="restaurante-container">
      <h1 style={{ color: '#357ABD' }}>{t('restaurante.title')}</h1>

      <div className="restaurante-grid">
        {filas.map((fila, filaIndex) => (
          <div className="restaurante-row" key={filaIndex}>
            {fila.map((item, index) => (
              <Link to={item.ruta} className="restaurante-card" key={index}>
                <img src={item.imagen} alt={item.nombre} className="restaurante-imagen" />
                <div className="restaurante-content">{item.nombre}</div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurante;
