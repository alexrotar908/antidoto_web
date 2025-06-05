import React from 'react';
import { Link } from 'react-router-dom';
import '../segundo_plato/segundo_plato.css'; 

// Importa imágenes de primeros platos
import entrecotImg from '../../../../imagenes_segundo/entrecote.jpg';
import solomilloImg from '../../../../imagenes_segundo/solomillo.jpg';
import pescadoImg from '../../../../imagenes_segundo/pescado.png';
import salmonImg from '../../../../imagenes_segundo/salmon.png';

function SegundoPlato() {
  const segundosPlatos = [
    {
      name: 'Entrecot',
      description: 'Entrecot con patatas',
      price: '15€',
      image: entrecotImg,
    },
    {
      name: 'Solomillo',
      description: 'solomillo con patatas y salsa',
      price: '8€',
      image: solomilloImg,
    },
    {
      name: 'Pescado',
      description: 'Pescado asado con verduras',
      price: '6.5€',
      image: pescadoImg,
    },
    {
      name: 'Salmón',
      description: 'Salmón ahomado con verduras y ensalada',
      price: '6€',
      image: salmonImg,
    },
  ];

  return (
    <section className="segundoplato-section">
      <h2 className="segundoplato-title">Segundos Platos</h2>
      <ul className="segundoplato-list">
        {segundosPlatos.map((plato, index) => (
          <li key={index} className="plato-item">
            <img src={plato.image} alt={plato.name} className="plato-image" />
            <div className="plato-info">
              <h3>{plato.name}</h3>
              <p>{plato.description}</p>
            </div>
            <div className="plato-price">{plato.price}</div>
          </li>
        ))}
      </ul>
      <Link to="/menu" className="back-button">← Volver al Menú</Link>
    </section>
  );
}

export default SegundoPlato;
