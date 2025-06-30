import React, { useEffect, useState } from 'react';
import { serviciosVino } from '../utils/serviciosVino';

export default function VinoSection() {
 // Estados tostas y bocadillos
   const [categoriaVino, setCategoriaVino] = useState('vino');
   const [platosVino, setPlatosVino] = useState([]);
   const [nuevoVino, setNuevoVino] = useState({ tipo: '', precio: '' })
 

useEffect(() => {
  const servicio = serviciosVino[categoriaVino];
  if (servicio && typeof servicio.get === 'function') {
    servicio.get().then(setPlatosVino);
  } else {
    console.error(`No se encontró la categoría "${categoriaVino}" en serviciosVino`);
    setPlatosVino([]);
  }

  setNuevoVino({ tipo: '', precio: '' });
}, [categoriaVino]);

  // Handler Tostas y Bocadillos
const handleChangeVino = (e, id, field) => {
  const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  setPlatosVino(prev =>
    prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
  );
};

// Guardar sin alert
const handleGuardarVino = async (id) => {
  const item = platosVino.find(i => i.id === id);
  if (!item) return;

  const payload = {
    tipo: item.tipo,
    precio: parseFloat(item.precio)
  };

  try {
    await serviciosVino[categoriaVino].update(id, payload);
  } catch (error) {
    console.error('Error al guardar vino:', error);
  }
};

// Eliminar sin confirmación
const handleEliminarVino = async (id) => {
  try {
    await serviciosVino[categoriaVino].delete(id);
    setPlatosVino(prev => prev.filter(i => i.id !== id));
  } catch (error) {
    console.error('Error al eliminar vino:', error);
  }
};

// Crear nuevo item
const handleCrearVino = async () => {
  if (!nuevoVino.tipo.trim() || !nuevoVino.precio) return;

  const payload = {
    tipo: nuevoVino.tipo.trim(),
    precio: parseFloat(nuevoVino.precio)
  };

  try {
    const creado = await serviciosVino[categoriaVino].add(payload);
    if (creado) {
      setPlatosVino(prev => [...prev, creado]);
      setNuevoVino({ tipo: '', precio: '' });
    }
  } catch (error) {
    console.error('Error al crear vino:', error);
  }
};
 

   return (

     <section>
  <h2>Vinos</h2>
  <label>
    Categoría:
    <select value={categoriaVino} onChange={e => setCategoriaVino(e.target.value)}>
      {Object.keys(serviciosVino).map(cat => (
        <option key={cat} value={cat}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </option>
      ))}
    </select>
  </label>

  <div className="tabla-admin">
    <table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {platosVino.map(({ id, tipo, precio }) => (
          <tr key={id}>
            <td>
              <input
                type="text"
                value={tipo}
                onChange={e => handleChangeVino(e, id, 'tipo')}
              />
            </td>
            <td>
              <input
                type="number"
                min="0"
                step="0.01"
                value={precio}
                onChange={e => handleChangeVino(e, id, 'precio')}
              />
            </td>
            <td>
              <button className="btn-guardar" onClick={() => handleGuardarVino(id)}>Guardar</button>
              <button className="btn-eliminar" onClick={() => handleEliminarVino(id)}>Eliminar</button>
            </td>
          </tr>
        ))}

        {/* Fila para nuevo plato */}
        <tr>
          <td>
            <input
              type="text"
              placeholder="Nuevo tipo"
              value={nuevoVino.tipo}
              onChange={e => setNuevoVino(prev => ({ ...prev, tipo: e.target.value }))}
            />
          </td>
          <td>
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="Precio"
              value={nuevoVino.precio}
              onChange={e => setNuevoVino(prev => ({ ...prev, precio: e.target.value }))}
            />
          </td>
          <td>
            <button className="btn-crear" onClick={handleCrearVino}>Crear</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
      
    );
  }
  