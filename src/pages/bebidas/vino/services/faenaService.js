import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getFaena() {
  const { data, error } = await supabase
    .from('faena')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar faena:', error);
    return [];
  }

  return data;
}
