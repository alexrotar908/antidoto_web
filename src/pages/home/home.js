import React from 'react';
import { useTranslation } from 'react-i18next';
import '../home/home.css';
import logo from '../../imagen_icono/icono_antidoto.jpeg';
import barImage from '../imagenes/bar_imagen.jpg';

function Home() {
  const { t } = useTranslation();

  return (
    <section className="home-section">
      <div className="home-content">
        <img src={logo} alt="Logo Antídoto" className="home-logo" />
        <div className="home-info">
          <h1 className="home-title">{t('home.welcome')}</h1>
          <p className="home-subtitle">{t('home.subtitle')}</p>
          <button
            className="home-button"
            onClick={() => window.location.href = '/restaurante'}
          >
            {t('home.restaurantButton')}
          </button>
        </div>
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
