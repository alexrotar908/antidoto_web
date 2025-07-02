import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cafeImg from '../../imagenes_desayuno/cafe.jpg';
import dulceImg from '../../imagenes_desayuno/dulces.jpg';
import meriendaImg from '../../imagenes_desayuno/merienda.jpg';
import './desayunos.css';

const Desayunos = () => {
  const { t } = useTranslation();

  const desayunosList = [
    { nombre: t('desayunos.cafe'), ruta: '/cafe', imagen: cafeImg },
    { nombre: t('desayunos.dulces_salados'), ruta: '/dulces_salados', imagen: dulceImg },
    { nombre: t('desayunos.merienda'), ruta: '/merienda', imagen: meriendaImg },
  ];

  return (
    <div className="desayunos-container">
      
      <div className="link-container">
        <Link to="/restaurante" className="back-button">
          ←
        </Link>
      </div>

      <h1>{t('desayunos.title')}</h1>
      <div className="desayunos-grid">
        {desayunosList.map((desayuno, index) => (
          <Link to={desayuno.ruta} className="desayunos-card" key={index}>
            <img src={desayuno.imagen} alt={desayuno.nombre} className="desayunos-imagen" />
            <div className="desayunos-content">
              {desayuno.nombre}
            </div>
          </Link>
        ))}
      </div>

      <div className="momento-desayuno">
        <h2>{t('desayunos.momentoTitulo')}</h2>
          <p className="momento-desayuno-texto">
            {t('desayunos.momentoTexto')}
          </p>
      </div>
    </div>
  );
};

export default Desayunos;
