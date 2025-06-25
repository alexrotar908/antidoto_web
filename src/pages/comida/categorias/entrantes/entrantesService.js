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
  if (error) console.error('Error updating entrante:', error);
}


export async function addEntrante(nuevoPlato) {
  const { data, error } = await supabase
    .from('entrantes')
    .insert([nuevoPlato]);

  if (error) {
    console.error('Error al añadir:', error);
    return null;
  }

  return data[0]; // devolvemos el plato creado
}
