import React from 'react';
import { Link } from 'react-router-dom';
import '../tostas_bocadillos/tostas_bocadillos.css';

const tostas = [
  { nombre: 'Solomillo ibérico, queso brie & cebolla', precio: '5.50€' },
  { nombre: 'Queso de cabra con tomates cherry marinados & nueces', precio: '5.50€' },
  { nombre: 'Salmón, aguacate & eneldo', precio: '5.50€' },
  { nombre: 'Jamón ibérico & tomate triturado', precio: '6.50€' },
  { nombre: 'Vegetal con aguacate, tomate & huevo', precio: '5.50€' },
  { nombre: 'Escalivada de anchoas', precio: '5.50€' }
];

const bocadillos = [
  { nombre: 'Calamares', precio: '7.50€' },
  { nombre: 'Oreja c/salsa brava', precio: '7.50€' },
  { nombre: 'Panceta ibérica', precio: '7.50€' },
  { nombre: 'Solomillo ibérico & queso brie', precio: '9.00€' },
  { nombre: 'Jamón ibérico & tomate', precio: '9.00€' },
  { nombre: 'Boquerones / Anchoas', precio: '7.50€' }
];

const TostasBocadillos = () => {
  return (
    <div className="tostas-bocadillos-container">
      <div className="card bocadillos">
        <h2>Bocadillos</h2>
        <ul>
          {bocadillos.map((item, index) => (
            <li key={index}>
              {item.nombre} <span className="price">{item.precio}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card tostas">
        <h2>Tostas</h2>
        <ul>
          {tostas.map((item, index) => (
            <li key={index}>
              {item.nombre} <span className="price">{item.precio}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="link-container">
        <Link to="/restaurante" className="back-button">
          ← Volver a Restaurante
        </Link>
      </div>
    </div>
  );
};

export default TostasBocadillos;
