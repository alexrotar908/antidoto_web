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

  const momentoFotos = [
    require('../imagenes_momento/foto1.png'),
    require('../imagenes_momento/foto2.png'),
    require('../imagenes_momento/foto3.png'),
    require('../imagenes_momento/foto4.png'),
    require('../imagenes_momento/foto5.png'),
    require('../imagenes_momento/foto6.png'),
  ];

  return (
    <div className="restaurante-container">
      <h1>{t('restaurante.title')}</h1>

      <div className="restaurante-grid">
        <div className="restaurante-row">
          {restauranteList.slice(0, 3).map((restaurante, index) => (
            <Link to={restaurante.ruta} className="restaurante-card" key={index}>
              <img src={restaurante.imagen} alt={restaurante.nombre} className="restaurante-imagen" />
              <div className="restaurante-content">{restaurante.nombre}</div>
            </Link>
          ))}
        </div>
        <div className="restaurante-row">
          {restauranteList.slice(3).map((restaurante, index) => (
            <Link to={restaurante.ruta} className="restaurante-card" key={index + 3}>
              <img src={restaurante.imagen} alt={restaurante.nombre} className="restaurante-imagen" />
              <div className="restaurante-content">{restaurante.nombre}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Momento Antídoto */}
      <div className="momento-antidoto">
        <h2>{t('restaurante.momentoTitulo')}</h2>
        <p className="momento-texto">{t('restaurante.momentoTexto')}</p>
        <div className="momento-galeria">
          {momentoFotos.map((foto, index) => (
            <img src={foto} alt={`Momento ${index + 1}`} key={index} className="momento-imagen" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurante;
