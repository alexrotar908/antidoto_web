import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './gestionarReserva.css';

const GestionReserva = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [reserva, setReserva] = useState(null);
  const [estadoReserva, setEstadoReserva] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://clase-easypanel-1-nocodb.dxqu9z.easypanel.host/api/v2/tables/mhpl3fkpiz61oi6/records/${id}`, {
        headers: {
          'accept': 'application/json',
          'xc-token': 'WJRRoqdCbhMzQqbRYMw6M-UzaMI7yobrd1S8izdN'
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("DATA RECIBIDA:", data);
          setReserva(data);
          setEstadoReserva(data.Estado); // si ya existe
        })
        .catch((err) => console.error('Error al cargar la reserva:', err));
    }
  }, [id]);

  const actualizarEstado = (nuevoEstado) => {
    fetch(`https://clase-easypanel-1-nocodb.dxqu9z.easypanel.host/api/v2/tables/mhpl3fkpiz61oi6/records/${id}`, {
      method: 'PATCH',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'xc-token': 'WJRRoqdCbhMzQqbRYMw6M-UzaMI7yobrd1S8izdN'
      },
      body: JSON.stringify({ Estado: nuevoEstado })
    })
      .then((res) => res.json())
      .then(() => {
        setEstadoReserva(nuevoEstado);
      })
      .catch((err) => console.error('Error al actualizar estado:', err));
  };

  const confirmarReserva = () => {
    actualizarEstado('confirmada');
  };

  const cancelarReserva = () => {
    actualizarEstado('cancelada');
  };

  return (
    <div className="gestion-container">
      <h2>Gestión de Reserva</h2>
      {reserva ? (
        <div className="reserva-box">
          <p>Detalles de la reserva:</p>
          <h3>
            {reserva.Fecha} | {reserva.Hora} | {reserva.Personas} personas
          </h3>

          {estadoReserva === null ? (
            <>
              <p><strong>¿Qué desea hacer con la reserva?</strong></p>
              <div className="botones">
                <button className="confirmar" onClick={confirmarReserva}>Confirmar reserva</button>
                <button className="cancelar" onClick={cancelarReserva}>Cancelar reserva</button>
              </div>
            </>
          ) : (
            <h3>
              {estadoReserva === 'confirmada' ? 'Reserva confirmada' : 'Reserva cancelada'}
            </h3>
          )}
        </div>
      ) : (
        <p>Cargando reserva o ID inválido.</p>
      )}
    </div>
  );
};

export default GestionReserva;
