// src/components/MenuDelDia.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../menu_del_dia/menu_del_dia.css';
import { getMenuDelDia } from './menu_del_diaService';

const MenuDelDia = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      const menuData = await getMenuDelDia();
      setMenu(menuData);
      setLoading(false);
    }

    fetchMenu();
  }, []);

  if (loading) return <p className="menu-loading">Cargando menú...</p>;
  if (!menu) return <p className="menu-error">No se encontró el menú del día.</p>;

  const groupedPlatos = {
    primero: [],
    segundo: [],
    postre: [],
  };

  menu.menu_platos.forEach(({ tipo, plato }) => {
    if (groupedPlatos[tipo]) {
      groupedPlatos[tipo].push(plato);
    }
  });

  return (
    <div className="menu-container">
      <h1 className="menu-title">MENÚ DEL DÍA</h1>
      <p className="menu-subtitle">(Disponible de lunes a viernes – Laborables)</p>

      {['primero', 'segundo', 'postre'].map((tipo) => (
        <section className="menu-section" key={tipo}>
          <h2 className="menu-section-title">
            {tipo.toUpperCase()}S <span>(A elegir)</span>
          </h2>
          <ul>
            {groupedPlatos[tipo].map((plato, index) => (
              <li key={index}>{plato}</li>
            ))}
          </ul>
        </section>
      ))}

      <div className="menu-extra">
        <p>Incluye pan, bebida y café o infusión</p>
        <p className="menu-price">Precio: {menu.precio.toFixed(2)} € IVA incluido</p>
        <Link to="/restaurante" className="back-button">← Volver a Restaurante</Link>
      </div>
    </div>
  );
};

export default MenuDelDia;
