import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../dulces_salados/dulces_salados.css';
import { getDulces } from '../dulces_salados/dulcesService';
import { getSalados } from '../dulces_salados/saladosService';

function Dulces() {
  const [dulcesList, setDulcesList] = useState([]);
  const [saladosList, setSaladosList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dulces = await getDulces();
      const salados = await getSalados();
      setDulcesList(dulces);
      setSaladosList(salados);
    }

    fetchData();
  }, []);

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
                  <h4>{item.tipo}</h4>
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
                  <h4>{item.tipo}</h4>
                </div>
                <div className="dulce-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/desayunos-meriendas" className="back-button">← Desayunos & Meriendas</Link>
    </section>
  );
}

export default Dulces;
