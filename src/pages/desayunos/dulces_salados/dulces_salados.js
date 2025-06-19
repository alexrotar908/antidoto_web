import React from 'react';
import { Link } from 'react-router-dom';
import '../dulces_salados/dulces_salados.css';

function Dulces() {
  const dulcesList = [
    { name: 'Churros o porras', price: '3.20€' },
    { name: 'Bollería', price: '3.20€' },
    { name: 'Tostada con mantequilla y mermelada', price: '3.20€' },
    { name: 'Croissant con mantequilla y mermelada', price: '3.20€' },
  ];

  const saladosList = [
    { name: 'Tostada o barrita integral con tomate y aceite de oliva', price: '3.20€' },
    { name: 'Sándwich mixto o vegetal', price: '6.50€' },
    { name: 'Café blanco y negro', price: '5.50€' },
  ];

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
                  <h4>{item.name}</h4>
                </div>
                <div className="dulce-price">{item.price}</div>
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
                  <h4>{item.name}</h4>
                </div>
                <div className="dulce-price">{item.price}</div>
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
