import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getEntrantes() {
  const { data, error } = await supabase
    .from('entrantes')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar entrantes:', error);
    return [];
  }

  return data;
}

export async function updateEntrante(id, fields) {
  const { error } = await supabase
    .from('entrantes')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating entrantes:', error);
    return false; 
  }

  return true; 
}


export const addEntrante = async (nuevoPlato) => {
  const { data, error } = await supabase
    .from('entrantes')
    .insert(nuevoPlato)
    .select(); // 👈 Esto es lo que asegura que devuelva el nuevo objeto con su id

  if (error) {
    console.error('Error al insertar plato:', error);
    return null;
  }

  return data[0]; // el nuevo plato insertado
};

export const deleteEntrante = async (id) => {
  const { error } = await supabase
    .from('entrantes')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar plato:', error);
    return false;
  }

  return true;
};



