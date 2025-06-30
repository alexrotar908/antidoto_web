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

  const restauranteList = [
    { nombre: t('restaurante.desayuno'), ruta: '/desayunos-meriendas', imagen: desayunoImg },
    { nombre: t('restaurante.menuDia'), ruta: '/menu_del_dia', imagen: menuImg },
    { nombre: t('restaurante.comidas'), ruta: '/comida', imagen: comidaImg },
    { nombre: t('restaurante.tostasBocadillos'), ruta: '/tostas_bocadillos', imagen: bocadilloImg },
    { nombre: t('restaurante.bebidas'), ruta: '/bebidas', imagen: bebidaImg },
  ];

  return (
    <div className="restaurante-container">
      <h1>{t('restaurante.title')}</h1>
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
