import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getArroces() {
  const { data, error } = await supabase
    .from('arroces')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar arroces:', error);
    return [];
  }

  return data;
}

export async function updateArroces(id, fields) {
  const { error } = await supabase
    .from('arroces')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating arroz:', error);
    return false; 
  }

  return true; 
}

export const addArroces = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('arroces')
    .insert(nuevoPlato)
    .select();

  if (error) {
    console.error('Error al insertar arroz:', error);
    return null;
  }

  return data[0];
};

export const deleteArroces = async (id) => {
  const { error } = await supabase
    .from('arroces')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar arroz:', error);
    return false;
  }

  return true;
};
