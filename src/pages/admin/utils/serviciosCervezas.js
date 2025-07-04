import {
  addCerveza,
  deleteCerveza,
  getCervezas,
  updateCerveza
} from '../../bebidas/cervezas/cervezaService';

export const serviciosCervezas = {
  cervezas: {
    get: getCervezas,
    update: updateCerveza,
    add: addCerveza,
    delete: deleteCerveza
  }
};
