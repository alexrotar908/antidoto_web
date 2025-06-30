import React from 'react';
import '../about/about.css';

const About = () => {
  return (
    <div className="sobre-nosotros-layout">
      <div className="columna izquierda">
        <h1 className="titulos">Sobre Nosotros</h1>
        <h2 className="subtitulos">Historia</h2>
        <p>
          Antídoto nació en el corazón de Madrid en el barrio de la concepción.
        </p>

        <h2 className="subtitulos">Filosofía</h2>
        <p>
          Creemos en el poder de la buena comida, el buen trato y los espacios que invitan a quedarse. Antídoto no es solo un lugar para comer o tomar algo, es un punto de encuentro para disfrutar, compartir y desconectar.
        </p>

        <h2 className="subtitulos">Fundadores</h2>
        <p>
          Fundador: Cristina Tatu Maties
        </p>

          <h2 className="subtitulos">Ven a conocernos</h2>
        <p>“Dicen que el vino es el único arte que se puede beber”.</p>
        <p>
          Estás cerca, ven a conocernos, estamos en la calle Baeza 11 en Chamartín.
        </p>
        <p>
          Cada persona es un mundo, nosotros te acompañamos para que tus reuniones familiares o las magníficas quedadas de amigos sean especiales.
        </p>
        <p>
          La cerveza fría, la variedad de vinos y los platos tradicionales con un sabor exquisito harán que los momentos sean únicos...
        </p>
      </div>

      <div className="columna derecha">
        <h2 className="subtitulos">Horario</h2>
        <p><strong>Lunes a Viernes:</strong> 08:00 AM - 12:00 AM</p>
        <p><strong>Sábado:</strong> 10:00 AM - 12:00 AM</p>
        <p><strong>Domingo:</strong> 10:00 AM - 05:00 PM</p>

        <h2 className="subtitulos">Contacto</h2>
        <p>Reservas: 917 17 76 28</p>
        <p>Teléfono: 681 949 442</p>
        <p>E-mail: antidoto1973@gmail.com </p>

        <h2 className="subtitulos">Ubicación</h2>
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

        {/* Opción 1: Enlace para descargar o abrir el PDF */}
        <h2 className="reportaje-titulo">
          REPORTAJE "ANTÍDOTO BAR RESTAURANTE" <br />Javier Hernández
        </h2>
        <p>
         <a href="/reportaje_antidoto_bar_restaurante_cristina_tatu_maties.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
           Ver el reportaje en PDF
         </a>
        </p>

      </div>
    </div>
  );
};

export default About;
