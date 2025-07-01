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
        const sartenes_cuchara = await getSartenes();
        setSartenesList(sartenes_cuchara);
      }
  
      fetchSartenes();
    }, []);

    const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <section className="sartenes-section">
      <h2 className="sartenes-title">{t('comidas.sartenes')}</h2>
      <ul className="sartenes-list">
        {sartenesList.map((sartenes, index) => (
          <li key={index} className="sartenes-item">
            <div className="sartenes-info">
              <h3>{traducir(sartenes)}</h3>
            </div>
            <div className="sartenes-price">{sartenes.precio}€</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← {t('restaurante.volver')}</Link>
    </section>
  );
}

export default Sartenes;
