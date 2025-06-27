import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './admin.css';

import {
  getEntrantes, updateEntrante, addEntrante, deleteEntrante
} from '../comida/categorias/entrantes/entrantesService';
import {
  getCarnes, updateCarne, addCarne, deleteCarne
} from '../comida/categorias/carnes/carnesService';
import {
  getArroces, updateArroces, addArroces, deleteArroces
} from '../comida/categorias/arroces/arrocesService';
import {
  getEnsaladas, updateEnsalada, addEnsalada, deleteEnsalada
} from '../comida/categorias/ensaladas/ensaladasService';
import {
  getSartenes, updateSartenes, addSartenes, deleteSartenes
} from '../comida/categorias/sartenes/sartenesService';
import {
  getPescados, updatePescados, addPescados, deletePescados
} from '../comida/categorias/pescados/pescadosService';
import {
  getPecar, updatePecar, addPecar, deletePecar
} from '../comida/categorias/pecar/pecarService';

const ADMIN_KEY = 'antidotoSuperClave2024';

const servicios = {
  entrantes: { get: getEntrantes, update: updateEntrante, add: addEntrante, delete: deleteEntrante },
  carnes: { get: getCarnes, update: updateCarne, add: addCarne, delete: deleteCarne },
  arroces: { get: getArroces, update: updateArroces, add: addArroces, delete: deleteArroces },
  ensaladas: { get: getEnsaladas, update: updateEnsalada, add: addEnsalada, delete: deleteEnsalada },
  sartenes: { get: getSartenes, update: updateSartenes, add: addSartenes, delete: deleteSartenes },
  pescados: { get: getPescados, update: updatePescados, add: addPescados, delete: deletePescados },
  pecar: { get: getPecar, update: updatePecar, add: addPecar, delete: deletePecar },
};

function AdminEditor() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const key = params.get('key');

  const [categoria, setCategoria] = useState('entrantes');
  const [platos, setPlatos] = useState([]);
  const [nuevo, setNuevo] = useState({
    tipo: '', precio: '', precio_media: '', por_unidad: false
  });

  useEffect(() => {
    if (key === ADMIN_KEY) {
      servicios[categoria].get().then(setPlatos);
      setNuevo({ tipo: '', precio: '', precio_media: '', por_unidad: false });
    }
  }, [key, categoria]);

  const handleChange = (e, id, field) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const nuevos = platos.map(item => item.id === id ? { ...item, [field]: value } : item);
    setPlatos(nuevos);
  };

  const handleSave = async (id) => {
    const item = platos.find(i => i.id === id);

    let objetoActualizar = ['carnes', 'arroces', 'ensaladas', 'sartenes', 'pecar', 'pescados'].includes(categoria)
      ? { tipo: item.tipo, precio: parseFloat(item.precio) }
      : {
          tipo: item.tipo,
          precio: parseFloat(item.precio),
          precio_media: item.precio_media ? parseFloat(item.precio_media) : null,
          por_unidad: item.por_unidad || false
        };

    const actualizado = await servicios[categoria].update(id, objetoActualizar);
    if (!actualizado) alert('Error al guardar');
  };

  const handleEliminar = async (id) => {
    const eliminado = await servicios[categoria].delete(id);
    if (eliminado) {
      setPlatos(prev => prev.filter(item => item.id !== id));
    } else {
      alert("Error al eliminar el plato");
    }
  };

  const handleNuevoChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevo(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleCrear = async () => {
    if (!nuevo.tipo || !nuevo.precio) {
      alert("El campo 'tipo' y 'precio' son obligatorios");
      return;
    }

    const nuevoPlato = ['carnes', 'arroces', 'ensaladas', 'sartenes', 'pescados', 'pecar'].includes(categoria)
      ? { tipo: nuevo.tipo, precio: parseFloat(nuevo.precio) }
      : {
          tipo: nuevo.tipo,
          precio: parseFloat(nuevo.precio),
          precio_media: nuevo.precio_media ? parseFloat(nuevo.precio_media) : null,
          por_unidad: nuevo.por_unidad
        };

    const creado = await servicios[categoria].add(nuevoPlato);
    if (creado) {
      setPlatos([...platos, creado]);
      setNuevo({ tipo: '', precio: '', precio_media: '', por_unidad: false });
    } else {
      alert("Error al crear el nuevo plato");
    }
  };

  if (key !== ADMIN_KEY) return <h2>Acceso no autorizado</h2>;

  return (
    <div className="admin-container">
      <h2>Editor de Restaurante</h2>

      <label>Selecciona categoría:</label>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="entrantes">Entrantes</option>
        <option value="sartenes">Sartenes & Cuchara</option>
        <option value="ensaladas">Ensaladas</option>
        <option value="pescados">Pescados & Mariscos</option>
        <option value="carnes">Carnes</option>
        <option value="arroces">Arroces</option>
        <option value="pecar">Pecar es bueno</option>
      </select>

      <hr />

      {platos.map(item => (
        <div key={item.id} className="admin-item">
          <input value={item.tipo} onChange={(e) => handleChange(e, item.id, 'tipo')} placeholder="Tipo" />
          <input value={item.precio} onChange={(e) => handleChange(e, item.id, 'precio')} placeholder="Precio" type="number" />
          {!['carnes', 'arroces', 'ensaladas', 'sartenes', 'pescados', 'pecar'].includes(categoria) && (
            <>
              <input value={item.precio_media || ''} onChange={(e) => handleChange(e, item.id, 'precio_media')} placeholder="Precio media" type="number" />
              <label>
                <input type="checkbox" checked={item.por_unidad || false} onChange={(e) => handleChange(e, item.id, 'por_unidad')} />
                Precio por unidad
              </label>
            </>
          )}
          <button onClick={() => handleSave(item.id)}>Guardar</button>
          <button onClick={() => handleEliminar(item.id)} className="eliminar-btn">Eliminar</button>
        </div>
      ))}

      <hr className="admin-divider" />
      <h3>Añadir nuevo plato</h3>
      <div className="admin-item">
        <input name="tipo" value={nuevo.tipo} onChange={handleNuevoChange} placeholder="Tipo" />
        <input name="precio" value={nuevo.precio} onChange={handleNuevoChange} placeholder="Precio" type="number" />
        {!['carnes', 'arroces', 'ensaladas', 'sartenes', 'pescados', 'pecar'].includes(categoria) && (
          <>
            <input name="precio_media" value={nuevo.precio_media} onChange={handleNuevoChange} placeholder="Precio media" type="number" />
            <label>
              <input type="checkbox" name="por_unidad" checked={nuevo.por_unidad} onChange={handleNuevoChange} />
              Precio por unidad
            </label>
          </>
        )}
        <button onClick={handleCrear} disabled={!nuevo.tipo || !nuevo.precio}>Crear</button>
      </div>
    </div>
  );
}

export default AdminEditor;
