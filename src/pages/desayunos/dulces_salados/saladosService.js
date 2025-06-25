import { supabase } from '../../../antidotoDB/supaBaseClient';

export async function getSalados() {
  const { data, error } = await supabase
    .from('salados')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar salados:', error);
    return [];
  }

  return data;
}
