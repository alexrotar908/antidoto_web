import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './carnes.css';
import { getCarnes } from './carnesService';



function Carnes() {
  const [carnesList, setCarnesList] = useState([]);
       
         useEffect(() => {
           async function fetchCarnes() {
             const carnes = await getCarnes();
             setCarnesList(carnes);
           }
       
           fetchCarnes();
         }, []);

  return (
    <section className="carnes-section">
      <h2 className="carnes-title">CARNES</h2>
      <ul className="carnes-list">
        {carnesList.map((carnes, index) => (
          <li key={index} className="carnes-item">
            <div className="carnes-info">
              <h3>{carnes.tipo}</h3>
            </div>
            <div className="carnes-price">{carnes.precio}€</div>
          </li>
        ))}
      </ul>
      <Link to="/comida" className="back-button">← Volver a Comida</Link>
    </section>
  );
}

export default Carnes;
