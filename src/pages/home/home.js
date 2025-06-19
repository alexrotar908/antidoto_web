import React from 'react';
import '../home/home.css';
import logo from '../../imagen_icono/icono_antidoto.jpeg'
import barImage from '../imagenes/bar.jpg';

function Home() {
  return (

    <section className="home-section">
      <div className="home-content">
        <img src={logo} alt="Logo Antídoto" className="home-logo" />
        <h1 className="home-title">Bienvenidos a Antídoto</h1>
        <p className="home-subtitle">El sabor de Madrid en cada sorbo y bocado</p>
        <button className="home-button" onClick={() => window.location.href = '/restaurante'}>
          Restaurante
        </button>
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
