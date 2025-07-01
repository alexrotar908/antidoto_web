import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../tostas_bocadillos/tostas_bocadillos.css';
import { getTostas } from './tostasService';
import { getBocadillos } from './bocadillosService';
import { useTranslation } from 'react-i18next';

const TostasBocadillos = () => {
  const [tostas, setTostas] = useState([]);
  const [bocadillos, setBocadillos] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchData() {
      const tostas = await getTostas();
      const bocadillos = await getBocadillos();
      setTostas(tostas);
      setBocadillos(bocadillos);
    }

    fetchData();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <div className="tostas-bocadillos-container">
      <div className="card bocadillos">
        <h2>{t('tostas_bocadillos.bocadillos')}</h2>
        <ul>
          {bocadillos.map((item, index) => (
            <li key={index}>
              {traducir(item)} <span className="price">{item.precio}€</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card tostas">
        <h2>{t('tostas_bocadillos.tostas')}</h2>
        <ul>
          {tostas.map((item, index) => (
            <li key={index}>
              {traducir(item)} <span className="price">{item.precio}€</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="link-container">
        <Link to="/restaurante" className="back-button">
          ← {t('restaurante.volver')}
        </Link>
      </div>
    </div>
  );
};

export default TostasBocadillos;
