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
    <section className="arroces-section">
      <h2 className="arroces-title">{t('comidas.arroces')}</h2>
      <h3 className="arroces-subtitle">({t('comidas.arrocesNota')})</h3>
      <ul className="arroces-list">
        {arrocesList.map((arroces, index) => (
          <li key={index} className="arroces-item">
            <div className="arroces-info">
              <h3>{traducir(arroces)}</h3>
            </div>
            <div className="arroces-price">{arroces.precio}€/pers.</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← {t('restaurante.volver')}</Link>
    </section>
  );
}

export default Arroces;
