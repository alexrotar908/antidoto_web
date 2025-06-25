import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './arroces.css';
import { getArroces } from './arrocesService';



function Arroces() {
 const [arrocesList, setArrocesList] = useState([]);
    
      useEffect(() => {
        async function fetchArroces() {
          const arroces = await getArroces();
          setArrocesList(arroces);
        }
    
        fetchArroces();
      }, []);

  return (
    <section className="arroces-section">
      <h2 className="arroces-title">ARROCES</h2>
      <h3 className="arroces-subtitle">(POR ENCARGO MÍN 2 PERSONAS)</h3>
      <ul className="arroces-list">
        {arrocesList.map((arroces, index) => (
          <li key={index} className="arroces-item">
            <div className="arroces-info">
              <h3>{arroces.tipo}</h3>
            </div>
            <div className="arroces-price">{arroces.precio}€/pers.</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Arroces;
