import { supabase } from '../../../antidotoDB/supaBaseClient';

export async function getDulces() {
 const { data, error } = await supabase
    .from('dulces')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar dulces:', error);
    return [];
  }

  return data;
}

export async function updateDulces(id, fields) {
  const { error } = await supabase
    .from('dulces')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating dulces:', error);
    return false; 
  }

  return true; 
}


export const addDulces = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('dulces')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar plato:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteDulces= async (id) => {
  const { error } = await supabase
    .from('dulces')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar plato:', error);
    return false;
  }

  return true;
};
