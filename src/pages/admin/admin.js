import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './admin.css';

// Importación servicios comidas
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

// Importación servicios desayunos
import {
  getCafes, updateCafes, addCafes, deleteCafes
} from '../desayunos/cafe/cafeService';
import {
  getDulces, updateDulces, addDulces, deleteDulces
} from '../desayunos/dulces_salados/dulcesService';
import {
  getSalados, updateSalados, addSalados, deleteSalados
} from '../desayunos/dulces_salados/saladosService';
import {
  getMeriendas, updateMeriendas, addMeriendas, deleteMeriendas
} from '../desayunos/merienda/meriendaService';
import { addTostas, deleteTostas, getTostas, updateTostas } from '../tostas_bocadillos/tostasService';
import { addBocadillos, deleteBocadillos, getBocadillos, updateBocadillos } from '../tostas_bocadillos/bocadillosService';

const ADMIN_KEY = 'antidotoSuperClave2024';

const serviciosComidas = {
  entrantes: { get: getEntrantes, update: updateEntrante, add: addEntrante, delete: deleteEntrante },
  carnes: { get: getCarnes, update: updateCarne, add: addCarne, delete: deleteCarne },
  arroces: { get: getArroces, update: updateArroces, add: addArroces, delete: deleteArroces },
  ensaladas: { get: getEnsaladas, update: updateEnsalada, add: addEnsalada, delete: deleteEnsalada },
  sartenes: { get: getSartenes, update: updateSartenes, add: addSartenes, delete: deleteSartenes },
  pescados: { get: getPescados, update: updatePescados, add: addPescados, delete: deletePescados },
  pecar: { get: getPecar, update: updatePecar, add: addPecar, delete: deletePecar },
};

const serviciosDesayunos = {
  cafes: { get: getCafes, update: updateCafes, add: addCafes, delete: deleteCafes },
  dulces: { get: getDulces, update: updateDulces, add: addDulces, delete: deleteDulces },
  salados: { get: getSalados, update: updateSalados, add: addSalados, delete: deleteSalados },
  meriendas: { get: getMeriendas, update: updateMeriendas, add: addMeriendas, delete: deleteMeriendas },
};

const serviciosTostasBocadillos = {
  tostas: { get: getTostas, update: updateTostas, add: addTostas, delete: deleteTostas },
  bocadillos: { get: getBocadillos, update: updateBocadillos, add: addBocadillos, delete: deleteBocadillos },
};



