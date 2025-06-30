import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getBlanco() {
  const { data, error } = await supabase
    .from('blanco')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar blanco:', error);
    return [];
  }

  return data;
}

export async function updateBlanco(id, fields) {
  const { error } = await supabase
    .from('blanco')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating blanco:', error);
    return false; 
  }

  return true; 
}


export const addBlanco = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('blanco')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar blanco:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteBlanco = async (id) => {
  const { error } = await supabase
    .from('blanco')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar blanco:', error);
    return false;
  }

  return true;
};
