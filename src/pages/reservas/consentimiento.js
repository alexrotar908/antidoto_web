import React from 'react';
import './consentimiento.css';
import { useTranslation } from 'react-i18next';

const Consentimiento = () => {
  const { t } = useTranslation();

  return (
    <div className="consentimiento-container">
      <h3>{t('consent.titulo')}</h3>
      <p>{t('consent.intro')}</p>

      <h4>{t('consent.responsableTitulo')}</h4>
      <p><strong>{t('consent.identidad')}:</strong> Cristina Tatu Maties</p>
      <p><strong>{t('consent.direccion')}:</strong> Calle de Baeza, 11, Chamartín, 28002 Madrid</p>
      <p><strong>{t('consent.nie')}:</strong> X6689207W</p>
      <p><strong>{t('consent.email')}:</strong> antidoto_bar_restaurante11@antidotobarrestaurante.com</p>
      <p><strong>{t('consent.web')}:</strong> <a href="https://www.antidotobarrestaurante.com" target="_blank" rel="noreferrer">https://www.antidotobarrestaurante.com/</a></p>

      <h4>{t('consent.finalidadTitulo')}</h4>
      <p>{t('consent.finalidad1')}</p>
      <p>{t('consent.finalidad2')}</p>

      <h4>{t('consent.legitimacion')}</h4>
      <ul>
        <li>{t('consent.legit1')}</li>
        <li>{t('consent.legit2')}</li>
        <li>{t('consent.legit3')}</li>
        <li>{t('consent.legit4')}</li>
      </ul>

      <h4>{t('consent.derechosTitulo')}</h4>
      <ul>
        <li><strong>{t('consent.derecho1')}:</strong> {t('consent.derecho1desc')}</li>
        <li><strong>{t('consent.derecho2')}:</strong> {t('consent.derecho2desc')}</li>
        <li><strong>{t('consent.derecho3')}:</strong> {t('consent.derecho3desc')}</li>
        <li><strong>{t('consent.derecho4')}:</strong> {t('consent.derecho4desc')}</li>
        <li><strong>{t('consent.derecho5')}:</strong> {t('consent.derecho5desc')}</li>
        <li><strong>{t('consent.derecho6')}:</strong> {t('consent.derecho6desc')}</li>
      </ul>

      <p><strong>{t('consent.comoEjercer')}</strong></p>
      <p>{t('consent.contacto')}</p>
      <p>{t('consent.reclamacion')} <a href="https://www.agpd.es" target="_blank" rel="noreferrer">www.agpd.es</a></p>
    </div>
  );
};

export default Consentimiento;
