import React from 'react';
import { Link } from 'react-router-dom';
import '../merienda/merienda.css';

function Merienda() {
  const meriendaList = [
    { name: 'Tostas de solomillo con queso Brie y cebolla', price: '5.50€' },
    { name: 'Tosta queso de cabra con tomates cherry', price: '5.50€' },
    { name: 'Tosta de salmón, aguacate y eneldo', price: '5.50€' },
    { name: 'Tosta de tomate triturado y jamón ibérico', price: '6.50€' },
    { name: 'Tosta vegetal con aguacate, tomate y huevo', price: '5.50€' },
    { name: 'Escalivada de anchoas', price: '5.50€' },
  ];

  return (
    <section className="merienda-section">
      <h2 className="merienda-title">CAFÉS</h2>
      <p className="merienda-description">
Nuestras meriendas acompañadas de cafés especiales, refresco o zumo natural
</p>
      <ul className="merienda-list">
        {meriendaList.map((merienda, index) => (
          <li key={index} className="merienda-item">
            <div className="merienda-info">
              <h3>{merienda.name}</h3>
            </div>
            <div className="merienda-price">{merienda.price}</div>
          </li>
        ))}
      </ul>


      <Link to="/desayunos-meriendas" className="back-button">← Desayunos & Meriendas</Link>
    </section>
  );
}

export default Merienda;
