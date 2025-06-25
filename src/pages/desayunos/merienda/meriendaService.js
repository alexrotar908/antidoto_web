import { supabase } from '../../../antidotoDB/supaBaseClient';

export async function getMeriendas() {
  const { data, error } = await supabase
    .from('meriendas')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar meriendas:', error);
    return [];
  }

  return data;
}
