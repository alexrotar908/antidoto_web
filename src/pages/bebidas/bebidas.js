import React from 'react';
import { Link } from 'react-router-dom';
import vinoImg from '../../imagenes_bebidas/vino.jpg';
import cervezaImg from '../../imagenes_bebidas/cerveza.jpg';
import refrescoImg from '../../imagenes_bebidas/refrescoos.jpg';
import './bebidas.css';
import { useTranslation } from 'react-i18next';

const Bebidas = () => {
  const { t } = useTranslation();

  const bebidasList = [
    { nombre: t('bebidas.vinos'), ruta: '/vino', imagen: vinoImg },
    { nombre: t('bebidas.cervezas'), ruta: '/cervezas', imagen: cervezaImg },
    { nombre: t('bebidas.refrescos'), ruta: '/refrescos', imagen: refrescoImg },

  ];

  return (
    <div className="bebidas-container">
      <h1>{t('bebidas.title')}</h1>
      <div className="bebidas-grid">
        {bebidasList.map((bebida, index) => (
          <Link to={bebida.ruta} className="bebidas-card" key={index}>
            <img src={bebida.imagen} alt={bebida.nombre} className="bebidas-imagen" />
            <div className="bebidas-content">
              {bebida.nombre}
            </div>
          </Link>
        ))}
      </div>

      <div className="link-container">
        <Link to="/restaurante" className="back-button">
          ← {t('restaurante.volver')}
        </Link>
      </div>
    </div>
  );
};

export default Bebidas;
