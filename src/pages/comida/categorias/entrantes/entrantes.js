import React from 'react';
import { Link } from 'react-router-dom';
import './entrantes.css';



function Tapas() {
  const tapasList = [
    { 
      name: 'Matrimonio (boquerones y anchoas Gourmet)',  
      price: '14.00€',
    },
    { 
      name: 'Croquetas de diferentes sabores', 
      price: '2.00€/ud.',
    },
    { 
      name: 'Ensaladilla de la casa con gambas', 
      price: '12.00€',
    },
    { 
      name: 'Zamburiñas a la plancha', 
      price: '3.00€/ud.',
    },
     { 
      name: 'Calamares a la andaluza en temperatura', 
      price: '14.00€',
    },
     { 
      name: 'Sepia a la palncha con salsa ali-oli', 
      price: '14.00€',
    },
     { 
      name: 'Pulpo sobre parmentier', 
      price: '22.00€',
    },
    { 
      name: 'Berenjena con miel', 
      price: '11.00€',
    },
    { 
      name: 'Tabla de queso curado', 
      price: '15.00€ ración - 8.00 € media',
    },
    { 
      name: 'Tabla de hamón ibérico', 
      price: '18.50€ ración - 10.00 € media',
    },
     { 
      name: 'Tempura de verduras', 
      price: '13.50€',
    },

  ];

  return (
    <section className="entrantes-section">
      <h2 className="entrantes-title">ENTRANTES</h2>
      <ul className="entrantes-list">
        {tapasList.map((entrantes, index) => (
          <li key={index} className="entrantes-item">
            <div className="entrantes-info">
              <h3>{entrantes.name}</h3>
            </div>
            <div className="entrantes-price">{entrantes.price}</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Tapas;
