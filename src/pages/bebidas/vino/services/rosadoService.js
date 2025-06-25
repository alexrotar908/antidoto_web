import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getRosado() {
  const { data, error } = await supabase
    .from('rosado')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar rosado:', error);
    return [];
  }

  return data;
}
