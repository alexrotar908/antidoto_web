import { supabase } from '../../../antidotoDB/supaBaseClient';

export async function getCafes() {
  const { data, error } = await supabase
    .from('cafes')
    .select('*')
    .order('id', { ascending: true }); // opcional, para ordenar por tipo
  if (error) {
    console.error('Error al obtener cafés:', error);
    return [];
  }
  return data;
}


export async function updateCafes(id, fields) {
  const { error } = await supabase
    .from('cafes')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating cafes:', error);
    return false; 
  }

  return true; 
}


export const addCafes = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('cafes')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar plato:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteCafes = async (id) => {
  const { error } = await supabase
    .from('cafes')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar plato:', error);
    return false;
  }

  return true;
};

