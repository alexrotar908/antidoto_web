import React from 'react';
import { Link } from 'react-router-dom';
import './sartenes.css';



function Sartenes() {
  const sartenesList = [
    { 
      name: 'Huevos rotos con jamón ibérico',  
      price: '14.00€',
    },
    { 
      name: 'Huevos rotos con gulas y gambas', 
      price: '14.00€',
    },
    { 
      name: 'Rabo de toro estofado', 
      price: '16.00€',
    },
    { 
      name: 'Callos a la asturiana (un clásico)', 
      price: '15.00€',
    },

  ];

  return (
    <section className="sartenes-section">
      <h2 className="sartenes-title">SARTENES & CUCHARA</h2>
      <ul className="sartenes-list">
        {sartenesList.map((sartenes, index) => (
          <li key={index} className="sartenes-item">
            <div className="sartenes-info">
              <h3>{sartenes.name}</h3>
            </div>
            <div className="sartenes-price">{sartenes.price}</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Sartenes;
