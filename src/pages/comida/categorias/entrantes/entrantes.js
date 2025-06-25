import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './entrantes.css';
import { getEntrantes } from './entrantesService';

function Tapas() {
  const [entrantesList, setEntrantesList] = useState([]);
  
  useEffect(() => {
    async function fetchEntrantes() {
      const entrantes = await getEntrantes();
      setEntrantesList(entrantes);
    }

    fetchEntrantes();
  }, []);

  return (
    <section className="entrantes-section">
      <h2 className="entrantes-title">ENTRANTES</h2>
      <ul className="entrantes-list">
        {entrantesList.map((entrantes) => (
          <li key={entrantes.id} className="entrantes-item">
            <div className="entrantes-info">
              <h3>{entrantes.tipo}</h3>
            </div>
            <div className="entrantes-price">
              {entrantes.precio}€
              {entrantes.precio_media && (
                <span> / Media: {entrantes.precio_media}€</span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Tapas;
