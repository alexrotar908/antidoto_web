import React from 'react';
import { Link } from 'react-router-dom';
import './comida.css';  
import entrantesImg from '../../imagenes/berenjena.jpg';
import huevosRotosImg from '../../imagenes/huevos-rotos.jpg';
import ensaladaImg from '../../imagenes/ensalada.jpg';
import pescadoImg from '../../imagenes/marisco.jpg';
import carnesImg from '../../imagenes/carne.jpg';
import arrocesImg from '../../imagenes/paella_mixta.jpg';
import pecarImg from '../../imagenes/tarta_queso.jpg';
import { useTranslation } from 'react-i18next';

function Comida() {
  const { t } = useTranslation();

  return (
    <section className="comida-section">
      <h2 className="comida-title">{t('restaurante.title')}</h2>
      <div className="comida-categories">
        <Link to="/comida/entrantes" className="comida-card">
          <img src={entrantesImg} alt="entrantes" /> {t('comidas.entrantes')}
        </Link>
        <Link to="/comida/sartenes" className="comida-card">
          <img src={huevosRotosImg} alt="sartenes" /> {t('comidas.sartenes')}
        </Link>
        <Link to="/comida/ensaladas" className="comida-card">
          <img src={ensaladaImg} alt="ensaladas" /> {t('comidas.ensaladas')}
        </Link>
        <Link to="/comida/pescados" className="comida-card">
          <img src={pescadoImg} alt="pescados" /> {t('comidas.pescados')}
        </Link>
        <Link to="/comida/carnes" className="comida-card">
          <img src={carnesImg} alt="carnes" /> {t('comidas.carnes')}
        </Link>
        <Link to="/comida/arroces" className="comida-card">
          <img src={arrocesImg} alt="arroces" /> {t('comidas.arroces')}
        </Link>
        <Link to="/comida/pecar" className="comida-card">
          <img src={pecarImg} alt="pecar" /> {t('comidas.pecar')}
        </Link>
        <Link to="/restaurante" className="back-button">
          ← {t('restaurante.volver')}
        </Link>
      </div>
    </section>
  );
}

export default Comida;
