import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pecar.css';
import { getPecar } from './pecarService';



function Pecar() {
  const [pecarList, setPecarList] = useState([]);
         
           useEffect(() => {
             async function fetchPecar() {
               const pecar = await getPecar();
               setPecarList(pecar);
             }
         
             fetchPecar();
           }, []);

  return (
    <section className="pecar-section">
      <h2 className="pecar-title">PECAR ES BUENO</h2>
      <ul className="pecar-list">
        {pecarList.map((pecar, index) => (
          <li key={index} className="pecar-item">
            <div className="pecar-info">
              <h3>{pecar.tipo}</h3>
            </div>
            <div className="pecar-price">{pecar.precio}€</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Pecar;
