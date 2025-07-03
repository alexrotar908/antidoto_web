import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import '../cafe/cafe.css';
import { getCafes } from '../cafe/cafeService';
import { useTranslation } from 'react-i18next';

import capuccino from '../../../imagenes_desayuno/capuccino.jpg';
import irlandes from '../../../imagenes_desayuno/cafe_irlandes.jpg';

function Cafe() {
  const { t, i18n } = useTranslation();
  const [cafesClasicos, setCafesClasicos] = useState([]);
  const [cafesEspeciales, setCafesEspeciales] = useState([]);
  const cardRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setHeight(cardRef.current.offsetHeight);
    }
  }, [cafesClasicos, cafesEspeciales]);

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

        <div className="cafe-column">
          <div className="cafe-image-wrapper" style={{ height }}>
            <img
              src={capuccino}
              alt="Decoración izquierda"
              className="cafe-bg-image"
            />
          </div>
        </div>

        <div className="cafe-column">
          <section className="cafe-section" ref={cardRef}>
            <h2 className="cafe-title">{t('cafe.title', 'CAFÉS')}</h2>

            <p className="cafe-description">
              {t(
                'cafe.description',
                'Trabajamos con café ecológico, cultivado en zonas montañosas con un clima ideal y con suelos ricos en nutrientes. [...]'
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

            <div className="back-button-inside">
              <Link to="/desayunos-meriendas" className="back-button">
                ← {t('desayunos.volver', 'Desayunos & Meriendas')}
              </Link>
            </div>
          </section>
        </div>

        <div className="cafe-column">
          <div className="cafe-image-wrapper" style={{ height }}>
            <img
              src={irlandes}
              alt="Decoración derecha"
              className="cafe-bg-image"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cafe;
