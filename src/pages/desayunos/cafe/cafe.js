import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../cafe/cafe.css';
import { getCafes } from '../cafe/cafeService';
import { useTranslation } from 'react-i18next';

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
    <section className="cafe-wrapper"> {/* ← Cambiado de <div> a <section> */}
      <h2 className="cafe-main-title">{t('cafe.title', 'CAFÉS')}</h2>

      <div className="cafe-card">
        <ul className="cafe-list">
          {cafesClasicos.map((cafe, index) => (
            <li key={index} className="cafe-item">
              <div className="cafe-info"><h4>{nombreCafe(cafe)}</h4></div>
              <div className="cafe-price">{cafe.precio}€</div>
            </li>
          ))}
        </ul>

        {cafesEspeciales.length > 0 && (
          <>
            <h3 className="cafe-subtitle">{t('cafe.specials', 'CAFÉS ESPECIALES')}</h3>
            <ul className="cafe-list">
              {cafesEspeciales.map((cafe, index) => (
                <li key={index} className="cafe-item">
                  <div className="cafe-info"><h4>{nombreCafe(cafe)}</h4></div>
                  <div className="cafe-price">{cafe.precio}€</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="back-button-inside">
        <Link to="/desayunos-meriendas" className="back-button">
          ← {t('desayunos.volver', 'Desayunos & Meriendas')}
        </Link>
      </div>
    </section>
  );
}

export default Cafe;
