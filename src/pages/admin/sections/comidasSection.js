import React, { useEffect, useState } from 'react';
import { serviciosComidas } from '../utils/serviciosComidas';

export default function ComidasSection() {
  // Estados comidas
  const [categoriaComida, setCategoriaComida] = useState('entrantes');
  const [platosComida, setPlatosComida] = useState([]);
  const [nuevoComida, setNuevoComida] = useState({ tipo: '', tipo_es: '', tipo_en: '', precio: '', precio_media: '', por_unidad: false });

  useEffect(() => {
    // Obtener platos comida
    serviciosComidas[categoriaComida].get().then(setPlatosComida);
    setNuevoComida({ tipo: '', tipo_es: '', tipo_en: '', precio: '', precio_media: '', por_unidad: false });
  }, [categoriaComida]);

 // Handlers comidas
  const handleChangeComida = (e, id, field) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setPlatosComida(prev => prev.map(item => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const handleGuardarComida = async (id) => {
    const item = platosComida.find(i => i.id === id);
    if (!item) return;

    let payload;

    if (categoriaComida === 'entrantes') {
      payload = {
        tipo: item.tipo || '',
        tipo_es: item.tipo_es || '',
        tipo_en: item.tipo_en || '',
          precio_media: item.precio_media ? parseFloat(item.precio_media) : null,
          por_unidad: item.por_unidad || false,
      };
    } else if (categoriaComida === 'carnes' || categoriaComida === 'arroces'|| categoriaComida === 'ensaladas' || categoriaComida === 'sartenes' || categoriaComida === 'pecar' || categoriaComida === 'pescados') {
      payload = {
        tipo: item.tipo || '',
        tipo_es: item.tipo_es || '',
        tipo_en: item.tipo_en || '',
        precio: parseFloat(item.precio),
      };
    } else {
      payload = {
        tipo: item.tipo || '',
        precio: parseFloat(item.precio),
      };
    }

    await serviciosComidas[categoriaComida].update(id, payload);
  }

  const handleEliminarComida = async (id) => {
    //if (!window.confirm('¿Seguro que quieres eliminar este plato?')) return;

    await serviciosComidas[categoriaComida].delete(id);
    setPlatosComida(prev => prev.filter(i => i.id !== id));
  };

  const handleCrearComida = async () => {
      if (!nuevoComida.tipo.trim() || !nuevoComida.precio) {
        alert('Falta tipo o precio');
        return;
      }
  
      let payload;
  
      if (categoriaComida === 'entrantes') {
        payload = {
          tipo: nuevoComida.tipo.trim(),
          tipo_es: nuevoComida.tipo_es.trim(),
          tipo_en: nuevoComida.tipo_en.trim(),
          precio_media: nuevoComida.precio_media ? parseFloat(nuevoComida.precio_media) : null,
          por_unidad: nuevoComida.por_unidad,
        };
      } else if (categoriaComida === 'carnes' || categoriaComida === 'arroces'|| categoriaComida === 'ensaladas' || categoriaComida === 'sartenes' || categoriaComida === 'pecar' || categoriaComida === 'pescados' ) {
        payload = {
          tipo: nuevoComida.tipo.trim(),
          tipo_es: nuevoComida.tipo_es.trim(),
          tipo_en: nuevoComida.tipo_en.trim(),
          precio: parseFloat(nuevoComida.precio),
        };
      } else {
        payload = {
          tipo: nuevoComida.tipo.trim(),
          precio: parseFloat(nuevoComida.precio),
        };
      }
  
      const creado = await serviciosComidas[categoriaComida].add(payload);
      if (creado) {
        setPlatosComida(prev => [...prev, creado]);
        setNuevoComida({
          tipo: '',
          tipo_es: '',
          tipo_en: '',
          precio: '',
          precio_media: '', 
          por_unidad: false 
        });
      }
    };

   return (

    <section>
          <h2>Comidas</h2>
          <label>
            Categoría:
            <select value={categoriaComida} onChange={e => setCategoriaComida(e.target.value)}>
              {Object.keys(serviciosComidas).map(cat => (
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
                  {(categoriaComida === 'entrantes' ||
                    categoriaComida === 'carnes' || 
                    categoriaComida === 'arroces'|| 
                    categoriaComida === 'ensaladas' || 
                    categoriaComida === 'sartenes' || 
                    categoriaComida === 'pecar' || 
                    categoriaComida === 'pescados' ) && (
                    <>
                      <th>Tipo (ES)</th>
                      <th>Tipo (EN)</th>
                    </>
                  )}
                  {categoriaComida === 'cafes' && <th>Categoría</th>}
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {platosComida.map(({ id, tipo, tipo_es, tipo_en, precio, precio_media, por_unidad }) => (
                  <tr key={id}>
                    <td>
                      <input
                        type="text"
                        value={tipo || ''}
                        onChange={e => handleChangeComida(e, id, 'tipo')}
                      />
                    </td>
                    {(categoriaComida === 'entrantes' ||
                    categoriaComida === 'carnes' || 
                    categoriaComida === 'arroces'|| 
                    categoriaComida === 'ensaladas' || 
                    categoriaComida === 'sartenes' || 
                    categoriaComida === 'pecar' || 
                    categoriaComida === 'pescados' ) && (
                      <>
                        <td>
                          <input
                            type="text"
                            value={tipo_es || ''}
                            onChange={e => handleChangeComida(e, id, 'tipo_es')}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={tipo_en || ''}
                            onChange={e => handleChangeComida(e, id, 'tipo_en')}
                          />
                        </td>
                      </>
                    )}
                    {categoriaComida === 'entrantes' && (
                      <>
                      <td>
                        <input
                          type="text"
                          value={precio_media || ''}
                          onChange={e => handleChangeComida(e, id, 'precio_media')}
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={por_unidad || false}
                          onChange={e => handleChangeComida(e, id, 'por_unidad')}
                        />
                      </td>
                      </>
                    )}
                    <td>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={precio || ''}
                        onChange={e => handleChangeComida(e, id, 'precio')}
                      />
                    </td>
                    <td>
                      <button className="btn-guardar" onClick={() => handleGuardarComida(id)}>
                        Guardar
                      </button>
                      <button className="btn-eliminar" onClick={() => handleEliminarComida(id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
    
                {/* Fila para nuevo desayuno */}
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Nuevo tipo"
                      value={nuevoComida.tipo}
                      onChange={e => setNuevoComida(prev => ({ ...prev, tipo: e.target.value }))}
                    />
                  </td>
                  {(categoriaComida === 'entrantes' ||
                    categoriaComida === 'carnes' || 
                    categoriaComida === 'arroces'|| 
                    categoriaComida === 'ensaladas' || 
                    categoriaComida === 'sartenes' || 
                    categoriaComida === 'pecar' || 
                    categoriaComida === 'pescados' ) && (
                    <>
                      <td>
                        <input
                          type="text"
                          placeholder="Nuevo tipo (ES)"
                          value={nuevoComida.tipo_es}
                          onChange={e => setNuevoComida(prev => ({ ...prev, tipo_es: e.target.value }))}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Nuevo tipo (EN)"
                          value={nuevoComida.tipo_en}
                          onChange={e => setNuevoComida(prev => ({ ...prev, tipo_en: e.target.value }))}
                        />
                      </td>
                    </>
                  )}
                  {categoriaComida === 'entrantes' && (
                    <>
                    <td>
                      <input
                        type="text"
                        placeholder="Precio media"
                        value={nuevoComida.precio_media}
                        onChange={e => setNuevoComida(prev => ({ ...prev, precio_media: e.target.value }))}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="por unidad"
                        value={nuevoComida.por_unidad}
                        onChange={e => setNuevoComida(prev => ({ ...prev, por_unidad: e.target.value }))}
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
                      value={nuevoComida.precio}
                      onChange={e => setNuevoComida(prev => ({ ...prev, precio: e.target.value }))}
                    />
                  </td>
                  <td>
                    <button className="btn-crear" onClick={handleCrearComida}>
                      Crear
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>


    );
  }
  