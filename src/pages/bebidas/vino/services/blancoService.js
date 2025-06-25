import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getBlanco() {
  const { data, error } = await supabase
    .from('blanco')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar blanco:', error);
    return [];
  }

  return data;
}
