// src/pages/admin/sections/MenuDelDiaSection.js
import React, { useEffect, useState } from "react";
import { serviciosMenuDelDia } from "../utils/serviciosMenuDelDia";

export default function MenuDelDiaSection() {
  const [menu, setMenu] = useState(null); // último menú activo
  const [fecha, setFecha] = useState(() => new Date().toISOString().slice(0, 10));

  // inputs de archivos
  const [fileEs, setFileEs] = useState(null);
  const [fileEn, setFileEn] = useState(null);

  // estados de carga
  const [subiendoEs, setSubiendoEs] = useState(false);
  const [subiendoEn, setSubiendoEn] = useState(false);
  const [creando, setCreando] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await serviciosMenuDelDia.get();
      if (data) {
        setMenu(data);
        setFecha(data.fecha);
      }
      setCargando(false);
    })();
  }, []);

  const onFileEs = (e) => setFileEs(e.target.files?.[0] || null);
  const onFileEn = (e) => setFileEn(e.target.files?.[0] || null);

  // Crear nuevo menú con ES y/o EN
  const crear = async () => {
    if (!fileEs && !fileEn) return alert("Selecciona al menos una imagen (ES o EN)");
    setCreando(true);
    const creado = await serviciosMenuDelDia.createWithImage({
      fecha,
      fileEs,
      fileEn,
    });
    setCreando(false);
    if (creado) {
      setMenu(creado);
      setFileEs(null);
      setFileEn(null);
      alert("Menú creado correctamente");
    } else {
      alert("No se pudo crear el menú");
    }
  };

  // ES
const reemplazarEs = async () => {
  if (!menu || !fileEs) return alert("Selecciona una imagen ES");
  setSubiendoEs(true);
  try {
    const actualizado = await serviciosMenuDelDia.updateImageByLang(menu.id, "es", fileEs);
    if (!actualizado) throw new Error("Sin datos devueltos del update");
    setMenu(actualizado);
    setFileEs(null);
    alert("Imagen ES actualizada");
  } catch (e) {
    console.error("Fallo al actualizar ES:", e);
    alert(e?.message || "No se pudo actualizar la imagen ES");
  } finally {
    setSubiendoEs(false);
  }
};

// EN
const reemplazarEn = async () => {
  if (!menu || !fileEn) return alert("Selecciona una imagen EN");
  setSubiendoEn(true);
  try {
    const actualizado = await serviciosMenuDelDia.updateImageByLang(menu.id, "en", fileEn);
    if (!actualizado) throw new Error("Sin datos devueltos del update");
    setMenu(actualizado);
    setFileEn(null);
    alert("Imagen EN actualizada");
  } catch (e) {
    console.error("Fallo al actualizar EN:", e);
    alert(e?.message || "No se pudo actualizar la imagen EN");
  } finally {
    setSubiendoEn(false);
  }
};

  const desactivar = async () => {
    if (!menu) return;
    const ok = await serviciosMenuDelDia.deactivate(menu.id);
    if (ok) {
      setMenu(null);
      alert("Menú desactivado");
    } else {
      alert("No se pudo desactivar el menú");
    }
  };

  const eliminar = async () => {
    if (!menu) return;
    if (!window.confirm("¿Seguro que quieres eliminar este menú y sus imágenes (ES/EN)?")) return;
    const ok = await serviciosMenuDelDia.delete(menu.id);
    if (ok) {
      setMenu(null);
      alert("Menú eliminado");
    } else {
      alert("No se pudo eliminar el menú");
    }
  };

  if (cargando) return <p>Cargando menú del día...</p>;

  return (
    <section>
      <h2>Menú del Día</h2>

      {menu ? (
        <>
          <p><strong>Fecha:</strong> {menu.fecha}</p>

          {/* Previews */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "12px 0" }}>
            <div>
              <h4>Imagen ES</h4>
              {menu.imagen_url && (
                <img
                  src={menu.imagen_url}
                  alt="Menú ES"
                  style={{ maxWidth: "100%", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,.08)" }}
                />
              )}
              <div style={{ marginTop: 8 }}>
                <input type="file" accept="image/*" onChange={onFileEs} />
                <button
                  className="btn-guardar"
                  onClick={reemplazarEs}
                  disabled={!fileEs || subiendoEs}
                  style={{ marginLeft: 8 }}
                >
                  {subiendoEs ? "Subiendo..." : "Reemplazar ES"}
                </button>
              </div>
            </div>

            <div>
              <h4>Imagen EN</h4>
              {menu.imagen_url_en && (
                <img
                  src={menu.imagen_url_en}
                  alt="Menú EN"
                  style={{ maxWidth: "100%", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,.08)" }}
                />
              )}
              <div style={{ marginTop: 8 }}>
                <input type="file" accept="image/*" onChange={onFileEn} />
                <button
                  className="btn-guardar"
                  onClick={reemplazarEn}
                  disabled={!fileEn || subiendoEn}
                  style={{ marginLeft: 8 }}
                >
                  {subiendoEn ? "Subiendo..." : "Reemplazar EN"}
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
            <button className="btn-eliminar" onClick={desactivar}>Desactivar menú</button>
            <button className="btn-eliminar" onClick={eliminar}>Eliminar menú</button>
          </div>
        </>
      ) : (
        <>
          <p>No hay menú activo. Crea uno nuevo:</p>

          <label style={{ display: "block", margin: "10px 0" }}>
            Fecha:
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              style={{ marginLeft: 8 }}
            />
          </label>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 10 }}>
            <div>
              <h4>Imagen ES (opcional)</h4>
              <input type="file" accept="image/*" onChange={onFileEs} />
            </div>
            <div>
              <h4>Imagen EN (opcional)</h4>
              <input type="file" accept="image/*" onChange={onFileEn} />
            </div>
          </div>

          <button
            className="btn-crear"
            onClick={crear}
            disabled={creando || (!fileEs && !fileEn)}
            style={{ marginTop: 12 }}
          >
            {creando ? "Subiendo..." : "Crear Menú"}
          </button>
        </>
      )}
    </section>
  );
}
