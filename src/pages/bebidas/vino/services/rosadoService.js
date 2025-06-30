import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getRosado() {
  const { data, error } = await supabase
    .from('rosado')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar rosado:', error);
    return [];
  }

  return data;
}

export async function updateRosado(id, fields) {
  const { error } = await supabase
    .from('rosado')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating rosado:', error);
    return false; 
  }

  return true; 
}


export const addRosado = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('rosado')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar rosado:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteRosado = async (id) => {
  const { error } = await supabase
    .from('rosado')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar rosado:', error);
    return false;
  }

  return true;
};