import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../merienda/merienda.css';
import { getMeriendas } from '../merienda/meriendaService';

function Merienda() {
  const [meriendaList, setMeriendaList] = useState([]);

  useEffect(() => {
    async function fetchMeriendas() {
      const meriendas = await getMeriendas();
      setMeriendaList(meriendas);
    }

    fetchMeriendas();
  }, []);

  return (
    <section className="merienda-section">
      <h2 className="merienda-title">Meriendas</h2>
      <p className="merienda-description">
Nuestras meriendas acompañadas de cafés especiales, refresco o zumo natural
</p>
      <ul className="merienda-list">
        {meriendaList.map((merienda, index) => (
          <li key={index} className="merienda-item">
            <div className="merienda-info">
              <h3>{merienda.tipo}</h3>
            </div>
            <div className="merienda-price">{merienda.precio}€</div>
          </li>
        ))}
      </ul>


      <Link to="/desayunos-meriendas" className="back-button">← Desayunos & Meriendas</Link>
    </section>
  );
}

export default Merienda;
