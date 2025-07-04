import React, { useEffect, useState } from 'react';
import { serviciosCervezas } from '../utils/serviciosCervezas'; // Asegúrate de que la ruta sea correcta

export default function CervezaSection() {
  const [cervezas, setCervezas] = useState([]);
  const [nuevaCerveza, setNuevaCerveza] = useState({
    tipo: '',
    tipo_es: '',
    tipo_en: '',
    precio: ''
  });

  useEffect(() => {
    serviciosCervezas.cervezas.get().then(setCervezas);
  }, []);

  const handleChange = (e, id, field) => {
    const value = e.target.value;
    setCervezas(prev =>
      prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleGuardar = async (id) => {
    const item = cervezas.find(c => c.id === id);
    if (!item) return;

    const payload = {
      tipo: item.tipo,
      tipo_es: item.tipo_es || '',
      tipo_en: item.tipo_en || '',
      precio: parseFloat(item.precio)
    };

    try {
      await serviciosCervezas.cervezas.update(id, payload);
    } catch (error) {
      console.error('Error al guardar cerveza:', error);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await serviciosCervezas.cervezas.delete(id);
      setCervezas(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      console.error('Error al eliminar cerveza:', error);
    }
  };

  const handleCrear = async () => {
    if (!nuevaCerveza.tipo.trim() || !nuevaCerveza.precio) return;

    const payload = {
      tipo: nuevaCerveza.tipo.trim(),
      tipo_es: nuevaCerveza.tipo_es.trim(),
      tipo_en: nuevaCerveza.tipo_en.trim(),
      precio: parseFloat(nuevaCerveza.precio)
    };

    try {
      const creada = await serviciosCervezas.cervezas.add(payload);
      if (creada) {
        setCervezas(prev => [...prev, creada]);
        setNuevaCerveza({ tipo: '', tipo_es: '', tipo_en: '', precio: '' });
      }
    } catch (error) {
      console.error('Error al crear cerveza:', error);
    }
  };

  return (
    <section>
      <h2>Cervezas</h2>

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
            {cervezas.map(({ id, tipo, tipo_es, tipo_en, precio }) => (
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

            {/* Fila para nueva cerveza */}
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Nuevo tipo"
                  value={nuevaCerveza.tipo}
                  onChange={e => setNuevaCerveza(prev => ({ ...prev, tipo: e.target.value }))}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Nuevo tipo (ES)"
                  value={nuevaCerveza.tipo_es}
                  onChange={e => setNuevaCerveza(prev => ({ ...prev, tipo_es: e.target.value }))}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Nuevo tipo (EN)"
                  value={nuevaCerveza.tipo_en}
                  onChange={e => setNuevaCerveza(prev => ({ ...prev, tipo_en: e.target.value }))}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Precio"
                  value={nuevaCerveza.precio}
                  onChange={e => setNuevaCerveza(prev => ({ ...prev, precio: e.target.value }))}
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
