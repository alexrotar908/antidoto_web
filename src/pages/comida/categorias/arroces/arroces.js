import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './arroces.css';
import { getArroces } from './arrocesService';
import { useTranslation } from 'react-i18next';

function Arroces() {
  const [arrocesList, setArrocesList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchArroces() {
      const arroces = await getArroces();
      setArrocesList(arroces);
    }

    fetchArroces();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <div className="arroces-wrapper">
      <h2 className="arroces-main-title">{t('comidas.arroces')}</h2>
      <h3 className="arroces-subtitle">({t('comidas.arrocesNota')})</h3>

      <div className="arroces-card">
        <ul className="arroces-list">
          {arrocesList.map((arroces, index) => (
            <li key={index} className="arroces-item">
              <div className="arroces-info">
                <h4>{traducir(arroces)}</h4>
              </div>
              <div className="arroces-price">{arroces.precio}€/pers.</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="back-button-inside">
        <Link to="/comida" className="back-button">
          ← {t('restaurante.volver')}
        </Link>
      </div>
    </div>
  );
}

export default Arroces;
