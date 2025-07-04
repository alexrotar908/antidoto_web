import React from 'react';
import './reservas.css';

const Terminos = () => {
  return (
    <div className="reservas-container">
      <select
        onChange={(e) => {
          document.getElementById('es').style.display = e.target.value === 'es' ? 'block' : 'none';
          document.getElementById('en').style.display = e.target.value === 'en' ? 'block' : 'none';
        }}
        style={{ marginBottom: '1.5rem', padding: '0.4rem' }}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>

      <div id="es">
        <h3>POLÍTICA DE CANCELACIÓN</h3>
        <p>Una vez hecha la reserva a través del motor web recibirá un correo electrónico confirmando la validez de la misma con toda la información correspondiente.</p>
        <p>Si desea modificar la fecha de reserva o el número de comensales, su petición será atendida siempre y cuando se realice con una antelación mínima de la hora concertada, y si existen plazas disponibles. Puede llevar a cabo el trámite llamando al teléfono del restaurante.</p>
        <p>Le comunicamos que días antes de la fecha y hora reservada, recibirá un mail o SMS donde deberá reconfirmar o cancelar la reserva en los enlaces que están habilitados para tal efecto, si existieran.</p>
        <p>Sólo una vez reconfirmada la reserva por usted desde el email o sms, tendrá su reserva completamente confirmada.</p>
        <p>Si lo prefiere puede llevar a cabo la confirmación llamando al teléfono del restaurante antes de la fecha de reserva.</p>
        <p>En caso que los comensales no se presentaran, no existiera aviso alguno por su parte o no cancelen con un mínimo de horas de antelación a la hora reservada, se procedería a cobrar el importe correspondiente por persona, en caso de que la reserva llevara una política de cancelación asociada.</p>

        <p>Le esperamos.</p>

        <hr />

        <h3>AVISO LEGAL</h3>
        <p><strong>En cumplimiento del REGLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO Y DEL CONSEJO</strong> de 27 de abril de 2016 sobre protección de datos personales, le informamos que con el fin de gestionar su reserva y remitirle información comercial, se requiere su consentimiento para el tratamiento de datos personales.</p>
        <p>Podrá ejercer sus derechos de acceso, rectificación, cancelación, oposición, portabilidad y olvido enviando un escrito con copia de su DNI al restaurante o por correo electrónico.</p>
      </div>

      <div id="en" style={{ display: 'none' }}>
        <h3>CANCELLATION POLICY</h3>
        <p>Once you make a reservation through the web engine, you will receive a confirmation email with all necessary details.</p>
        <p>If you want to modify the date or number of guests, please call the restaurant in advance to check availability.</p>
        <p>You will receive a message or email days before to reconfirm or cancel your booking.</p>
        <p>Your reservation is only fully confirmed once reconfirmed through those means.</p>
        <p>If you don’t show up or cancel in time, a charge per person may apply if a cancellation policy is in place.</p>

        <p>We look forward to welcoming you.</p>

        <hr />

        <h3>LEGAL NOTICE</h3>
        <p><strong>In compliance with REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT</strong>, we inform you that to manage your reservation and send commercial info, personal data processing is required.</p>
        <p>You may exercise your legal rights by sending a signed letter with ID to the restaurant or via email.</p>
      </div>
    </div>
  );
};

export default Terminos;
