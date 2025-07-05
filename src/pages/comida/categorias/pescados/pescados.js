import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pescados.css';
import { getPescados } from './pescadosService';
import { useTranslation } from 'react-i18next';

function Pescados() {
  const [pescadosList, setPescadosList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchPescados() {
      const pescados = await getPescados();
      setPescadosList(pescados);
    }

    fetchPescados();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <div className="pescados-wrapper">
      <h2 className="pescados-main-title">{t('comidas.pescados')}</h2>

      <div className="pescados-card">
        <ul className="pescados-list">
          {pescadosList.map((pescado, index) => (
            <li key={index} className="pescados-item">
              <div className="pescados-info">
                <h3>{traducir(pescado)}</h3>
              </div>
              <div className="pescados-price">{pescado.precio}€</div>
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

export default Pescados;
