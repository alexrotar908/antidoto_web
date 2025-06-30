import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getFaena() {
  const { data, error } = await supabase
    .from('faena')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar faena:', error);
    return [];
  }

  return data;
}

export async function updateFaena(id, fields) {
  const { error } = await supabase
    .from('faena')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating faena:', error);
    return false; 
  }

  return true; 
}


export const addFaena = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('faena')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar faena:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteFaena = async (id) => {
  const { error } = await supabase
    .from('faena')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar faena:', error);
    return false;
  }

  return true;
};
