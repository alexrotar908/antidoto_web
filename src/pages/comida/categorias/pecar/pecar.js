import React from 'react';
import { Link } from 'react-router-dom';
import './pecar.css';



function Pecar() {
  const pecarList = [
    { 
      name: 'Piña a la brasa con helado y nata',  
      price: '7.00€',
    },
    { 
      name: 'Tarta de queso casera', 
      price: '7.00€.',
    },
    { 
      name: 'Queso y membrillo acompañado de su copa de cava', 
      price: '10.00€',
    },
    { 
      name: 'El postre del chef', 
      price: '6.50€',
    }
  ];

  return (
    <section className="pecar-section">
      <h2 className="pecar-title">PECAR ES BUENO</h2>
      <ul className="pecar-list">
        {pecarList.map((pecar, index) => (
          <li key={index} className="pecar-item">
            <div className="pecar-info">
              <h3>{pecar.name}</h3>
            </div>
            <div className="pecar-price">{pecar.price}</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Pecar;
