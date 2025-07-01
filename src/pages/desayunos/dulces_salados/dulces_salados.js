import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../dulces_salados/dulces_salados.css';
import { getDulces } from '../dulces_salados/dulcesService';
import { getSalados } from '../dulces_salados/saladosService';
import { useTranslation } from 'react-i18next'; // ✅ Importa hook de i18n

function Dulces() {
  const [dulcesList, setDulcesList] = useState([]);
  const [saladosList, setSaladosList] = useState([]);
  const { i18n, t } = useTranslation(); // ✅ Hook de traducción
  const idioma = i18n.language;

  useEffect(() => {
    async function fetchData() {
      const dulces = await getDulces();
      const salados = await getSalados();
      setDulcesList(dulces);
      setSaladosList(salados);
    }

    fetchData();
  }, []);

  const traducirTipo = (item) =>
    idioma === 'es' ? item.tipo_es || item.tipo : item.tipo_en || item.tipo;

  return (
    <section className="dulce-section">
      <h2 className="dulce-main-title">DULCES & SALADOS</h2>

      <div className="dulce-cards-container">
        {/* Tarjeta de Dulces */}
        <div className="dulce-card">
          <h3 className="dulce-subtitle">DULCES</h3>
          <ul className="dulce-list">
            {dulcesList.map((item, index) => (
              <li key={index} className="dulce-item">
                <div className="dulce-info">
                  <h4>{traducirTipo(item)}</h4>
                </div>
                <div className="dulce-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Tarjeta de Salados */}
        <div className="dulce-card">
          <h3 className="dulce-subtitle">SALADOS</h3>
          <ul className="dulce-list">
            {saladosList.map((item, index) => (
              <li key={index} className="dulce-item">
                <div className="dulce-info">
                  <h4>{traducirTipo(item)}</h4>
                </div>
                <div className="dulce-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/desayunos-meriendas" className="back-button">
        ← {t('desayunos.volver')}
      </Link>
    </section>
  );
}

export default Dulces;
