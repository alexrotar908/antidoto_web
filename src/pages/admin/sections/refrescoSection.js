import React, { useEffect, useState } from 'react';
import { serviciosRefrescos } from '../utils/serviciosRefrescos'; // Ajusta la ruta si lo necesitas

export default function RefrescosSection() {
  const [refrescos, setRefrescos] = useState([]);
  const [nuevoRefresco, setNuevoRefresco] = useState({
    tipo: '',
    tipo_es: '',
    tipo_en: '',
    precio: ''
  });

  useEffect(() => {
    serviciosRefrescos.refrescos.get().then(setRefrescos);
  }, []);

  const handleChange = (e, id, field) => {
    const value = e.target.value;
    setRefrescos(prev =>
      prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleGuardar = async (id) => {
    const item = refrescos.find(i => i.id === id);
    if (!item) return;

    const payload = {
      tipo: item.tipo,
      tipo_es: item.tipo_es || '',
      tipo_en: item.tipo_en || '',
      precio: parseFloat(item.precio)
    };

    try {
      await serviciosRefrescos.refrescos.update(id, payload);
    } catch (error) {
      console.error('Error al guardar refresco:', error);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await serviciosRefrescos.refrescos.delete(id);
      setRefrescos(prev => prev.filter(i => i.id !== id));
    } catch (error) {
      console.error('Error al eliminar refresco:', error);
    }
  };

  const handleCrear = async () => {
    if (!nuevoRefresco.tipo.trim() || !nuevoRefresco.precio) return;

    const payload = {
      tipo: nuevoRefresco.tipo.trim(),
      tipo_es: nuevoRefresco.tipo_es.trim(),
      tipo_en: nuevoRefresco.tipo_en.trim(),
      precio: parseFloat(nuevoRefresco.precio)
    };

    try {
      const creado = await serviciosRefrescos.refrescos.add(payload);
      if (creado) {
        setRefrescos(prev => [...prev, creado]);
        setNuevoRefresco({ tipo: '', tipo_es: '', tipo_en: '', precio: '' });
      }
    } catch (error) {
      console.error('Error al crear refresco:', error);
    }
  };

  return (
    <section>
      <h2>Refrescos</h2>

      <div className="tabla-admin">
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Tipo (ES)</th>
              <th>Tipo (EN)</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {refrescos.map(({ id, tipo, tipo_es, tipo_en, precio }) => (
              <tr key={id}>
                <td>
                  <input
                    type="text"
                    value={tipo}
                    onChange={e => handleChange(e, id, 'tipo')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={tipo_es}
                    onChange={e => handleChange(e, id, 'tipo_es')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={tipo_en}
                    onChange={e => handleChange(e, id, 'tipo_en')}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={precio}
                    onChange={e => handleChange(e, id, 'precio')}
                  />
                </td>
                <td>
                  <button className="btn-guardar" onClick={() => handleGuardar(id)}>Guardar</button>
                  <button className="btn-eliminar" onClick={() => handleEliminar(id)}>Eliminar</button>
                </td>
              </tr>
            ))}

            {/* Fila para nuevo refresco */}
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Nuevo tipo"
                  value={nuevoRefresco.tipo}
                  onChange={e => setNuevoRefresco(prev => ({ ...prev, tipo: e.target.value }))}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Nuevo tipo (ES)"
                  value={nuevoRefresco.tipo_es}
                  onChange={e => setNuevoRefresco(prev => ({ ...prev, tipo_es: e.target.value }))}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Nuevo tipo (EN)"
                  value={nuevoRefresco.tipo_en}
                  onChange={e => setNuevoRefresco(prev => ({ ...prev, tipo_en: e.target.value }))}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Precio"
                  value={nuevoRefresco.precio}
                  onChange={e => setNuevoRefresco(prev => ({ ...prev, precio: e.target.value }))}
                />
              </td>
              <td>
                <button className="btn-crear" onClick={handleCrear}>Crear</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
