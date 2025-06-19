import React from 'react';
import { Link } from 'react-router-dom';
import '../cafe/cafe.css';

function Cafe() {
  const cafesClasicos = [
    { name: 'Expreso', price: '1.80€' },
    { name: 'Solo (solo + hielo)', price: '1.80€' },
    { name: 'Café cortado', price: '1.90€' },
    { name: 'Americano', price: '1.90€' },
    { name: 'Capuccino', price: '3.50€' },
    { name: 'Café bombón', price: '2.50€' },
    { name: 'Chocolate a la taza', price: '3.00€' },
    { name: 'Té o infusión (clásicos)', price: '1.90€' },
  ];

  const cafesEspeciales = [
    { name: 'Café Irlandés', price: '6.50€' },
    { name: 'Café Ruso', price: '6.50€' },
    { name: 'Café blanco y negro', price: '5.50€' },
    { name: 'Café carajillo', price: '5.50€' },
  ];

  return (
    <section className="cafe-section">
      <h2 className="cafe-title">CAFÉS</h2>
      <p className="cafe-description">
  Trabajamos con café ecológico, cultivado en zonas montañosas con un clima ideal y con suelos ricos en nutrientes. 
  Elegimos un café para disfrutar de una bebida deliciosa apoyando a la vez prácticas que representan La Tierra y sus habitantes.
</p>
      <ul className="cafe-list">
        {cafesClasicos.map((cafe, index) => (
          <li key={index} className="cafe-item">
            <div className="cafe-info">
              <h3>{cafe.name}</h3>
            </div>
            <div className="cafe-price">{cafe.price}</div>
          </li>
        ))}
      </ul>

      <h2 className="cafe-subtitle">CAFÉS ESPECIALES</h2>
      <ul className="cafe-list">
        {cafesEspeciales.map((cafe, index) => (
          <li key={index} className="cafe-item">
            <div className="cafe-info">
              <h3>{cafe.name}</h3>
            </div>
            <div className="cafe-price">{cafe.price}</div>
          </li>
        ))}
      </ul>

      <Link to="/desayunos-meriendas" className="back-button">← Desayunos & Meriendas</Link>
    </section>
  );
}

export default Cafe;
