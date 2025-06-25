import { supabase } from '../../../antidotoDB/supaBaseClient';

export async function getDulces() {
 const { data, error } = await supabase
    .from('dulces')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar dulces:', error);
    return [];
  }

  return data;
}
