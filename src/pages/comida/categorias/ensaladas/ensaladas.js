import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ensaladas.css';
import { getEnsaladas } from './ensaladasService';
import { useTranslation } from 'react-i18next';



function Ensaladas() {
   const [ensaladasList, setEnsaladasList] = useState([]);
   const { t, i18n } = useTranslation();
   const idioma = i18n.language;
   
     useEffect(() => {
       async function fetchEnsaladas() {
         const ensaladas = await getEnsaladas();
         setEnsaladasList(ensaladas);
       }
   
       fetchEnsaladas();
     }, []);

      const traducir = (item) =>
      idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <section className="ensaladas-section">
      <h2 className="ensaladas-title">{t('comidas.ensaladas')}</h2>
      <ul className="ensaladas-list">
        {ensaladasList.map((ensaladas, index) => (
          <li key={index} className="ensaladas-item">
            <div className="ensaladas-info">
              <h3>{traducir(ensaladas)}</h3>
            </div>
            <div className="ensaladas-price">{ensaladas.precio}€</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← {t('restaurante.volver')}</Link>
    </section>
  );
}

export default Ensaladas;
