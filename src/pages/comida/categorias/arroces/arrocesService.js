import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getArroces() {
  const { data, error } = await supabase
    .from('arroces')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar arroces:', error);
    return [];
  }

  return data;
}
