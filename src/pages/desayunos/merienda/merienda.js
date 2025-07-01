import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../merienda/merienda.css';
import { getMeriendas } from '../merienda/meriendaService';
import { useTranslation } from 'react-i18next';

function Merienda() {
  const [meriendaList, setMeriendaList] = useState([]);
  const { t, i18n } = useTranslation();
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchMeriendas() {
      const meriendas = await getMeriendas();
      setMeriendaList(meriendas);
    }

    fetchMeriendas();
  }, []);

  const traducir = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <section className="merienda-section">
      <h2 className="merienda-title">{t('merienda.title')}</h2>
      <p className="merienda-description">{t('merienda.description')}</p>

      <ul className="merienda-list">
        {meriendaList.map((merienda, index) => (
          <li key={index} className="merienda-item">
            <div className="merienda-info">
              <h3>{traducir(merienda)}</h3>
            </div>
            <div className="merienda-price">{merienda.precio}€</div>
          </li>
        ))}
      </ul>

      <Link to="/desayunos-meriendas" className="back-button">
        {t('desayunos.volver')}
      </Link>
    </section>
  );
}

export default Merienda;
