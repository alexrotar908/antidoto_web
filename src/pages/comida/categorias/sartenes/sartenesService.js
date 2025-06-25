import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getSartenes() {
  const { data, error } = await supabase
    .from('sartenes')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar sartenes:', error);
    return [];
  }

  return data;
}
