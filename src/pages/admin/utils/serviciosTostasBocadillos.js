import { addBocadillos, deleteBocadillos, getBocadillos, updateBocadillos } from "../../tostas_bocadillos/bocadillosService";
import { addTostas, deleteTostas, getTostas, updateTostas } from "../../tostas_bocadillos/tostasService";


export const serviciosTostasBocadillos = {
  tostas: { get: getTostas, update: updateTostas, add: addTostas, delete: deleteTostas },
  bocadillos: { get: getBocadillos, update: updateBocadillos, add: addBocadillos, delete: deleteBocadillos },

};