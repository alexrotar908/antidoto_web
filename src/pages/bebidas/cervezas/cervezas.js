import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './cervezas.css'; // Asegúrate de que la ruta sea correcta
import { getCervezas } from './cervezaService';
import { useTranslation } from 'react-i18next';

function Cervezas() {
  const [cervezasList, setCervezasList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchData() {
      const cervezas = await getCervezas();
      setCervezasList(cervezas);
    }

    fetchData();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <section className="cervezas-section">
      <h2 className="cervezas-main-title">{t('bebidas.cervezas')}</h2>

      <div className="cervezas-cards-container">
        <div className="cervezas-card">
          <ul className="cervezas-list">
            {cervezasList.map((item, index) => (
              <li key={index} className="cervezas-item">
                <div className="cervezas-info">
                  <h4>{traducir(item)}</h4>
                </div>
                <div className="cervezas-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/bebidas" className="back-button">← {t('restaurante.volver')}</Link>
    </section>
  );
}

export default Cervezas;
