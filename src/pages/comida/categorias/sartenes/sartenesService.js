import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getSartenes() {
  const { data, error } = await supabase
    .from('sartenes_cuchara')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar sartenes:', error);
    return [];
  }

  return data;
}

export async function updateSartenes(id, fields) {
  const { error } = await supabase
    .from('sartenes_cuchara')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating sartenes:', error);
    return false; 
  }

  return true; 
}


export const addSartenes = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('sartenes_cuchara')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar sartenes:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteSartenes = async (id) => {
  const { error } = await supabase
    .from('sartenes_cuchara')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar sartenes:', error);
    return false;
  }

  return true;
};
