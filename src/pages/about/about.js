import React from 'react';
import '../about/about.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="sobre-nosotros-layout">
      <div className="columna izquierda">
        <h1 className="titulos">{t('about.title')}</h1>
        <h2 className="subtitulos">{t('about.history')}</h2>
        <p>{t('about.historyText')}</p>

        <h2 className="subtitulos">{t('about.philosophy')}</h2>
        <p>{t('about.philosophyText')}</p>

        <h2 className="subtitulos">{t('about.founders')}</h2>
        <p>{t('about.founderText')}</p>

        <h2 className="subtitulos">{t('about.visitUs')}</h2>
        <p>{t('about.quote')}</p>
        <p>{t('about.visitText1')}</p>
        <p>{t('about.visitText2')}</p>
        <p>{t('about.visitText3')}</p>
      </div>

      <div className="columna derecha">
        <h2 className="subtitulos">{t('about.hours')}</h2>
        <p><strong>{t('about.weekdays')}:</strong> 08:00 AM - 12:00 AM</p>
        <p><strong>{t('about.saturday')}:</strong> 10:00 AM - 12:00 AM</p>
        <p><strong>{t('about.sunday')}:</strong> 10:00 AM - 05:00 PM</p>

        <h2 className="subtitulos">{t('about.contact')}</h2>
        <p>{t('about.reservations')}: 917 17 76 28</p>
        <p>{t('about.phone')}: 681 949 442</p>
        <p>E-mail: antidoto1973@gmail.com </p>

        <h2 className="subtitulos">{t('about.location')}</h2>
        <p>C/ de Baeza, 11, Chamartín, 28002 Madrid</p>

        <div className="mapa-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8336319303746!2d-3.6760209241530273!3d40.45913025451811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422908f0e3c92d%3A0x5c6e85c205a7f0d5!2sCalle%20de%20Baeza%2C%2011%2C%2028002%20Madrid!5e0!3m2!1ses!2ses!4v1719243345944!5m2!1ses!2ses"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa del restaurante Antídoto"
          ></iframe>
        </div>

        <h2 className="reportaje-titulo">{t('about.reportTitle')}</h2>
        <p>
          <a
            href="/reportaje_antidoto_bar_restaurante_cristina_tatu_maties.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            {t('about.reportLink')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
