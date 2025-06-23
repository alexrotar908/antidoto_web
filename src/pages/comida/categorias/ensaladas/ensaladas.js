import React from 'react';
import { Link } from 'react-router-dom';
import './ensaladas.css';



function Ensaladas() {
  const ensaladasList = [
    { 
      name: 'Ensalada griega (queso feta caliente)',  
      price: '13.50€',
    },
    { 
      name: 'Burrata sobre tomate cherry', 
      price: '13.00€',
    },
    { 
      name: 'Tomate con ventresca y cebolla morada', 
      price: '14.50€',
    },
    { 
      name: 'Ensalada de queso de cabra y nueces', 
      price: '14.50€',
    },

  ];

  return (
    <section className="ensaladas-section">
      <h2 className="ensaladas-title">ENSALADAS</h2>
      <ul className="ensaladas-list">
        {ensaladasList.map((ensaladas, index) => (
          <li key={index} className="ensaladas-item">
            <div className="ensaladas-info">
              <h3>{ensaladas.name}</h3>
            </div>
            <div className="ensaladas-price">{ensaladas.price}</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Ensaladas;
