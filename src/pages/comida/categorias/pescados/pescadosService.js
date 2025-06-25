import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getPescados() {
  const { data, error } = await supabase
    .from('pescados_mariscos')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar pescados_mariscos:', error);
    return [];
  }

  return data;
}
