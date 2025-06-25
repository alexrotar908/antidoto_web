import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../cafe/cafe.css';
import { getCafes } from '../cafe/cafeService';  // Ajusta la ruta según donde pongas el archivo

function Cafe() {
  const [cafesClasicos, setCafesClasicos] = useState([]);
  const [cafesEspeciales, setCafesEspeciales] = useState([]);

  useEffect(() => {
    async function fetchCafes() {
      const cafes = await getCafes();
      // Suponiendo que en la tabla 'cafes' tienes un campo 'categoria' que puede ser 'clasico' o 'especial'
      setCafesClasicos(cafes.filter(cafe => cafe.categoria === 'clasico'));
      setCafesEspeciales(cafes.filter(cafe => cafe.categoria === 'especial'));
    }
    fetchCafes();
  }, []);

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
              <h3>{cafe.tipo}</h3>
            </div>
            <div className="cafe-price">{cafe.precio}€</div>
          </li>
        ))}
      </ul>

      <h2 className="cafe-subtitle">CAFÉS ESPECIALES</h2>
      <ul className="cafe-list">
        {cafesEspeciales.map((cafe, index) => (
          <li key={index} className="cafe-item">
            <div className="cafe-info">
              <h3>{cafe.tipo}</h3>
            </div>
            <div className="cafe-price">{cafe.precio}€</div>
          </li>
        ))}
      </ul>

      <Link to="/desayunos-meriendas" className="back-button">← Desayunos & Meriendas</Link>
    </section>
  );
}

export default Cafe;
