import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ensaladas.css';
import { getEnsaladas } from './ensaladasService';
import { useTranslation } from 'react-i18next';

function Ensaladas() {
  const [ensaladasList, setEnsaladasList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchEnsaladas() {
      const ensaladas = await getEnsaladas();
      setEnsaladasList(ensaladas);
    }

    fetchEnsaladas();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <div className="ensaladas-wrapper">
      <h2 className="ensaladas-main-title">{t('comidas.ensaladas')}</h2>

      <div className="ensaladas-card">
        <ul className="ensaladas-list">
          {ensaladasList.map((ensalada, index) => (
            <li key={index} className="ensaladas-item">
              <div className="ensaladas-info">
                <h3>{traducir(ensalada)}</h3>
              </div>
              <div className="ensaladas-price">{ensalada.precio}€</div>
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

export default Ensaladas;
