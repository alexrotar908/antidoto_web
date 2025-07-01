import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pecar.css';
import { getPecar } from './pecarService';
import { useTranslation } from 'react-i18next';

function Pecar() {
  const [pecarList, setPecarList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchPecar() {
      const pecar = await getPecar();
      setPecarList(pecar);
    }

    fetchPecar();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <section className="pecar-section">
      <h2 className="pecar-title">{t('comidas.pecar')}</h2>
      <ul className="pecar-list">
        {pecarList.map((pecar, index) => (
          <li key={index} className="pecar-item">
            <div className="pecar-info">
              <h3>{traducir(pecar)}</h3>
            </div>
            <div className="pecar-price">{pecar.precio}€</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← {t('restaurante.volver')}</Link>
    </section>
  );
}

export default Pecar;
