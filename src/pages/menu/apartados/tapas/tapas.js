import React from 'react';
import { Link } from 'react-router-dom';
import './tapas.css';

// Importa las imágenes locales
import bravasImg from '../../../../imagenes/bravas.jpg';
import croquetasImg from '../../../../imagenes/croquetas.jpg';
import calamaresImg from '../../../../imagenes/calamares.jpg';
import tortillaImg from '../../../../imagenes/tortilla_patatas.jpg';


function Tapas() {
  const tapasList = [
    { 
      name: 'Croquetas', 
      description: 'Croquetas caseras de jamón', 
      price: '5€',
      image: croquetasImg,
    },
    { 
      name: 'Patatas Bravas', 
      description: 'Patatas con salsa picante', 
      price: '4.5€',
      image: bravasImg,
    },
    { 
      name: 'Calamares', 
      description: 'Calamares a la romana', 
      price: '6€',
      image: calamaresImg,
    },
    { 
      name: 'Tortilla Española', 
      description: 'Tortilla tradicional de patatas', 
      price: '4€',
      image: tortillaImg,
    },
  ];

  return (
    <section className="tapas-section">
      <h2 className="tapas-title">Tapas</h2>
      <ul className="tapas-list">
        {tapasList.map((tapa, index) => (
          <li key={index} className="tapa-item">
            <img src={tapa.image} alt={tapa.name} className="tapa-image" />
            <div className="tapa-info">
              <h3>{tapa.name}</h3>
              <p>{tapa.description}</p>
            </div>
            <div className="tapa-price">{tapa.price}</div>
          </li>
        ))}
      </ul>
      <Link to="/menu" className="back-button">← Volver al Menú</Link>
    </section>
  );
}

export default Tapas;
