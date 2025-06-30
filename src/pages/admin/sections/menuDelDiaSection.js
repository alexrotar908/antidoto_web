import React, { useEffect, useState } from "react";
import { serviciosMenuDelDia } from "../utils/serviciosMenuDelDia";

export default function MenuDelDiaSection() {
  const [menu, setMenu] = useState(null);
  const [nuevoPlato, setNuevoPlato] = useState({ tipo: "primero", plato: "" });
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

  const handleChangePlato = (index, nuevoTexto) => {
    const actualizado = [...menu.menu_platos];
    actualizado[index].plato = nuevoTexto;
    setMenu({ ...menu, menu_platos: actualizado });
  };

  const guardarPlato = async (index) => {
    const plato = menu.menu_platos[index];
    await serviciosMenuDelDia.updatePlato(plato.id, plato.plato);
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
      nuevoPlato.plato.trim()
    );

    if (creado) {
      setMenu(prev => ({
        ...prev,
        menu_platos: [...prev.menu_platos, creado],
      }));
      setNuevoPlato({ tipo: "primero", plato: "" });
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
          <table>
            <thead>
              <tr>
                <th>Plato</th>
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
                        value={plato.plato}
                        onChange={(e) =>
                          handleChangePlato(
                            menu.menu_platos.findIndex(p => p.id === plato.id),
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="btn-guardar"
                        onClick={() =>
                          guardarPlato(menu.menu_platos.findIndex(p => p.id === plato.id))
                        }
                      >
                        Guardar
                      </button>
                      <button
                        className="btn-eliminar"
                        onClick={() => eliminar(plato.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
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
        <button className="btn-crear" onClick={crearPlato}>Crear</button>
      </div>
    </section>
  );
}
