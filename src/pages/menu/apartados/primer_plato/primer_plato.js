import React from 'react';
import { Link } from 'react-router-dom';
import '../primer_plato/primer_plato.css'; 

// Importa imágenes de primeros platos
import cremaImg from '../../../../imagenes_primero/crema-verduras.jpg';
import lentejasImg from '../../../../imagenes_primero/lentejas.jpg';
import macarronesImg from '../../../../imagenes_primero/marcarrones.jpg';
import ensaladaImg from '../../../../imagenes_primero/ensalada.jpg';

function PrimerPlato() {
  const primerosPlatos = [
    {
      name: 'Crema de Verduras',
      description: 'Crema de verduras saludable',
      price: '10€',
      image: cremaImg,
    },
    {
      name: 'Lentejas',
      description: 'Lentejas estofadas con chorizo',
      price: '8€',
      image: lentejasImg,
    },
    {
      name: 'Ensalada Mixta',
      description: 'Lechuga, tomate, atún, huevo y maíz',
      price: '6.5€',
      image: ensaladaImg,
    },
    {
      name: 'Macarrones Boloñesa',
      description: 'Macarrones con salsa boloñesa y queso',
      price: '6€',
      image: macarronesImg,
    },
  ];

  return (
    <section className="primerplato-section">
      <h2 className="primerplato-title">Primeros Platos</h2>
      <ul className="primerplato-list">
        {primerosPlatos.map((plato, index) => (
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

export default PrimerPlato;
