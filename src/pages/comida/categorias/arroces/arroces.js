import React from 'react';
import { Link } from 'react-router-dom';
import './arroces.css';



function Arroces() {
  const arrocesList = [
    { 
      name: 'Paella de verdura',  
      price: '15.50€/pers.',
    },
    { 
      name: 'Paella mixta', 
      price: '16.00€/pers.',
    },
    { 
      name: 'Paella de marisco', 
      price: '16.00€/pers.',
    }
  ];

  return (
    <section className="arroces-section">
      <h2 className="arroces-title">ARROCES</h2>
      <h3 className="arroces-subtitle">(POR ENCARGO MÍN 2 PERSONAS)</h3>
      <ul className="arroces-list">
        {arrocesList.map((arroces, index) => (
          <li key={index} className="arroces-item">
            <div className="arroces-info">
              <h3>{arroces.name}</h3>
            </div>
            <div className="arroces-price">{arroces.price}</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Arroces;
