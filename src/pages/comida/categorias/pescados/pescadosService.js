import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getPescados() {
  const { data, error } = await supabase
    .from('pescados_mariscos')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar pescados_mariscos:', error);
    return [];
  }

  return data;
}

export async function updatePescados(id, fields) {
  const { error } = await supabase
    .from('pescados_mariscos')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating pescados:', error);
    return false; 
  }

  return true; 
}


export const addPescados = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('pescados_mariscos')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar pescados:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deletePescados = async (id) => {
  const { error } = await supabase
    .from('pescados_mariscos')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar pescados:', error);
    return false;
  }

  return true;
};
