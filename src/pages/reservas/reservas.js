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
        'https://clase-easypanel-1-n8n.dxqu9z.easypanel.host/webhook-test/reserva_antidoto',
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
          />
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
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