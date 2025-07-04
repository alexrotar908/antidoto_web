import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './refrescos.css'; // Asegúrate de que esté en la misma carpeta
import { getRefrescos } from './refrescoService';
import { useTranslation } from 'react-i18next';

function Refrescos() {
  const [refrescosList, setRefrescosList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchData() {
      const refrescos = await getRefrescos();
      setRefrescosList(refrescos);
    }

    fetchData();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo || item.tipo : item.tipo_en || item.tipo;

  return (
    <section className="refrescos-section">
      <h2 className="refrescos-main-title">{t('bebidas.refrescos')}</h2>

      <div className="refrescos-cards-container">
        <div className="refrescos-card">
          <ul className="refrescos-list">
            {refrescosList.map((item, index) => (
              <li key={index} className="refrescos-item">
                <div className="refrescos-info">
                  <h4>{traducir(item)}</h4>
                </div>
                <div className="refrescos-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/bebidas" className="back-button">← {t('restaurante.volver')}</Link>
    </section>
  );
}

export default Refrescos;
