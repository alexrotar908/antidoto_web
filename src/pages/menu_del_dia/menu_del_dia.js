// src/components/MenuDelDia.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../menu_del_dia/menu_del_dia.css';

const MenuDelDia = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">MENÚ DEL DÍA</h1>
      <p className="menu-subtitle">(Disponible de lunes a viernes – Laborables)</p>

      <section className="menu-section">
        <h2 className="menu-section-title">PRIMEROS <span>(A elegir)</span></h2>
        <ul>
          <li>Ensalada de tomate rosa con ventresca y aceite de albahaca</li>
          <li>Crema de calabaza con picatostes</li>
          <li>Espaguetis a la carbonara (sin nata)</li>
          <li>Revuelto de setas con jamón ibérico</li>
        </ul>
      </section>

      <section className="menu-section">
        <h2 className="menu-section-title">SEGUNDOS <span>(A elegir)</span></h2>
        <ul>
          <li>Pollo al horno con limón y hierbas provenzales</li>
          <li>Filete de merluza a la plancha con guarnición</li>
          <li>Albóndigas caseras en salsa de almendras</li>
          <li>Lasaña de verduras gratinada</li>
        </ul>
      </section>

      <section className="menu-section">
        <h2 className="menu-section-title">POSTRES <span>(A elegir)</span></h2>
        <ul>
          <li>Fruta del día</li>
          <li>Flan casero de huevo</li>
          <li>Yogur natural con miel</li>
          <li>Brownie de chocolate</li>
        </ul>
      </section>

      <div className="menu-extra">
        <p>Incluye pan, bebida y café o infusión</p>
        <p className="menu-price">Precio: 12,90 € IVA incluido</p>
        <Link to="/restaurante" className="back-button">← Volver a Restaurante</Link>
      </div>
    </div>
  );
};

export default MenuDelDia;
