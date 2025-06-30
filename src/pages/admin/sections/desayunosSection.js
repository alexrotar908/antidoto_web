import React, { useEffect, useState } from 'react';
import { serviciosDesayunos } from '../utils/serviciosDesayunos';

export default function DesayunosSection() {
    const [categoriaDesayuno, setCategoriaDesayuno] = useState('cafes');
    const [platosDesayuno, setPlatosDesayuno] = useState([]);
    const [nuevoDesayuno, setNuevoDesayuno] = useState({ tipo: '', precio: '', categoria: '' });

  useEffect(() => {
    // Obtener platos desayuno
    serviciosDesayunos[categoriaDesayuno].get().then(setPlatosDesayuno);
    setNuevoDesayuno({ tipo: '', precio: '', categoria: '' })
  }, [categoriaDesayuno]);

 // Handlers desayunos
  const handleChangeDesayuno = (e, id, field) => {
    const value = e.target.value;
    setPlatosDesayuno(prev => prev.map(item => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const handleGuardarDesayuno = async (id) => {
    const item = platosDesayuno.find(i => i.id === id);
    if (!item) return;

    const payload =
      categoriaDesayuno === 'cafes'
        ? { tipo: item.tipo, precio: parseFloat(item.precio), categoria: item.categoria }
        : { tipo: item.tipo, precio: parseFloat(item.precio) };

    await serviciosDesayunos[categoriaDesayuno].update(id, payload);
  };

  const handleEliminarDesayuno = async (id) => {

    await serviciosDesayunos[categoriaDesayuno].delete(id);
    setPlatosDesayuno(prev => prev.filter(i => i.id !== id));
  };

  const handleCrearDesayuno = async () => {
    if (!nuevoDesayuno.tipo.trim() || !nuevoDesayuno.precio) return alert('Falta tipo o precio');

    const payload =
      categoriaDesayuno === 'cafes'
        ? { tipo: nuevoDesayuno.tipo.trim(), precio: parseFloat(nuevoDesayuno.precio), categoria: nuevoDesayuno.categoria }
        : { tipo: nuevoDesayuno.tipo.trim(), precio: parseFloat(nuevoDesayuno.precio) };

    const creado = await serviciosDesayunos[categoriaDesayuno].add(payload);
    if (creado) {
      setPlatosDesayuno(prev => [...prev, creado]);
      setNuevoDesayuno({ tipo: '', precio: '', categoria: '' });
    }
  };

  return (
    <section>
        <h2>Desayunos</h2>
        <label>
          Categoría:
          <select value={categoriaDesayuno} onChange={e => setCategoriaDesayuno(e.target.value)}>
            {Object.keys(serviciosDesayunos).map(cat => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
        </label>

        <div className="tabla-admin">
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Precio</th>
                {categoriaDesayuno === 'cafes' && <th>Categoría</th>}
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {platosDesayuno.map(({ id, tipo, precio, categoria }) => (
                <tr key={id}>
                  <td>
                    <input
                      type="text"
                      value={tipo}
                      onChange={e => handleChangeDesayuno(e, id, 'tipo')}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={precio}
                      onChange={e => handleChangeDesayuno(e, id, 'precio')}
                    />
                  </td>
                  {categoriaDesayuno === 'cafes' && (
                    <td>
                      <input
                        type="text"
                        value={categoria}
                        onChange={e => handleChangeDesayuno(e, id, 'categoria')}
                      />
                    </td>
                  )}
                  <td>
                    <button className="btn-guardar" onClick={() => handleGuardarDesayuno(id)}>Guardar</button>
                    <button className="btn-eliminar" onClick={() => handleEliminarDesayuno(id)}>Eliminar</button>
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
                {categoriaDesayuno === 'cafes' && (
                  <td>
                    <input
                      type="text"
                      placeholder="Categoría"
                      value={nuevoDesayuno.categoria}
                      onChange={e => setNuevoDesayuno(prev => ({ ...prev, categoria: e.target.value }))}
                    />
                  </td>
                )}
                <td>
                  <button className="btn-crear" onClick={handleCrearDesayuno}>Crear</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
  );
}
