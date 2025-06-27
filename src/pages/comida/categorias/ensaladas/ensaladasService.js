import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getEnsaladas() {
  const { data, error } = await supabase
    .from('ensaladas')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar ensaladas:', error);
    return [];
  }

  return data;
}

export async function updateEnsalada(id, fields) {
  const { error } = await supabase
    .from('ensaladas')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating entrantes:', error);
    return false; 
  }

  return true; 
}


export const addEnsalada = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('ensaladas')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar ensalada:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteEnsalada = async (id) => {
  const { error } = await supabase
    .from('ensaladas')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar ensalada:', error);
    return false;
  }

  return true;
};
