import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getEntrantes, updateEntrante, addEntrante } from '../comida/categorias/entrantes/entrantesService';
import './admin.css'

const ADMIN_KEY = 'antidotoSuperClave2024';

function AdminEditor() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const key = params.get('key');

  const [entrantes, setEntrantes] = useState([]);
  const [nuevo, setNuevo] = useState({
    tipo: '',
    precio: '',
    precio_media: '',
    por_unidad: false,
  });

  useEffect(() => {
    if (key === ADMIN_KEY) {
      getEntrantes().then(setEntrantes);
    }
  }, [key]);

  const handleChange = (e, id, field) => {
    const newEntrantes = entrantes.map(item =>
      item.id === id ? { ...item, [field]: e.target.value } : item
    );
    setEntrantes(newEntrantes);
  };

  const handleCheckbox = (e, id) => {
    const newEntrantes = entrantes.map(item =>
      item.id === id ? { ...item, por_unidad: e.target.checked } : item
    );
    setEntrantes(newEntrantes);
  };

  const handleSave = async (id) => {
    const item = entrantes.find(i => i.id === id);
    await updateEntrante(id, item);
    alert('Guardado');
  };

  const handleNuevoChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevo((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCrear = async () => {
    if (!nuevo.tipo || !nuevo.precio) {
      alert("El campo 'tipo' y 'precio' son obligatorios");
      return;
    }

    const nuevoPlato = {
      id: `ent-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      tipo: nuevo.tipo,
      precio: parseFloat(nuevo.precio),
      precio_media: nuevo.precio_media ? parseFloat(nuevo.precio_media) : null,
      por_unidad: nuevo.por_unidad
    };

    const creado = await addEntrante(nuevoPlato);

    if (creado) {
      setEntrantes([...entrantes, creado]);
      setNuevo({ tipo: '', precio: '', precio_media: '', por_unidad: false });
    } else {
      alert("Error al crear el nuevo plato");
    }
  };

  if (key !== ADMIN_KEY) return <h2>Acceso no autorizado</h2>;

  return (
    <div className="admin-container">
      <h2>Editor de Entrantes</h2>

      {entrantes.map(item => (
        <div key={item.id} className="admin-item">
          <input
            value={item.tipo}
            onChange={(e) => handleChange(e, item.id, 'tipo')}
            placeholder="Tipo"
          />
          <input
            value={item.precio}
            onChange={(e) => handleChange(e, item.id, 'precio')}
            placeholder="Precio"
            type="number"
          />
          <input
            value={item.precio_media || ''}
            onChange={(e) => handleChange(e, item.id, 'precio_media')}
            placeholder="Precio media (opcional)"
            type="number"
          />
          <label>
            <input
              type="checkbox"
              checked={item.por_unidad || false}
              onChange={(e) => handleCheckbox(e, item.id)}
            />
            Precio por unidad
          </label>
          <button onClick={() => handleSave(item.id)}>Guardar</button>
        </div>
      ))}

      <hr className="admin-divider" />

      <h3>Añadir nuevo plato</h3>
      <div className="admin-item">
        <input
          name="tipo"
          value={nuevo.tipo}
          onChange={handleNuevoChange}
          placeholder="Tipo"
        />
        <input
          name="precio"
          value={nuevo.precio}
          onChange={handleNuevoChange}
          placeholder="Precio"
          type="number"
        />
        <input
          name="precio_media"
          value={nuevo.precio_media}
          onChange={handleNuevoChange}
          placeholder="Precio media (opcional)"
          type="number"
        />
        <label>
          <input
            type="checkbox"
            name="por_unidad"
            checked={nuevo.por_unidad}
            onChange={handleNuevoChange}
          />
          Precio por unidad
        </label>
        <button
          onClick={handleCrear}
          disabled={!nuevo.tipo || !nuevo.precio}
        >
          Crear
        </button>
      </div>
    </div>
  );
}

export default AdminEditor;