import React, { useState } from 'react';
import '../reservas/reservas.css';

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
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [errorTerminos, setErrorTerminos] = useState('');

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

    if (!aceptaTerminos) {
      setErrorTerminos('Debe aceptar los términos y condiciones para continuar.');
      return;
    }
    setErrorTerminos('');

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
        setAceptaTerminos(false);
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
    const diaSemana = fechaSeleccionada.getDay();

    let horaApertura = 0;
    let horaCierre = 23;

    if (diaSemana >= 1 && diaSemana <= 5) {
      horaApertura = 8;
      horaCierre = 24;
    } else if (diaSemana === 6) {
      horaApertura = 10;
      horaCierre = 24;
    } else if (diaSemana === 0) {
      horaApertura = 10;
      horaCierre = 17;
    }

    let horaInicio = horaApertura;
    let minutoInicio = 0;

    if (formData.fecha === hoy) {
      ahora.setHours(ahora.getHours() + 1);
      const proximaHora = ahora.getHours();
      const proximoMinuto = ahora.getMinutes();

      if (proximaHora > horaApertura || (proximaHora === horaApertura && proximoMinuto > 0)) {
        horaInicio = proximaHora;
        minutoInicio = proximoMinuto;
      }
    }

    for (let h = horaInicio; h < horaCierre; h++) {
      for (let m of [0, 15, 30, 45]) {
        if (h > horaInicio || (h === horaInicio && m >= minutoInicio)) {
          const hh = String(h).padStart(2, '0');
          const mm = String(m).padStart(2, '0');
          opciones.push(`${hh}:${mm}`);
        }
      }
    }

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
          <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
          <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
          {errorTelefono && <p className="error">{errorTelefono}</p>}
          <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
          {errorEmail && <p className="error">{errorEmail}</p>}
          <input type="number" name="personas" placeholder="Personas" value={formData.personas} onChange={handleChange} required min="1" />
          <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required min={today} />
          <select name="hora" value={formData.hora} onChange={handleChange} required>
            <option value="">Selecciona una hora</option>
            {getOpcionesHora().map((hora) => (
              <option key={hora} value={hora}>{hora}</option>
            ))}
          </select>
          <textarea name="comentarios" placeholder="Comentarios especiales (opcional)" value={formData.comentarios} onChange={handleChange} />

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={aceptaTerminos}
              onChange={(e) => setAceptaTerminos(e.target.checked)}
            />
            &nbsp; He leído y acepto los <a href="/terminos" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
          </label>
          {errorTerminos && <p className="error">{errorTerminos}</p>}

          <button type="submit">Reservar</button>
        </form>
      )}
    </div>
  );
};

export default Reservas;
