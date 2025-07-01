import React, { useEffect, useState } from 'react';
import { serviciosDesayunos } from '../utils/serviciosDesayunos';

export default function DesayunosSection() {
  const [categoriaDesayuno, setCategoriaDesayuno] = useState('cafes');
  const [platosDesayuno, setPlatosDesayuno] = useState([]);
  const [nuevoDesayuno, setNuevoDesayuno] = useState({
    tipo: '',
    tipo_es: '',
    tipo_en: '',
    precio: '',
    categoria: '',
  });

  useEffect(() => {
    serviciosDesayunos[categoriaDesayuno].get().then(setPlatosDesayuno);
    setNuevoDesayuno({
      tipo: '',
      tipo_es: '',
      tipo_en: '',
      precio: '',
      categoria: '',
    });
  }, [categoriaDesayuno]);

  const handleChangeDesayuno = (e, id, field) => {
    const value = e.target.value;
    setPlatosDesayuno(prev =>
      prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleGuardarDesayuno = async (id) => {
    const item = platosDesayuno.find(i => i.id === id);
    if (!item) return;

    let payload;

    if (categoriaDesayuno === 'cafes') {
      payload = {
        tipo: item.tipo || '',
        tipo_es: item.tipo_es || '',
        tipo_en: item.tipo_en || '',
        precio: parseFloat(item.precio),
        categoria: item.categoria || '',
      };
    } else if (categoriaDesayuno === 'dulces' || categoriaDesayuno === 'salados'|| categoriaDesayuno === 'meriendas') {
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

    await serviciosDesayunos[categoriaDesayuno].update(id, payload);
  };

  const handleEliminarDesayuno = async (id) => {
    await serviciosDesayunos[categoriaDesayuno].delete(id);
    setPlatosDesayuno(prev => prev.filter(i => i.id !== id));
  };

  const handleCrearDesayuno = async () => {
    if (!nuevoDesayuno.tipo.trim() || !nuevoDesayuno.precio) {
      alert('Falta tipo o precio');
      return;
    }

    let payload;

    if (categoriaDesayuno === 'cafes') {
      payload = {
        tipo: nuevoDesayuno.tipo.trim(),
        tipo_es: nuevoDesayuno.tipo_es.trim(),
        tipo_en: nuevoDesayuno.tipo_en.trim(),
        precio: parseFloat(nuevoDesayuno.precio),
        categoria: nuevoDesayuno.categoria.trim(),
      };
    } else if (categoriaDesayuno === 'dulces' || categoriaDesayuno === 'salados' || categoriaDesayuno === 'meriendas' ) {
      payload = {
        tipo: nuevoDesayuno.tipo.trim(),
        tipo_es: nuevoDesayuno.tipo_es.trim(),
        tipo_en: nuevoDesayuno.tipo_en.trim(),
        precio: parseFloat(nuevoDesayuno.precio),
      };
    } else {
      payload = {
        tipo: nuevoDesayuno.tipo.trim(),
        precio: parseFloat(nuevoDesayuno.precio),
      };
    }

    const creado = await serviciosDesayunos[categoriaDesayuno].add(payload);
    if (creado) {
      setPlatosDesayuno(prev => [...prev, creado]);
      setNuevoDesayuno({
        tipo: '',
        tipo_es: '',
        tipo_en: '',
        precio: '',
        categoria: '',
      });
    }
  };

  return (
    <section>
      <h2>Desayunos</h2>
      <label>
        Categoría:
        <select value={categoriaDesayuno} onChange={e => setCategoriaDesayuno(e.target.value)}>
          {Object.keys(serviciosDesayunos).map(cat => (
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
              {(categoriaDesayuno === 'cafes' ||
                categoriaDesayuno === 'dulces' ||
                categoriaDesayuno === 'salados'|| 
                categoriaDesayuno === 'meriendas') && (
                <>
                  <th>Tipo (ES)</th>
                  <th>Tipo (EN)</th>
                </>
              )}
              {categoriaDesayuno === 'cafes' && <th>Categoría</th>}
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {platosDesayuno.map(({ id, tipo, tipo_es, tipo_en, precio, categoria }) => (
              <tr key={id}>
                <td>
                  <input
                    type="text"
                    value={tipo || ''}
                    onChange={e => handleChangeDesayuno(e, id, 'tipo')}
                  />
                </td>
                {(categoriaDesayuno === 'cafes' ||
                  categoriaDesayuno === 'dulces' ||
                  categoriaDesayuno === 'salados'|| 
                  categoriaDesayuno === 'meriendas') && (
                  <>
                    <td>
                      <input
                        type="text"
                        value={tipo_es || ''}
                        onChange={e => handleChangeDesayuno(e, id, 'tipo_es')}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={tipo_en || ''}
                        onChange={e => handleChangeDesayuno(e, id, 'tipo_en')}
                      />
                    </td>
                  </>
                )}
                {categoriaDesayuno === 'cafes' && (
                  <td>
                    <input
                      type="text"
                      value={categoria || ''}
                      onChange={e => handleChangeDesayuno(e, id, 'categoria')}
                    />
                  </td>
                )}
                <td>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={precio || ''}
                    onChange={e => handleChangeDesayuno(e, id, 'precio')}
                  />
                </td>
                <td>
                  <button className="btn-guardar" onClick={() => handleGuardarDesayuno(id)}>
                    Guardar
                  </button>
                  <button className="btn-eliminar" onClick={() => handleEliminarDesayuno(id)}>
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
                  value={nuevoDesayuno.tipo}
                  onChange={e => setNuevoDesayuno(prev => ({ ...prev, tipo: e.target.value }))}
                />
              </td>
              {(categoriaDesayuno === 'cafes' ||
                categoriaDesayuno === 'dulces' ||
                categoriaDesayuno === 'salados' || 
                categoriaDesayuno === 'meriendas') && (
                <>
                  <td>
                    <input
                      type="text"
                      placeholder="Nuevo tipo (ES)"
                      value={nuevoDesayuno.tipo_es}
                      onChange={e => setNuevoDesayuno(prev => ({ ...prev, tipo_es: e.target.value }))}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Nuevo tipo (EN)"
                      value={nuevoDesayuno.tipo_en}
                      onChange={e => setNuevoDesayuno(prev => ({ ...prev, tipo_en: e.target.value }))}
                    />
                  </td>
                </>
              )}
              {categoriaDesayuno === 'cafes' && (
                <td>
                  <input
                    type="text"
                    placeholder="Nueva categoría"
                    value={nuevoDesayuno.categoria}
                    onChange={e => setNuevoDesayuno(prev => ({ ...prev, categoria: e.target.value }))}
                  />
                </td>
              )}
              <td>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Precio"
                  value={nuevoDesayuno.precio}
                  onChange={e => setNuevoDesayuno(prev => ({ ...prev, precio: e.target.value }))}
                />
              </td>
              <td>
                <button className="btn-crear" onClick={handleCrearDesayuno}>
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
