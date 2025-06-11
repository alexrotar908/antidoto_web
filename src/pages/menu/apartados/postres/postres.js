import React from 'react';
import { Link } from 'react-router-dom';
import '../postres/postres.css'; 

// Importa imágenes de primeros platos
import tartaQuesoImg from '../../../../imagenes_postres/tartaqueso.jpg';
import tartaChocolateImg from '../../../../imagenes_postres/tartachocolate.jpg';
import natillaImg from '../../../../imagenes_postres/natillas.jpg';

function Postres() {
  const postres = [
    {
      name: 'Tarta de queso',
      description: 'Tarta de queso casera',
      price: '15€',
      image: tartaQuesoImg,
    },
    {
      name: 'Tarta de chocolate',
      description: 'Tarta de chocolate casera',
      price: '8€',
      image: tartaChocolateImg,
    },
    {
      name: 'Natilla',
      description: 'Natilla casera con galleta',
      price: '6.5€',
      image: natillaImg,
    },
  ];

  return (
    <section className="postre-section">
      <h2 className="postre-title">Segundos Platos</h2>
      <ul className="postre-list">
        {postres.map((postre, index) => (
          <li key={index} className="postre-item">
            <img src={postre.image} alt={postre.name} className="postre-image" />
            <div className="postre-info">
              <h3>{postre.name}</h3>
              <p>{postre.description}</p>
            </div>
            <div className="postre-price">{postre.price}</div>
          </li>
        ))}
      </ul>
      <Link to="/menu" className="back-button">← Volver al Menú</Link>
    </section>
  );
}

export default Postres;
