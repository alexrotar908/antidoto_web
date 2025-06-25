import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ensaladas.css';
import { getEnsaladas } from './ensaladasService';



function Ensaladas() {
   const [ensaladasList, setEnsaladasList] = useState([]);
   
     useEffect(() => {
       async function fetchEnsaladas() {
         const ensaladas = await getEnsaladas();
         setEnsaladasList(ensaladas);
       }
   
       fetchEnsaladas();
     }, []);


  return (
    <section className="ensaladas-section">
      <h2 className="ensaladas-title">ENSALADAS</h2>
      <ul className="ensaladas-list">
        {ensaladasList.map((ensaladas, index) => (
          <li key={index} className="ensaladas-item">
            <div className="ensaladas-info">
              <h3>{ensaladas.tipo}</h3>
            </div>
            <div className="ensaladas-price">{ensaladas.precio}€</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Ensaladas;
