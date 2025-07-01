import React, { useEffect, useState } from 'react';
import { serviciosVino } from '../utils/serviciosVino';

export default function VinoSection() {
 // Estados tostas y bocadillos
   const [categoriaVino, setCategoriaVino] = useState('burbujas');
   const [platosVino, setPlatosVino] = useState([]);
   const [nuevoVino, setNuevoVino] = useState({ tipo: '', tipo_es: '', tipo_en: '', precio: '' })
 

useEffect(() => {
  const servicio = serviciosVino[categoriaVino];
  if (servicio && typeof servicio.get === 'function') {
    servicio.get().then(setPlatosVino);
  } else {
    console.error(`No se encontró la categoría "${categoriaVino}" en serviciosVino`);
    setPlatosVino([]);
  }

  setNuevoVino({ tipo: '',  tipo_es: '', tipo_en: '', precio: '' });
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
    tipo_es: item.tipo_es || '',
    tipo_en: item.tipo_en || '',
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
    tipo_es: nuevoVino.tipo_es.trim(),
    tipo_en: nuevoVino.tipo_en.trim(),
    precio: parseFloat(nuevoVino.precio)
  };

  try {
    const creado = await serviciosVino[categoriaVino].add(payload);
    if (creado) {
      setPlatosVino(prev => [...prev, creado]);
          setNuevoVino({
            tipo: '',
            tipo_es: '',
            tipo_en: '',
            precio: '',
          });
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
          {(categoriaVino === 'burbujas' ||
            categoriaVino === 'blanco' ||
            categoriaVino === 'rosado' ||
            categoriaVino === 'faena'
          ) && (
                    <>
                      <th>Tipo (ES)</th>
                      <th>Tipo (EN)</th>
                    </>
                  )}
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {platosVino.map(({ id, tipo, precio, tipo_es, tipo_en }) => (
          <tr key={id}>
            <td>
              <input
                type="text"
                value={tipo}
                onChange={e => handleChangeVino(e, id, 'tipo')}
              />
            </td>
            {(categoriaVino === 'burbujas' ||
            categoriaVino === 'blanco' ||
            categoriaVino === 'rosado' ||
            categoriaVino === 'faena') && (
                      <>
                        <td>
                          <input
                            type="text"
                            value={tipo_es || ''}
                            onChange={e => handleChangeVino(e, id, 'tipo_es')}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={tipo_en || ''}
                            onChange={e => handleChangeVino(e, id, 'tipo_en')}
                          />
                        </td>
                      </>
                    )}
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
          {(categoriaVino === 'burbujas' ||
            categoriaVino === 'blanco' ||
            categoriaVino === 'rosado' ||
            categoriaVino === 'faena') && (
                    <>
                      <td>
                        <input
                          type="text"
                          placeholder="Nuevo tipo (ES)"
                          value={nuevoVino.tipo_es}
                          onChange={e => setNuevoVino(prev => ({ ...prev, tipo_es: e.target.value }))}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Nuevo tipo (EN)"
                          value={nuevoVino.tipo_en}
                          onChange={e => setNuevoVino(prev => ({ ...prev, tipo_en: e.target.value }))}
                        />
                      </td>
                    </>
                  )}
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
  