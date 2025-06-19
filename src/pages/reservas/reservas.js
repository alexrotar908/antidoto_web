import React, { useState } from 'react';
import '../reservas/reservas.css'; // 👈 Asegúrate de tener este archivo en el mismo directorio

const Reservas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    personas: '',
    fecha: '',
    hora: '',
    comentarios: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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