import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sartenes.css';
import { getSartenes } from './sartenesService';
import { useTranslation } from 'react-i18next';

function Sartenes() {
  const [sartenesList, setSartenesList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchSartenes() {
      const data = await getSartenes();
      setSartenesList(data);
    }
    fetchSartenes();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <div className="sartenes-wrapper">
      <h2 className="sartenes-main-title">{t('comidas.sartenes')}</h2>

      <div className="sartenes-card">
        <ul className="sartenes-list">
          {sartenesList.map((sarten, index) => (
            <li key={index} className="sartenes-item">
              <div className="sartenes-info">
                <h3>{traducir(sarten)}</h3>
              </div>
              <div className="sartenes-price">{sarten.precio}€</div>
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

export default Sartenes;
