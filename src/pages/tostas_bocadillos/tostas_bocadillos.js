import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../tostas_bocadillos/tostas_bocadillos.css';
import { getTostas } from './tostasService';
import { getBocadillos } from './bocadillosService';



const TostasBocadillos = () => {

  const [tostas, setTostas] = useState([]);
  const [bocadillos, setBocadillos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const tostas = await getTostas();
      const bocadillos = await getBocadillos();
      setTostas(tostas);
      setBocadillos(bocadillos);
    }

    fetchData();
  }, []);
  return (
    <div className="tostas-bocadillos-container">
      <div className="card bocadillos">
        <h2>Bocadillos</h2>
        <ul>
          {bocadillos.map((item, index) => (
            <li key={index}>
              {item.tipo} <span className="price">{item.precio}€</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card tostas">
        <h2>Tostas</h2>
        <ul>
          {tostas.map((item, index) => (
            <li key={index}>
              {item.tipo} <span className="price">{item.precio}€</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="link-container">
        <Link to="/restaurante" className="back-button">
          ← Volver a Restaurante
        </Link>
      </div>
    </div>
  );
};

export default TostasBocadillos;
