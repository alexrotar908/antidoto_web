import { supabase } from '../../antidotoDB/supaBaseClient';

export async function getTostas() {
  const { data, error } = await supabase
    .from('tostas')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar tostas:', error);
    return [];
  }

  return data;
}
