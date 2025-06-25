import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pescados.css';
import { getPescados } from './pescadosService';



function Pescados() {
 const [pescadosList, setPescadosList] = useState([]);
     
       useEffect(() => {
         async function fetchPescados() {
           const pescados = await getPescados();
           setPescadosList(pescados);
         }
     
         fetchPescados();
       }, []);

  return (
    <section className="pescados-section">
      <h2 className="pescados-title">PESCADOS</h2>
      <ul className="pescados-list">
        {pescadosList.map((pescados, index) => (
          <li key={index} className="pescados-item">
            <div className="pescados-info">
              <h3>{pescados.tipo}</h3>
            </div>
            <div className="pescados-price">{pescados.precio}€</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Pescados;
