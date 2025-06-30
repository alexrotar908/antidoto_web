import { addArroces, deleteArroces, getArroces, updateArroces } from "../../comida/categorias/arroces/arrocesService";
import { addCarne, deleteCarne, getCarnes, updateCarne } from "../../comida/categorias/carnes/carnesService";
import { addEnsalada, deleteEnsalada, getEnsaladas, updateEnsalada } from "../../comida/categorias/ensaladas/ensaladasService";
import { addEntrante, deleteEntrante, getEntrantes, updateEntrante } from "../../comida/categorias/entrantes/entrantesService";
import { addPecar, deletePecar, getPecar, updatePecar } from "../../comida/categorias/pecar/pecarService";
import { addPescados, deletePescados, getPescados, updatePescados } from "../../comida/categorias/pescados/pescadosService";
import { addSartenes, deleteSartenes, getSartenes, updateSartenes } from "../../comida/categorias/sartenes/sartenesService";


export const serviciosComidas = {
  entrantes: { get: getEntrantes, update: updateEntrante, add: addEntrante, delete: deleteEntrante },
  carnes: { get: getCarnes, update: updateCarne, add: addCarne, delete: deleteCarne },
  arroces: { get: getArroces, update: updateArroces, add: addArroces, delete: deleteArroces },
  ensaladas: { get: getEnsaladas, update: updateEnsalada, add: addEnsalada, delete: deleteEnsalada },
  sartenes: { get: getSartenes, update: updateSartenes, add: addSartenes, delete: deleteSartenes },
  pescados: { get: getPescados, update: updatePescados, add: addPescados, delete: deletePescados },
  pecar: { get: getPecar, update: updatePecar, add: addPecar, delete: deletePecar },
};
