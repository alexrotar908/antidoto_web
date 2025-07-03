import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../cafe/cafe.css';
import { getCafes } from '../cafe/cafeService';
import { useTranslation } from 'react-i18next';

import capuccino from '../../../imagenes_desayuno/capuccino.jpg';

function Cafe() {
  const { t, i18n } = useTranslation();
  const [cafesClasicos, setCafesClasicos] = useState([]);
  const [cafesEspeciales, setCafesEspeciales] = useState([]);

  useEffect(() => {
    async function fetchCafes() {
      const cafes = await getCafes();
      setCafesClasicos(cafes.filter(cafe => cafe.categoria === 'clasico'));
      setCafesEspeciales(cafes.filter(cafe => cafe.categoria === 'especial'));
    }
    fetchCafes();
  }, []);

  const nombreCafe = (cafe) => {
    if (i18n.language === 'en') return cafe.tipo_en || cafe.tipo;
    return cafe.tipo_es || cafe.tipo;
  };

  return (
    <div className="cafe-page-wrapper">
      <div className="cafe-flex-container">
        {/* Imagen izquierda */}
        <div className="cafe-left-image-wrapper">
          <img src={capuccino} alt="Decoración" className="cafe-bg-image" />
        </div>

        {/* Tarjeta de cafés */}
        <section className="cafe-section">
          <h2 className="cafe-title">{t('cafe.title', 'CAFÉS')}</h2>
          <p className="cafe-description">{t('cafe.description')}</p>

          <ul className="cafe-list">
            {cafesClasicos.map((cafe, index) => (
              <li key={index} className="cafe-item">
                <div className="cafe-info"><h3>{nombreCafe(cafe)}</h3></div>
                <div className="cafe-price">{cafe.precio}€</div>
              </li>
            ))}
          </ul>

          <h2 className="cafe-subtitle">{t('cafe.specials', 'CAFÉS ESPECIALES')}</h2>
          <ul className="cafe-list">
            {cafesEspeciales.map((cafe, index) => (
              <li key={index} className="cafe-item">
                <div className="cafe-info"><h3>{nombreCafe(cafe)}</h3></div>
                <div className="cafe-price">{cafe.precio}€</div>
              </li>
            ))}
          </ul>

          <div className="back-button-inside">
            <Link to="/desayunos-meriendas" className="back-button">
              ← {t('desayunos.volver', 'Desayunos & Meriendas')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cafe;
