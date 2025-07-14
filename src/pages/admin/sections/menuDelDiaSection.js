import React, { useEffect, useState } from "react";
import { serviciosMenuDelDia } from "../utils/serviciosMenuDelDia";

export default function MenuDelDiaSection() {
  const [menu, setMenu] = useState(null);
  const [nuevoPlato, setNuevoPlato] = useState({
    tipo: "primero",
    plato: "",
    plato_es: "",
    plato_en: ""
  });
  const [nuevoPrecio, setNuevoPrecio] = useState("");

  useEffect(() => {
    async function cargarMenu() {
      const data = await serviciosMenuDelDia.get();
      if (data) {
        setMenu(data);
        setNuevoPrecio(data.precio.toFixed(2));
      }
    }

    cargarMenu();
  }, []);

  const handleChangePlato = (index, field, value) => {
    const actualizado = [...menu.menu_platos];
    actualizado[index][field] = value;
    setMenu({ ...menu, menu_platos: actualizado });
  };

  const guardarPlato = async (index) => {
    const { id, plato, plato_es, plato_en } = menu.menu_platos[index];
    await serviciosMenuDelDia.updatePlato(id, { plato, plato_es, plato_en });
  };

  const eliminar = async (id) => {
    const ok = await serviciosMenuDelDia.deletePlato(id);
    if (ok) {
      setMenu(prev => ({
        ...prev,
        menu_platos: prev.menu_platos.filter(p => p.id !== id),
      }));
    }
  };

  const crearPlato = async () => {
    if (!nuevoPlato.plato.trim()) return;

    const creado = await serviciosMenuDelDia.addPlato(
      menu.id,
      nuevoPlato.tipo,
      nuevoPlato.plato.trim(),
      nuevoPlato.plato_es.trim(),
      nuevoPlato.plato_en.trim()
    );

    if (creado) {
      setMenu(prev => ({
        ...prev,
        menu_platos: [...prev.menu_platos, creado],
      }));
      setNuevoPlato({
        tipo: "primero",
        plato: "",
        plato_es: "",
        plato_en: ""
      });
    }
  };

  const actualizarPrecio = async () => {
    const ok = await serviciosMenuDelDia.updatePrecio(menu.id, parseFloat(nuevoPrecio));
    if (ok) {
      setMenu(prev => ({ ...prev, precio: parseFloat(nuevoPrecio) }));
    }
  };

  if (!menu) return <p>Cargando menú del día...</p>;

  const tipos = ["primero", "segundo", "postre"];

  return (
    <section>
      <h2>Menú del Día</h2>
      <p>Fecha: {menu.fecha}</p>

      <label>
        Precio (€ IVA incluido):
        <input
          type="number"
          step="0.01"
          value={nuevoPrecio}
          onChange={(e) => setNuevoPrecio(e.target.value)}
        />
        <button className="btn-guardar" onClick={actualizarPrecio}>Guardar Precio</button>
      </label>

      {tipos.map((tipo) => (
        <div key={tipo} style={{ marginTop: "20px" }}>
          <h3>{tipo.toUpperCase()}S</h3>
           <div className="tabla-admin">
          <table>
            <thead>
              <tr>
                <th>Plato</th>
                <th>Plato (ES)</th>
                <th>Plato (EN)</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {menu.menu_platos
                .filter(p => p.tipo === tipo)
                .map((plato, index) => (
                  <tr key={plato.id}>
                    <td>
                      <input
                        type="text"
                        value={plato.plato || ''}
                        onChange={(e) => handleChangePlato(index, 'plato', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={plato.plato_es || ''}
                        onChange={(e) => handleChangePlato(index, 'plato_es', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={plato.plato_en || ''}
                        onChange={(e) => handleChangePlato(index, 'plato_en', e.target.value)}
                      />
                    </td>
                    <td>
                      <button className="btn-guardar" onClick={() => guardarPlato(index)}>Guardar</button>
                      <button className="btn-eliminar" onClick={() => eliminar(plato.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "30px" }}>
        <h3>Añadir nuevo plato</h3>
        <label>
          Tipo:
          <select
            value={nuevoPlato.tipo}
            onChange={(e) => setNuevoPlato({ ...nuevoPlato, tipo: e.target.value })}
          >
            {tipos.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <input
          type="text"
          placeholder="Nombre del plato"
          value={nuevoPlato.plato}
          onChange={(e) => setNuevoPlato({ ...nuevoPlato, plato: e.target.value })}
        />
        <input
          type="text"
          placeholder="Plato (ES)"
          value={nuevoPlato.plato_es}
          onChange={(e) => setNuevoPlato({ ...nuevoPlato, plato_es: e.target.value })}
        />
        <input
          type="text"
          placeholder="Plato (EN)"
          value={nuevoPlato.plato_en}
          onChange={(e) => setNuevoPlato({ ...nuevoPlato, plato_en: e.target.value })}
        />
        <button className="btn-crear" onClick={crearPlato}>Crear</button>
      </div>
    </section>
  );
}
