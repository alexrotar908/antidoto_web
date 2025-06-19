import React from 'react';
import { Link } from 'react-router-dom';
import './pescados.css';



function Pescados() {
  const pescadosList = [
    { 
      name: 'Chipirones de anzuelo a la plancha',  
      price: '14.50€',
    },
    { 
      name: 'Salmón en salsa cremosa de champiñones', 
      price: '15.00€',
    },
    { 
      name: 'Bacalao de la casa', 
      price: '16.00€',
    }

  ];

  return (
    <section className="pescados-section">
      <h2 className="pescados-title">PESCADOS</h2>
      <ul className="pescados-list">
        {pescadosList.map((pescados, index) => (
          <li key={index} className="pescados-item">
            <div className="pescados-info">
              <h3>{pescados.name}</h3>
            </div>
            <div className="pescados-price">{pescados.price}</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Pescados;