function AdminEditor() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const key = params.get('key');

  // Estados comidas
  const [categoriaComida, setCategoriaComida] = useState('entrantes');
  const [platosComida, setPlatosComida] = useState([]);
  const [nuevoComida, setNuevoComida] = useState({ tipo: '', precio: '', precio_media: '', por_unidad: false });

  // Estados desayunos
  const [categoriaDesayuno, setCategoriaDesayuno] = useState('cafes');
  const [platosDesayuno, setPlatosDesayuno] = useState([]);
  const [nuevoDesayuno, setNuevoDesayuno] = useState({ tipo: '', precio: '', categoria: '' });
    
  // Estados tostas y bocadillos
  const [categoriaTostasBocadillos, setCategoriaTostasBocadillos] = useState('tostas');
  const [platosTostasBocadillos, setPlatosTostasBocadillos] = useState([]);
  const [nuevoTostasBocadillos, setNuevoTostasBocadillos] = useState({ tipo: '', precio: '' })

  useEffect(() => {
    if (key !== ADMIN_KEY) return;

    // Obtener platos comida
    serviciosComidas[categoriaComida].get().then(setPlatosComida);
    setNuevoComida({ tipo: '', precio: '', precio_media: '', por_unidad: false });

     // Obtener platos comida
    serviciosTostasBocadillos[categoriaTostasBocadillos].get().then(setPlatosTostasBocadillos);
    setNuevoTostasBocadillos({ tipo: '', precio: ''});

    // Obtener platos desayuno
    serviciosDesayunos[categoriaDesayuno].get().then(setPlatosDesayuno);
    setNuevoDesayuno({ tipo: '', precio: '', categoria: '' });
  }, [key, categoriaComida, categoriaDesayuno, categoriaTostasBocadillos]);

 

  if (key !== ADMIN_KEY) return <h2>Acceso no autorizado</h2>;

  // Handlers comidas
  const handleChangeComida = (e, id, field) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setPlatosComida(prev => prev.map(item => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const handleGuardarComida = async (id) => {
    const item = platosComida.find(i => i.id === id);
    if (!item) return;

    const base = ['carnes', 'arroces', 'ensaladas', 'sartenes', 'pecar', 'pescados'].includes(categoriaComida);
    const payload = base
      ? { tipo: item.tipo, precio: parseFloat(item.precio) }
      : {
          tipo: item.tipo,
          precio: parseFloat(item.precio),
          precio_media: item.precio_media ? parseFloat(item.precio_media) : null,
          por_unidad: item.por_unidad || false,
        };

    await serviciosComidas[categoriaComida].update(id, payload);
  };

  const handleEliminarComida = async (id) => {
    //if (!window.confirm('¿Seguro que quieres eliminar este plato?')) return;

    await serviciosComidas[categoriaComida].delete(id);
    setPlatosComida(prev => prev.filter(i => i.id !== id));
  };

  const handleCrearComida = async () => {
    if (!nuevoComida.tipo.trim() || !nuevoComida.precio) return alert('Falta tipo o precio');

    const base = ['carnes', 'arroces', 'ensaladas', 'sartenes', 'pecar', 'pescados'].includes(categoriaComida);
    const payload = base
      ? { tipo: nuevoComida.tipo.trim(), precio: parseFloat(nuevoComida.precio) }
      : {
          tipo: nuevoComida.tipo.trim(),
          precio: parseFloat(nuevoComida.precio),
          precio_media: nuevoComida.precio_media ? parseFloat(nuevoComida.precio_media) : null,
          por_unidad: nuevoComida.por_unidad,
        };

    const creado = await serviciosComidas[categoriaComida].add(payload);
    if (creado) {
      setPlatosComida(prev => [...prev, creado]);
      setNuevoComida({ tipo: '', precio: '', precio_media: '', por_unidad: false });
    }
  };

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
    alert('Desayuno actualizado');
  };

  const handleEliminarDesayuno = async (id) => {
    if (!window.confirm('¿Seguro que quieres eliminar este desayuno?')) return;

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

  // Handler para cambios en los inputs
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
    precio: parseFloat(nuevoTostasBocadillos.precio)
  };

  try {
    const creado = await serviciosTostasBocadillos[categoriaTostasBocadillos].add(payload);
    if (creado) {
      setPlatosTostasBocadillos(prev => [...prev, creado]);
      setNuevoTostasBocadillos({ tipo: '', precio: '' });
    }
  } catch (error) {
    console.error('Error al crear tosta o bocadillo:', error);
  }
};

  return (
    <div className="admin-editor-container">
      <h1>Panel de administración</h1>

      {/* Sección Desayunos */}
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

      {/* Sección Comidas */}
      <section>
        <h2>Comidas</h2>
        <label>
          Categoría:
          <select value={categoriaComida} onChange={e => setCategoriaComida(e.target.value)}>
            {Object.keys(serviciosComidas).map(cat => (
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
                { !['carnes','arroces','ensaladas','sartenes','pecar','pescados'].includes(categoriaComida) && <th>Precio Media</th>}
                { !['carnes','arroces','ensaladas','sartenes','pecar','pescados'].includes(categoriaComida) && <th>Por unidad</th>}
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {platosComida.map(({ id, tipo, precio, precio_media, por_unidad }) => (
                <tr key={id}>
                  <td>
                    <input
                      type="text"
                      value={tipo}
                      onChange={e => handleChangeComida(e, id, 'tipo')}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={precio}
                      onChange={e => handleChangeComida(e, id, 'precio')}
                    />
                  </td>
                  {!['carnes','arroces','ensaladas','sartenes','pecar','pescados'].includes(categoriaComida) && (
                    <>
                      <td>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
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
                    <button className="btn-guardar" onClick={() => handleGuardarComida(id)}>Guardar</button>
                    <button className="btn-eliminar" onClick={() => handleEliminarComida(id)}>Eliminar</button>
                  </td>
                </tr>
              ))}

              {/* Fila para nuevo plato */}
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Nuevo tipo"
                    value={nuevoComida.tipo}
                    onChange={e => setNuevoComida(prev => ({ ...prev, tipo: e.target.value }))}
                  />
                </td>
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
                {!['carnes','arroces','ensaladas','sartenes','pecar','pescados'].includes(categoriaComida) && (
                  <>
                    <td>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Precio Media"
                        value={nuevoComida.precio_media}
                        onChange={e => setNuevoComida(prev => ({ ...prev, precio_media: e.target.value }))}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={nuevoComida.por_unidad}
                        onChange={e => setNuevoComida(prev => ({ ...prev, por_unidad: e.target.checked }))}
                      />
                    </td>
                  </>
                )}
                <td>
                  <button className="btn-crear" onClick={handleCrearComida}>Crear</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      
      {/* Sección Tostas y Bocadillos */}
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
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {platosTostasBocadillos.map(({ id, tipo, precio }) => (
          <tr key={id}>
            <td>
              <input
                type="text"
                value={tipo}
                onChange={e => handleChangeTostasBocadillos(e, id, 'tipo')}
              />
            </td>
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


      
    </div>
  );
}

export default AdminEditor;
