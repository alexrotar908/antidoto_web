import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getPecar() {
  const { data, error } = await supabase
    .from('pecar')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar pecar:', error);
    return [];
  }

  return data;
}
