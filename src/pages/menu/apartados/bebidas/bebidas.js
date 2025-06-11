// src/pages/menu/apartados/bebidas/Bebidas.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../bebidas/bebidas.css';

function Bebidas() {
  const bebidas = {
    Refrescos: [
      { name: 'Coca Cola', price: '2.5€' },
      { name: 'Aquarius', price: '2.5€' },
      { name: 'Sprite', price: '2.5€' },
      { name: 'Agua mineral', price: '1.5€' },
    ],
    Cafés: [
      { name: 'Café solo', price: '1.2€' },
      { name: 'Café con leche', price: '1.5€' },
      { name: 'Cortado', price: '1.3€' },
    ],
    Cervezas: [
      { name: 'Cerveza Mahou (tercio)', price: '2.2€' },
      { name: 'Cerveza sin alcohol', price: '2€' },
      { name: 'Cerveza artesanal', price: '3.5€' },
    ],
    Vinos: [
      { name: 'Vino tinto Rioja', price: '3€' },
      { name: 'Vino blanco Rueda', price: '3€' },
      { name: 'Copa de cava', price: '3.5€' },
    ],
    Cócteles: [
      { name: 'Mojito', price: '6€' },
      { name: 'Caipirinha', price: '6€' },
      { name: 'Piña colada', price: '6.5€' },
    ],
  };

  return (
    <section className="bebidas-section">
      <h2 className="bebidas-title">Bebidas</h2>
      {Object.entries(bebidas).map(([categoria, items]) => (
        <div key={categoria} className="categoria-bebidas">
          <h3 className="categoria-titulo">{categoria}</h3>
          <ul className="bebidas-lista">
            {items.map((bebida, index) => (
              <li key={index} className="bebida-item">
                <span className="bebida-nombre">{bebida.name}</span>
                <span className="bebida-precio">{bebida.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link to="/menu" className="back-button">← Volver al Menú</Link>
    </section>
  );
}

export default Bebidas;
