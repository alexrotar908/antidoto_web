import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getCarnes() {
  const { data, error } = await supabase
    .from('carnes')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar carnes:', error);
    return [];
  }

  return data;
}


export async function updateCarne(id, fields) {
  const { error } = await supabase
    .from('carnes')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating carne:', error);
    return false; 
  }

  return true; 
}

export const addCarne = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('carnes')
    .insert(nuevoPlato)
    .select();

  if (error) {
    console.error('Error al insertar carne:', error);
    return null;
  }

  return data[0];
};

export const deleteCarne = async (id) => {
  const { error } = await supabase
    .from('carnes')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar carne:', error);
    return false;
  }

  return true;
};