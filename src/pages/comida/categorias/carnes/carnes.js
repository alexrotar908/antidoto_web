import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './carnes.css';
import { getCarnes } from './carnesService';
import { useTranslation } from 'react-i18next';



function Carnes() {
  const [carnesList, setCarnesList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;
       
         useEffect(() => {
           async function fetchCarnes() {
             const carnes = await getCarnes();
             setCarnesList(carnes);
           }
       
           fetchCarnes();
         }, []);
         
  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;
         
  return (
    <section className="carnes-section">
      <h2 className="carnes-title">{t('comidas.carnes')}</h2>
      <ul className="carnes-list">
        {carnesList.map((carnes, index) => (
          <li key={index} className="carnes-item">
            <div className="carnes-info">
              <h3>{traducir(carnes)}</h3>
            </div>
            <div className="carnes-price">{carnes.precio}€</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← {t('restaurante.volver')}</Link>
    </section>
  );
}

export default Carnes;
