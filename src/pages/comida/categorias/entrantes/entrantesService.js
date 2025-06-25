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

