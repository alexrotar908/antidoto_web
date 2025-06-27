import { supabase } from '../../../antidotoDB/supaBaseClient';

export async function getMeriendas() {
  const { data, error } = await supabase
    .from('meriendas')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar meriendas:', error);
    return [];
  }

  return data;
}

export async function updateMeriendas(id, fields) {
  const { error } = await supabase
    .from('meriendas')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating meriendas:', error);
    return false; 
  }

  return true; 
}


export const addMeriendas = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('meriendas')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar plato:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteMeriendas= async (id) => {
  const { error } = await supabase
    .from('meriendas')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar plato:', error);
    return false;
  }

  return true;
};
