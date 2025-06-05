import React from 'react';
import './home.css';
import logo from '../imagenes/logo.jpg';
import barImage from '../imagenes/bar.jpg';

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <img src={logo} alt="Logo Antídoto" className="home-logo" />
        <h1 className="home-title">Bienvenidos a Antídoto</h1>
        <p className="home-subtitle">El sabor de Madrid en cada sorbo y bocado</p>
        <p className="home-hours">
          <strong>Horario:</strong>
           <br />Lunes a Viernes: 8:00 – 00:00
           <br />Sábados: 10:00 – 00:00
          <br /> Domingos: 10:00 – 17:00
        </p>
        <button className="home-button" onClick={() => window.location.href = '/menu'}>
          Ver Menú
        </button>
         <a href="tel:+34917177628" className="home-call-button">📞 Llamar</a>
      </div>
      <div className="home-image-container">
        <img 
          src={barImage}
          alt="Bar Antídoto"
          className="home-image"
        />
      </div>
    </section>
  );
}

export default Home;
