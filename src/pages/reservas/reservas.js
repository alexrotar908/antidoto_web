import React, { useState } from 'react';
import '../reservas/reservas.css'; // 👈 Asegúrate de tener este archivo en el mismo directorio

const Reservas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    personas: '',
    fecha: '',
    hora: '',
    comentarios: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [errorTelefono, setErrorTelefono] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const esTelefonoValido = (telefono) => {
    const regex = /^(?:\+34|0034)?[6789]\d{8}$/;
    return regex.test(telefono);
  };

  const esEmailValido = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (!esTelefonoValido(formData.telefono)) {
      setErrorTelefono('Por favor, introduce un número de teléfono español válido.');
      return;
    }

    setErrorTelefono('');

    if (!esEmailValido(formData.email)) {
  setErrorEmail('Por favor, introduce un correo electrónico válido.');
  return;
    }
    
    setErrorEmail('');

    try {
      const res = await fetch(
        'https://clase-easypanel-1-n8n.dxqu9z.easypanel.host/webhook/reserva_antidoto',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setEnviado(true);
        setFormData({
          nombre: '',
          telefono: '',
          email: '',
          personas: '',
          fecha: '',
          hora: '',
          comentarios: '',
        });
      } else {
        alert('Error al enviar la reserva. Inténtalo más tarde.');
      }
    } catch (err) {
      console.error(err);
      alert('Error de conexión. Inténtalo más tarde.');
    }
  };

  const today = new Date().toISOString().split('T')[0];
 
   const getOpcionesHora = () => {
  const opciones = [];
  const ahora = new Date();
  const hoy = today;
  const fechaSeleccionada = new Date(formData.fecha);
  const diaSemana = fechaSeleccionada.getDay(); // 0: domingo, 6: sábado

  let horaApertura = 0;
  let horaCierre = 23;

  // Definir rango de apertura por día de la semana
  if (diaSemana >= 1 && diaSemana <= 5) { // lunes a viernes
    horaApertura = 8;
    horaCierre = 24;
  } else if (diaSemana === 6) { // sábado
    horaApertura = 10;
    horaCierre = 24;
  } else if (diaSemana === 0) { // domingo
    horaApertura = 10;
    horaCierre = 17;
  }

  let horaInicio = horaApertura;
  let minutoInicio = 0;

  if (formData.fecha === hoy) {
    ahora.setHours(ahora.getHours() + 1);
    const proximaHora = ahora.getHours();
    const proximoMinuto = ahora.getMinutes();

    // Asegurarse que no sea antes del horario de apertura
    if (proximaHora > horaApertura || (proximaHora === horaApertura && proximoMinuto > 0)) {
      horaInicio = proximaHora;
      minutoInicio = proximoMinuto;
    }
  }

  for (let h = horaInicio; h < horaCierre; h++) {
    for (let m of [0, 15, 30, 45]) {
      if (
        h > horaInicio || 
        (h === horaInicio && m >= minutoInicio)
      ) {
        const hh = String(h).padStart(2, '0');
        const mm = String(m).padStart(2, '0');
        opciones.push(`${hh}:${mm}`);
      }
    }
  }

  // Agregar 00:00 si está abierto hasta las 00:00
  if (horaCierre === 24 && (horaInicio <= 23 || formData.fecha !== hoy)) {
    opciones.push("00:00");
  }

  return opciones;
};


  return (

    <div className="reservas-container">

      <h2>Reserva tu mesa</h2>
      {enviado ? (
        <p className="confirmacion">¡Gracias por reservar! Te contactaremos pronto.</p>
      ) : (
        <form onSubmit={handleSubmit} className="reserva-form">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
          {errorTelefono && <p className="error">{errorTelefono}</p>}
          <input
           type="email"
           name="email"
           placeholder="Correo electrónico"
           value={formData.email}
           onChange={handleChange}
           required
           />
           {errorEmail && <p className="error">{errorEmail}</p>}
          <input
            type="number"
            name="personas"
            placeholder="Personas"
            value={formData.personas}
            onChange={handleChange}
            required
            min="1"
          />
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
            min={today}
          />
          <select
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una hora</option>
            {getOpcionesHora().map((hora) => (
              <option key={hora} value={hora}>{hora}</option>
            ))}
          </select>
          <textarea
            name="comentarios"
            placeholder="Comentarios especiales (opcional)"
            value={formData.comentarios}
            onChange={handleChange}
          />
          <button type="submit">Reservar</button>
        </form>
      )}
    </div>
  );
};

export default Reservas;