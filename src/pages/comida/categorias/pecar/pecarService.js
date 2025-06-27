import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getPecar() {
  const { data, error } = await supabase
    .from('pecar')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar pecar:', error);
    return [];
  }

  return data;
}

export async function updatePecar(id, fields) {
  const { error } = await supabase
    .from('pecar')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating pecar:', error);
    return false; 
  }

  return true; 
}


export const addPecar = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('pecar')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar pecar:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deletePecar = async (id) => {
  const { error } = await supabase
    .from('pecar')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar pecar:', error);
    return false;
  }

  return true;
};
