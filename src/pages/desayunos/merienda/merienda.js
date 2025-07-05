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
    <div className="meriendas-wrapper">
      <h2 className="meriendas-main-title">{t('merienda.title', 'MERIENDAS')}</h2>

      <div className="meriendas-card">
        <ul className="meriendas-list">
          {meriendaList.map((item, index) => (
            <li key={index} className="meriendas-item">
              <div className="meriendas-info">
                <h4>{traducir(item)}</h4>
              </div>
              <div className="meriendas-price">{item.precio}€</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="back-button-inside">
        <Link to="/desayunos-meriendas" className="back-button">
          ← {t('desayunos.volver', 'Desayunos & Meriendas')}
        </Link>
      </div>
    </div>
  );
}

export default Merienda;
