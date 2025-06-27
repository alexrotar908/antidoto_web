import { supabase } from '../../antidotoDB/supaBaseClient';

export async function getTostas() {
  const { data, error } = await supabase
    .from('tostas')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar tostas:', error);
    return [];
  }

  return data;
}

export async function updateTostas(id, fields) {
  const { error } = await supabase
    .from('tostas')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating tostas:', error);
    return false; 
  }

  return true; 
}


export const addTostas = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('tostas')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar tostas:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteTostas = async (id) => {
  const { error } = await supabase
    .from('tostas')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar tostas:', error);
    return false;
  }

  return true;
};
