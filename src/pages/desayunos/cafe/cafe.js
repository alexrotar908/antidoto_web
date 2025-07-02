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
    <div className="cafe-page-wrapper">
      <section className="cafe-section">
        <h2 className="cafe-title">{t('cafe.title', 'CAFÉS')}</h2>

        <p className="cafe-description">
          {t(
            'cafe.description',
            'Trabajamos con café ecológico, cultivado en zonas montañosas con un clima ideal y con suelos ricos en nutrientes. Elegimos un café para disfrutar de una bebida deliciosa apoyando a la vez prácticas que representan La Tierra y sus habitantes.'
          )}
        </p>

        <ul className="cafe-list">
          {cafesClasicos.map((cafe, index) => (
            <li key={index} className="cafe-item">
              <div className="cafe-info">
                <h3>{nombreCafe(cafe)}</h3>
              </div>
              <div className="cafe-price">{cafe.precio}€</div>
            </li>
          ))}
        </ul>

        <h2 className="cafe-subtitle">{t('cafe.specials', 'CAFÉS ESPECIALES')}</h2>

        <ul className="cafe-list">
          {cafesEspeciales.map((cafe, index) => (
            <li key={index} className="cafe-item">
              <div className="cafe-info">
                <h3>{nombreCafe(cafe)}</h3>
              </div>
              <div className="cafe-price">{cafe.precio}€</div>
            </li>
          ))}
        </ul>

        {/* Botón de volver dentro de la tarjeta, parte inferior izquierda */}
        <div className="back-button-inside">
          <Link to="/desayunos-meriendas" className="back-button">
            ← {t('desayunos.volver', 'Desayunos & Meriendas')}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Cafe;
