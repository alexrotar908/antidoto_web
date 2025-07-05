import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './entrantes.css';
import { getEntrantes } from './entrantesService';
import { useTranslation } from 'react-i18next';

function Tapas() {
  const [entrantesList, setEntrantesList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchEntrantes() {
      const entrantes = await getEntrantes();
      setEntrantesList(entrantes);
    }

    fetchEntrantes();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <div className="entrantes-wrapper">
      <h2 className="entrantes-main-title">{t('comidas.entrantes')}</h2>

      <div className="entrantes-card">
        <ul className="entrantes-list">
          {entrantesList.map((entrante) => (
            <li key={entrante.id} className="entrantes-item">
              {entrante.imagen && (
                <img
                  src={entrante.imagen}
                  alt={traducir(entrante)}
                  className="entrantes-image"
                />
              )}
              <div className="entrantes-info">
                <h3>{traducir(entrante)}</h3>
                {entrante.descripcion && <p>{entrante.descripcion}</p>}
              </div>
              <div className="entrantes-price">
                {entrante.precio}€
                {entrante.por_unidad && ' /ud.'}
                {entrante.precio_media && (
                  <span> / {t('comun.media')}: {entrante.precio_media}€</span>
                )}
              </div>
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

export default Tapas;
