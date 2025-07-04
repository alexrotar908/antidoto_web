import React from 'react';
import './consentimiento.css';

const Consentimiento = () => {
  const mostrarIdioma = (idioma) => {
    document.getElementById('consent-es').style.display = idioma === 'es' ? 'block' : 'none';
    document.getElementById('consent-en').style.display = idioma === 'en' ? 'block' : 'none';
  };

  return (
    <div className="consentimiento-container">
      <select onChange={(e) => mostrarIdioma(e.target.value)} className="idioma-selector">
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>

      <div id="consent-es">
        <h3>Información básica sobre Protección de datos de carácter personal</h3>
        <p>En cumplimiento del Reglamento General de Protección de Datos de Carácter Personal, se informa al interesado de lo siguiente:</p>

        <h4>RESPONSABLE DEL TRATAMIENTO</h4>
        <p><strong>Identidad:</strong> Cristina Tatu Maties</p>
        <p><strong>Dirección postal:</strong> Calle de Baeza, 11, Chamartín, 28002 Madrid</p>
        <p><strong>NIE:</strong> X6689207W</p>
        <p><strong>Correo electrónico:</strong> antidoto_bar_restaurante11@antidotobarrestaurante.com</p>
        <p><strong>Página web:</strong> <a href="https://www.antidotobarrestaurante.com" target="_blank" rel="noreferrer">https://www.antidotobarrestaurante.com/</a></p>

        <h4>FINALIDAD DEL TRATAMIENTO</h4>
        <p>Se tratarán los datos para la gestión de la reserva, la prestación del servicio y prospección comercial, así como para evitar duplicidades con otros restaurantes.</p>
        <p>Los datos se conservarán mientras no se solicite su supresión o dejen de ajustarse a la finalidad para la que fueron recabados.</p>

        <h4>LEGITIMACIÓN</h4>
        <ul>
          <li>Consentimiento inequívoco y expreso</li>
          <li>Ejecución de un contrato o medidas precontractuales</li>
          <li>Interés legítimo</li>
          <li>Seguimiento de obligaciones legales</li>
        </ul>

        <h4>DERECHOS</h4>
        <ul>
          <li><strong>Acceso:</strong> saber si se tratan sus datos</li>
          <li><strong>Rectificación:</strong> modificar datos inexactos</li>
          <li><strong>Oposición:</strong> dejar de tratarlos</li>
          <li><strong>Supresión:</strong> eliminarlos</li>
          <li><strong>Limitación:</strong> evitar su modificación o supresión</li>
          <li><strong>Portabilidad:</strong> obtenerlos en formato estructurado</li>
        </ul>
        <p><strong>¿Cómo ejercer sus derechos?</strong></p>
        <p>Por escrito a Calle de Baeza, 11, Chamartín, 28002 Madrid, o por email a <a href="mailto:antidoto_bar_restaurante11@antidotobarrestaurante.com">antidoto_bar_restaurante11@antidotobarrestaurante.com</a></p>
        <p>También puede presentar una reclamación ante la AEPD: <a href="https://www.agpd.es" target="_blank" rel="noreferrer">www.agpd.es</a></p>
      </div>

      <div id="consent-en" style={{ display: 'none' }}>
        <h3>Basic Information on Personal Data Protection</h3>
        <p>In compliance with the General Data Protection Regulation, the following is informed to the user:</p>

        <h4>DATA CONTROLLER</h4>
        <p><strong>Name:</strong> Cristina Tatu Maties</p>
        <p><strong>Address:</strong> Calle de Baeza, 11, Chamartín, 28002 Madrid</p>
        <p><strong>ID:</strong> X6689207W</p>
        <p><strong>Email:</strong> antidoto_bar_restaurante11@antidotobarrestaurante.com</p>
        <p><strong>Website:</strong> <a href="https://www.antidotobarrestaurante.com" target="_blank" rel="noreferrer">https://www.antidotobarrestaurante.com/</a></p>

        <h4>PURPOSE OF DATA PROCESSING</h4>
        <p>Data will be used for booking management, service provision, and commercial communication. Also to avoid duplicates with restaurants sharing booking software.</p>

        <h4>LEGAL BASIS</h4>
        <ul>
          <li>Explicit and informed consent</li>
          <li>Contract execution or precontractual measures</li>
          <li>Legitimate interest</li>
          <li>Legal compliance</li>
        </ul>

        <h4>RIGHTS</h4>
        <ul>
          <li><strong>Access:</strong> know if data is being processed</li>
          <li><strong>Rectification:</strong> correct inaccurate data</li>
          <li><strong>Opposition:</strong> stop data processing</li>
          <li><strong>Erasure:</strong> delete your data</li>
          <li><strong>Restriction:</strong> limit modification or deletion</li>
          <li><strong>Portability:</strong> receive data in a clear format</li>
        </ul>
        <p><strong>How to exercise these rights?</strong></p>
        <p>Write to Calle de Baeza, 11, Chamartín, 28002 Madrid or email: <a href="mailto:antidoto_bar_restaurante11@antidotobarrestaurante.com">antidoto_bar_restaurante11@antidotobarrestaurante.com</a></p>
        <p>Or file a claim with the Spanish Data Protection Agency: <a href="https://www.agpd.es" target="_blank" rel="noreferrer">www.agpd.es</a></p>
      </div>
    </div>
  );
};

export default Consentimiento;
