import { supabase } from '../../../antidotoDB/supaBaseClient';

export async function getRefrescos() {
  const { data, error } = await supabase
    .from('refrescos')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error al cargar refrescos:', error);
    return [];
  }

  return data;
}

export async function updateRefresco(id, fields) {
  const { error } = await supabase
    .from('refrescos')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating refresco:', error);
    return false; 
  }

  return true; 
}

export const addRefresco = async (nuevoRefresco) => {
  const { data, error } = await supabase
    .from('refrescos')
    .insert(nuevoRefresco)
    .select();

  if (error) {
    console.error('Error al insertar refresco:', error);
    return null;
  }

  return data[0];
};

export const deleteRefresco = async (id) => {
  const { error } = await supabase
    .from('refrescos')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar refresco:', error);
    return false;
  }

  return true;
};
