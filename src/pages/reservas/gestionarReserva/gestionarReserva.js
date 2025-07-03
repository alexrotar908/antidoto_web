import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './GestionReserva.css'; // opcional para estilos

const GestionReserva = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="gestion-container">
      <h2>Gestión de Reserva</h2>
      {id ? (
        <div className="reserva-box">
          <p>Estás gestionando la reserva con ID: <strong>{id}</strong></p>
          <p>¿Qué deseas hacer con esta reserva?</p>
          <div className="botones">
            <button className="confirmar">✅ Confirmar</button>
            <button className="cancelar">❌ Cancelar</button>
          </div>
        </div>
      ) : (
        <p>No se ha especificado ninguna reserva.</p>
      )}
    </div>
  );
};

export default GestionReserva;
