import { addCafes, deleteCafes, getCafes, updateCafes } from "../../desayunos/cafe/cafeService";
import { addDulces, deleteDulces, getDulces, updateDulces } from "../../desayunos/dulces_salados/dulcesService";
import { addSalados, deleteSalados, getSalados, updateSalados } from "../../desayunos/dulces_salados/saladosService";
import { addMeriendas, deleteMeriendas, getMeriendas, updateMeriendas } from "../../desayunos/merienda/meriendaService";



export const serviciosDesayunos = {
  cafes: { get: getCafes, update: updateCafes, add: addCafes, delete: deleteCafes },
  dulces: { get: getDulces, update: updateDulces, add: addDulces, delete: deleteDulces },
  salados: { get: getSalados, update: updateSalados, add: addSalados, delete: deleteSalados },
  meriendas: { get: getMeriendas, update: updateMeriendas, add: addMeriendas, delete: deleteMeriendas },
};