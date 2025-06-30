import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getBurbujas() {
  const { data, error } = await supabase
    .from('burbujas')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar burbujas:', error);
    return [];
  }

  return data;
}


export async function updateBurbujas(id, fields) {
  const { error } = await supabase
    .from('burbujas')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating burbujas:', error);
    return false; 
  }

  return true; 
}


export const addBurbujas = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('burbujas')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar burbujas:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteBurbujas = async (id) => {
  const { error } = await supabase
    .from('burbujas')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar burbujas:', error);
    return false;
  }

  return true;
};
