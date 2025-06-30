import { actualizarPlato, actualizarPrecioMenu, agregarPlato, crearMenuDelDia, eliminarPlato, getMenuDelDia } from "../../menu_del_dia/menu_del_diaService";

export const serviciosMenuDelDia = {
  get: getMenuDelDia,
  create: crearMenuDelDia,
  addPlato: agregarPlato,
  updatePlato: actualizarPlato,
  deletePlato: eliminarPlato,
  updatePrecio: actualizarPrecioMenu,
};
