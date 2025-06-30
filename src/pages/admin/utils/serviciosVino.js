import { addBlanco, deleteBlanco, getBlanco, updateBlanco } from "../../bebidas/vino/services/blancoService";
import { addBurbujas, deleteBurbujas, getBurbujas, updateBurbujas } from "../../bebidas/vino/services/burbujasService";
import { addFaena, deleteFaena, getFaena, updateFaena } from "../../bebidas/vino/services/faenaService";
import { addRosado, deleteRosado, getRosado, updateRosado } from "../../bebidas/vino/services/rosadoService";



export const serviciosVino = {
  burbujas: { get: getBurbujas, update: updateBurbujas, add: addBurbujas, delete: deleteBurbujas },
  blanco: { get: getBlanco, update: updateBlanco, add: addBlanco, delete: deleteBlanco },
  rosado: { get: getRosado, update: updateRosado, add: addRosado, delete: deleteRosado },
  faena: { get: getFaena, update: updateFaena, add: addFaena, delete: deleteFaena },
};
