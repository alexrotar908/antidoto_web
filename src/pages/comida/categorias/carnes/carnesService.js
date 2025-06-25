import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getCarnes() {
  const { data, error } = await supabase
    .from('carnes')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar carnes:', error);
    return [];
  }

  return data;
}
