import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../vino/vino.css';
import { getBurbujas } from './services/burbujasService';
import { getBlanco } from './services/blancoService';
import { getRosado } from './services/rosadoService';
import { getFaena } from './services/faenaService';

function Vino() {
  const [burbujasList, setBurbujasList] = useState([]);
  const [blancoList, setBlancoList] = useState([]);
  const [rosadoList, setRosadoList] = useState([]);
  const [faenaList, setFaenaList] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const burbujas = await getBurbujas();
        const blanco = await getBlanco();
        const rosado = await getRosado();
        const faena = await getFaena();
        setBurbujasList(burbujas);
        setBlancoList(blanco);
        setRosadoList(rosado);
        setFaenaList(faena);
      }
  
      fetchData();
    }, []);
  

  return (
    <section className="vino-section">
      <h2 className="vino-main-title">Carta de vinos</h2>

      <div className="vino-cards-container">
 
        <div className="vino-card">
          <h3 className="vino-subtitle">LAS BURBUJAS & EL PLACER DE COMPARTIR</h3>
          <ul className="vino-list">
            {burbujasList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{item.tipo}</h4>
                </div>
                <div className="vino-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="vino-card">
          <h3 className="vino-subtitle">UN BLANCO PARA ACOMPAÑAR</h3>
          <ul className="vino-list">
            {blancoList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{item.tipo}</h4>
                </div>
                <div className="vino-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="vino-card">
          <h3 className="vino-subtitle">ROSADO EL GRAN DESCONOCIDO</h3>
          <ul className="vino-list">
            {rosadoList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{item.tipo}</h4>
                </div>
                <div className="vino-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="vino-card">
          <h3 className="vino-subtitle">NOS METEMOS EN FAENA</h3>
          <ul className="vino-list">
            {faenaList.map((item, index) => (
              <li key={index} className="vino-item">
                <div className="vino-info">
                  <h4>{item.tipo}</h4>
                </div>
                <div className="vino-price">{item.precio}€</div>
              </li>
            ))}
          </ul>
        </div>

      </div>

      

      <Link to="/bebidas" className="back-button">← Bebidas</Link>
    </section>
  );
}

export default Vino;
