import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './gestionarReserva.css';

const GestionReserva = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [reserva, setReserva] = useState(null);

  useEffect(() => {
    if (id) {
      // Reemplaza esta URL con la correcta de tu API o NocoDB
      fetch(`https://clase-easypanel-1-nocodb.dxqu9z.easypanel.host/api/v2/tables/mhpl3fkpiz61oi6/records/${id}`, {
headers: {
    'accept': 'application/json',
    'xc-token': 'WJRRoqdCbhMzQqbRYMw6M-UzaMI7yobrd1S8izdN'
  }
})
  .then((res) => res.json())
  .then((data) => { console.log("DATA RECIBIDA:", data); setReserva(data);})
  .catch((err) => console.error('Error al cargar la reserva:', err));
    }
  }, [id]);

  return (
    <div className="gestion-container">
      <h2>Gestión de Reserva</h2>
      {reserva ? (
        <div className="reserva-box">
          <p>Detalles de la reserva:</p>
          <h3>
            {reserva.fecha} | {reserva.hora} | {reserva.personas} personas
          </h3>
          <p><strong>¿Qué desea hacer con la reserva?</strong></p>
          <div className="botones">
            <button className="confirmar">Confirmar reserva</button>
            <button className="cancelar">Cancelar reserva</button>
          </div>
        </div>
      ) : (
        <p>Cargando reserva o ID inválido.</p>
      )}
    </div>
  );
};

export default GestionReserva;
