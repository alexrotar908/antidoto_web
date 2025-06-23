import React from 'react';
import { Link } from 'react-router-dom';
import '../vino/vino.css';

function Vino() {
  const burbujasList = [
    { name: 'A.O.C Champagne', price: '75.00€' },
    { name: 'Gosset gran rosé brut', price: '89.00€' },
    { name: 'Corpinat', price: '39.50€' },
  ];

  const blancoList = [
    { name: 'D.O. Rías Baixas', price: '25.00€' },
    { name: 'V.T. Castilla Leon', price: '25.00€' },
  ];

  const rosadoList = [
    { name: 'D.O. Ribera del Duero(Roselito)', price: '23.00€' },
    { name: 'Le Rosé Antídoto', price: '78.00€' },
  ];

  const faenaList = [
    { name: 'D.O. Ribera del Duero(Antídoto)', price: '24.00€' },
    { name: 'La hormiga de antídoto', price: '42.00€' },
    { name: 'Pesquera Crianza', price: '35.00€' },
    { name: 'D.O. CA Rioja', price: '39.00€' },
    { name: 'D.O. Bierzo', price: '27.00€' },
    { name: 'D.O. Priorat', price: '39.00€' },
  ];

  

  return (
    <section className="vino-section">
      <h2 className="vino-main-title">Carta de vinos</h2>

      <div className="vino-cards-container">
 
        <div className="vino-card">
          <h3 className="vino-subtitle">LAS BURBUJAS & EL PLACER DE COMPARTIR</h3>
          <ul className="vino-list">
            {burbujasList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{item.name}</h4>
                </div>
                <div className="vino-price">{item.price}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="vino-card">
          <h3 className="vino-subtitle">UN BLANCO PARA ACOMPAÑAR</h3>
          <ul className="vino-list">
            {blancoList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{item.name}</h4>
                </div>
                <div className="vino-price">{item.price}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="vino-card">
          <h3 className="vino-subtitle">ROSADO EL GRAN DESCONOCIDO</h3>
          <ul className="vino-list">
            {blancoList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{item.name}</h4>
                </div>
                <div className="vino-price">{item.price}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="vino-card">
          <h3 className="vino-subtitle">NOS METEMOS EN FAENA</h3>
          <ul className="vino-list">
            {rosadoList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{item.name}</h4>
                </div>
                <div className="vino-price">{item.price}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="vino-card">
          <h3 className="vino-subtitle">UN BLANCO PARA ACOMPAÑAR</h3>
          <ul className="vino-list">
            {faenaList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{item.name}</h4>
                </div>
                <div className="vino-price">{item.price}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      

      <Link to="/bebidas" className="back-button">← Bebidas</Link>
    </section>
  );
}

export default Vino;
