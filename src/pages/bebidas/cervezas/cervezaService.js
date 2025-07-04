import { supabase } from '../../../antidotoDB/supaBaseClient';

export async function getCervezas() {
  const { data, error } = await supabase
    .from('cervezas')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error al cargar cervezas:', error);
    return [];
  }

  return data;
}

export async function updateCerveza(id, fields) {
  const { error } = await supabase
    .from('cervezas')
    .update(fields)
    .eq('id', id);

  if (error) {
    console.error('Error updating cerveza:', error);
    return false; 
  }

  return true; 
}

export const addCerveza = async (nuevaCerveza) => {
  const { data, error } = await supabase
    .from('cervezas')
    .insert(nuevaCerveza)
    .select();

  if (error) {
    console.error('Error al insertar cerveza:', error);
    return null;
  }

  return data[0];
};

export const deleteCerveza = async (id) => {
  const { error } = await supabase
    .from('cervezas')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar cerveza:', error);
    return false;
  }

  return true;
};
