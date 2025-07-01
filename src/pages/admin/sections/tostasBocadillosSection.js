import React, { useEffect, useState } from 'react';
import { serviciosTostasBocadillos } from '../utils/serviciosTostasBocadillos';

export default function TostasBocadillosSection() {
 // Estados tostas y bocadillos
   const [categoriaTostasBocadillos, setCategoriaTostasBocadillos] = useState('tostas');
   const [platosTostasBocadillos, setPlatosTostasBocadillos] = useState([]);
   const [nuevoTostasBocadillos, setNuevoTostasBocadillos] = useState({ tipo: '', tipo_es: '', tipo_en: '', precio: '' })
 

  useEffect(() => {
    // Obtener platos comida
    serviciosTostasBocadillos[categoriaTostasBocadillos].get().then(setPlatosTostasBocadillos);
    setNuevoTostasBocadillos({ tipo: '', tipo_es: '', tipo_en: '', precio: ''});
  }, [categoriaTostasBocadillos]);

  // Handler Tostas y Bocadillos
const handleChangeTostasBocadillos = (e, id, field) => {
  const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  setPlatosTostasBocadillos(prev =>
    prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
  );
};

// Guardar sin alert
const handleGuardarTostasBocadillos = async (id) => {
  const item = platosTostasBocadillos.find(i => i.id === id);
  if (!item) return;

  const payload = {
    tipo: item.tipo,
    tipo_es: item.tipo_es || '',
    tipo_en: item.tipo_en || '',
    precio: parseFloat(item.precio)
  };

  try {
    await serviciosTostasBocadillos[categoriaTostasBocadillos].update(id, payload);
  } catch (error) {
    console.error('Error al guardar tosta o bocadillo:', error);
  }

};

// Eliminar sin confirmación
const handleEliminarTostasBocadillos = async (id) => {
  try {
    await serviciosTostasBocadillos[categoriaTostasBocadillos].delete(id);
    setPlatosTostasBocadillos(prev => prev.filter(i => i.id !== id));
  } catch (error) {
    console.error('Error al eliminar tosta o bocadillo:', error);
  }
};

// Crear nuevo item
const handleCrearTostasBocadillos = async () => {
  if (!nuevoTostasBocadillos.tipo.trim() || !nuevoTostasBocadillos.precio) return;

  const payload = {
    tipo: nuevoTostasBocadillos.tipo.trim(),
    tipo_es: nuevoTostasBocadillos.tipo_es.trim(),
    tipo_en: nuevoTostasBocadillos.tipo_en.trim(),
    precio: parseFloat(nuevoTostasBocadillos.precio)
  };

  try {
    const creado = await serviciosTostasBocadillos[categoriaTostasBocadillos].add(payload);
    if (creado) {
      setPlatosTostasBocadillos(prev => [...prev, creado]);
          setNuevoTostasBocadillos({
            tipo: '',
            tipo_es: '',
            tipo_en: '',
            precio: '',
          });
    }
  } catch (error) {
    console.error('Error al crear tosta o bocadillo:', error);
  }

};
 

   return (

     <section>
  <h2>Tostas y Bocadillos</h2>
  <label>
    Categoría:
    <select value={categoriaTostasBocadillos} onChange={e => setCategoriaTostasBocadillos(e.target.value)}>
      {Object.keys(serviciosTostasBocadillos).map(cat => (
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
                  {(categoriaTostasBocadillos === 'bocadillos' ||
                    categoriaTostasBocadillos === 'tostas' ) && (
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
        {platosTostasBocadillos.map(({ id, tipo, precio, tipo_es, tipo_en}) => (
          <tr key={id}>
            <td>
              <input
                type="text"
                value={tipo}
                onChange={e => handleChangeTostasBocadillos(e, id, 'tipo')}
              />
            </td>
            {(categoriaTostasBocadillos === 'bocadillos' ||
                    categoriaTostasBocadillos === 'tostas' ) && (
                      <>
                        <td>
                          <input
                            type="text"
                            value={tipo_es || ''}
                            onChange={e => handleChangeTostasBocadillos(e, id, 'tipo_es')}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={tipo_en || ''}
                            onChange={e => handleChangeTostasBocadillos(e, id, 'tipo_en')}
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
                onChange={e => handleChangeTostasBocadillos(e, id, 'precio')}
              />
            </td>
            <td>
              <button className="btn-guardar" onClick={() => handleGuardarTostasBocadillos(id)}>Guardar</button>
              <button className="btn-eliminar" onClick={() => handleEliminarTostasBocadillos(id)}>Eliminar</button>
            </td>
          </tr>
        ))}

        {/* Fila para nuevo plato */}
        <tr>
          <td>
            <input
              type="text"
              placeholder="Nuevo tipo"
              value={nuevoTostasBocadillos.tipo}
              onChange={e => setNuevoTostasBocadillos(prev => ({ ...prev, tipo: e.target.value }))}
            />
          </td>

           {(categoriaTostasBocadillos === 'bocadillos' ||
                    categoriaTostasBocadillos === 'tostas' ) && (
                    <>
                      <td>
                        <input
                          type="text"
                          placeholder="Nuevo tipo (ES)"
                          value={nuevoTostasBocadillos.tipo_es}
                          onChange={e => setNuevoTostasBocadillos(prev => ({ ...prev, tipo_es: e.target.value }))}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Nuevo tipo (EN)"
                          value={nuevoTostasBocadillos.tipo_en}
                          onChange={e => setNuevoTostasBocadillos(prev => ({ ...prev, tipo_en: e.target.value }))}
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
              value={nuevoTostasBocadillos.precio}
              onChange={e => setNuevoTostasBocadillos(prev => ({ ...prev, precio: e.target.value }))}
            />
          </td>
          <td>
            <button className="btn-crear" onClick={handleCrearTostasBocadillos}>Crear</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
      
    );
  }
  