import {
  addRefresco,
  deleteRefresco,
  getRefrescos,
  updateRefresco
} from '../../bebidas/refrescos/refrescoService';

export const serviciosRefrescos = {
  refrescos: {
    get: getRefrescos,
    update: updateRefresco,
    add: addRefresco,
    delete: deleteRefresco
  }
};
