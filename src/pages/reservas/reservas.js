import React, { useState } from 'react';
import '../reservas/reservas.css';
import { useTranslation } from 'react-i18next';

const Reservas = () => {
  const { t } = useTranslation();

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
  const [consienteDatos, setConsienteDatos] = useState(false);
  const [errorTerminos, setErrorTerminos] = useState('');
  const [errorDatos, setErrorDatos] = useState('');

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
      setErrorTelefono(t('reservas.errorTelefono'));
      return;
    }
    setErrorTelefono('');

    if (!esEmailValido(formData.email)) {
      setErrorEmail(t('reservas.errorEmail'));
      return;
    }
    setErrorEmail('');

    if (!aceptaTerminos) {
      setErrorTerminos(t('reservas.errorTerminos'));
      return;
    }
    setErrorTerminos('');

    if (!consienteDatos) {
      setErrorDatos(t('reservas.errorDatos'));
      return;
    }
    setErrorDatos('');

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
        setConsienteDatos(false);
      } else {
        alert(t('reservas.errorEnvio'));
      }
    } catch (err) {
      console.error(err);
      alert(t('reservas.errorConexion'));
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
      <h2>{t('reservas.titulo')}</h2>
      {enviado ? (
        <p className="confirmacion">{t('reservas.confirmacion')}</p>
      ) : (
        <form onSubmit={handleSubmit} className="reserva-form">
          <input type="text" name="nombre" placeholder={t('reservas.nombre')} value={formData.nombre} onChange={handleChange} required />
          <input type="tel" name="telefono" placeholder={t('reservas.telefono')} value={formData.telefono} onChange={handleChange} required />
          {errorTelefono && <p className="error">{errorTelefono}</p>}
          <input type="email" name="email" placeholder={t('reservas.email')} value={formData.email} onChange={handleChange} required />
          {errorEmail && <p className="error">{errorEmail}</p>}
          <input type="number" name="personas" placeholder={t('reservas.personas')} value={formData.personas} onChange={handleChange} required min="1" />
          <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required min={today} />
          <select name="hora" value={formData.hora} onChange={handleChange} required>
            <option value="">{t('reservas.seleccionaHora')}</option>
            {getOpcionesHora().map((hora) => (
              <option key={hora} value={hora}>{hora}</option>
            ))}
          </select>
          <textarea name="comentarios" placeholder={t('reservas.comentarios')} value={formData.comentarios} onChange={handleChange} />

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={aceptaTerminos}
              onChange={(e) => setAceptaTerminos(e.target.checked)}
            />
            &nbsp; {t('reservas.aceptaTerminos')}&nbsp;
            <a href="/terminos" target="_blank" rel="noopener noreferrer">{t('reservas.terminos')}</a>
          </label>
          {errorTerminos && <p className="error">{errorTerminos}</p>}

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={consienteDatos}
              onChange={(e) => setConsienteDatos(e.target.checked)}
            />
            &nbsp; {t('reservas.consienteDatos')}&nbsp;
            <a href="/consentimiento" target="_blank" rel="noopener noreferrer">{t('reservas.tratamientoDatos')}</a>
          </label>
          {errorDatos && <p className="error">{errorDatos}</p>}

          <button type="submit">{t('reservas.boton')}</button>
        </form>
      )}
    </div>
  );
};

export default Reservas;
