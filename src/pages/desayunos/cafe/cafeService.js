import { supabase } from '../../../antidotoDB/supaBaseClient';

export async function getCafes() {
  const { data, error } = await supabase
    .from('cafes')
    .select('*')
    .order('id', { ascending: true }); // opcional, para ordenar por tipo
  if (error) {
    console.error('Error al obtener cafés:', error);
    return [];
  }
  return data;
}
