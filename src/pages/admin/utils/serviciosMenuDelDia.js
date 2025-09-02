// src/pages/admin/utils/serviciosMenuDelDia.js
import {
  getMenuDelDia,
  crearMenuConImagen,
  actualizarImagenMenu,
  actualizarImagenMenuPorIdioma,
  desactivarMenu,
  eliminarMenu,
} from "../../menu_del_dia/menu_del_diaService";

export const serviciosMenuDelDia = {
  get: getMenuDelDia,                     // obtener último menú activo
  createWithImage: crearMenuConImagen,    // crear menú nuevo con imágenes ES/EN
  updateImage: actualizarImagenMenu,      // actualizar solo imagen ES (compatibilidad)
  updateImageByLang: actualizarImagenMenuPorIdioma, // actualizar imagen según idioma
  deactivate: desactivarMenu,             // desactivar menú (activo=false)
  delete: eliminarMenu,                   // borrar menú + imágenes
};
