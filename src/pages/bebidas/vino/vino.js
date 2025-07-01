import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../vino/vino.css';
import { getBurbujas } from './services/burbujasService';
import { getBlanco } from './services/blancoService';
import { getRosado } from './services/rosadoService';
import { getFaena } from './services/faenaService';
import { useTranslation } from 'react-i18next';

function Vino() {
  const [burbujasList, setBurbujasList] = useState([]);
  const [blancoList, setBlancoList] = useState([]);
  const [rosadoList, setRosadoList] = useState([]);
  const [faenaList, setFaenaList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchData() {
      const burbujas = await getBurbujas();
      const blanco = await getBlanco();
      const rosado = await getRosado();
      const faena = await getFaena();
      setBurbujasList(burbujas);
      setBlancoList(blanco);
      setRosadoList(rosado);
      setFaenaList(faena);
    }

    fetchData();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <section className="vino-section">
      <h2 className="vino-main-title">{t('vino.title')}</h2>

      <div className="vino-cards-container">

        <div className="vino-card">
          <h3 className="vino-subtitle">{t('vino.burbujas')}</h3>
          <ul className="vino-list">
            {burbujasList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{traducir(item)}</h4>
                </div>
                <div className="vino-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="vino-card">
          <h3 className="vino-subtitle">{t('vino.blanco')}</h3>
          <ul className="vino-list">
            {blancoList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{traducir(item)}</h4>
                </div>
                <div className="vino-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="vino-card">
          <h3 className="vino-subtitle">{t('vino.rosado')}</h3>
          <ul className="vino-list">
            {rosadoList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{traducir(item)}</h4>
                </div>
                <div className="vino-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="vino-card">
          <h3 className="vino-subtitle">{t('vino.faena')}</h3>
          <ul className="vino-list">
            {faenaList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{traducir(item)}</h4>
                </div>
                <div className="vino-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <Link to="/bebidas" className="back-button">← {t('restaurante.volver')}</Link>
    </section>
  );
}

export default Vino;
