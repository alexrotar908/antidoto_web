import React from 'react';
import { Link } from 'react-router-dom';
import './carnes.css';



function Carnes() {
  const carnesList = [
    { 
      name: 'Milanesa de pollo',  
      price: '13.00€',
    },
    { 
      name: 'Entrecot de ternera trinchado', 
      price: '18.00€',
    },
    { 
      name: 'Chuletillas de cordero (Segovia)', 
      price: '24.00€',
    },
     { 
      name: 'Solomillo de ternera receta del chef', 
      price: '21.00€',
    },
     { 
      name: 'Hamburguesa de la casa', 
      price: '12.00€',
    }

  ];

  return (
    <section className="carnes-section">
      <h2 className="carnes-title">CARNES</h2>
      <ul className="carnes-list">
        {carnesList.map((carnes, index) => (
          <li key={index} className="carnes-item">
            <div className="carnes-info">
              <h3>{carnes.name}</h3>
            </div>
            <div className="carnes-price">{carnes.price}</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Carnes;
