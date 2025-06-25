import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sartenes.css';
import { getSartenes } from './sartenesService';



function Sartenes() {
  const [sartenesList, setSartenesList] = useState([]);
  
    useEffect(() => {
      async function fetchSartenes() {
        const sartenes_cuchara = await getSartenes();
        setSartenesList(sartenes_cuchara);
      }
  
      fetchSartenes();
    }, []);

  return (
    <section className="sartenes-section">
      <h2 className="sartenes-title">SARTENES & CUCHARA</h2>
      <ul className="sartenes-list">
        {sartenesList.map((sartenes, index) => (
          <li key={index} className="sartenes-item">
            <div className="sartenes-info">
              <h3>{sartenes.tipo}</h3>
            </div>
            <div className="sartenes-price">{sartenes.precio}€</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Sartenes;
