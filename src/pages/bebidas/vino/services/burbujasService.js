import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getBurbujas() {
  const { data, error } = await supabase
    .from('burbujas')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar burbujas:', error);
    return [];
  }

  return data;
}
