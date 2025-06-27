import { supabase } from '../../antidotoDB/supaBaseClient';

export async function getBocadillos() {
  const { data, error } = await supabase
    .from('bocadillos')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar bocadillos:', error);
    return [];
  }

  return data;
}

export async function updateBocadillos(id, fields) {
  const { error } = await supabase
    .from('bocadillos')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating bocadillos:', error);
    return false; 
  }

  return true; 
}


export const addBocadillos = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('bocadillos')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar bocadillos:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteBocadillos = async (id) => {
  const { error } = await supabase
    .from('bocadillos')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar bocadillos:', error);
    return false;
  }

  return true;
};
