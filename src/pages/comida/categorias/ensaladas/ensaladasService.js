import { supabase } from '../../../../antidotoDB/supaBaseClient';

export async function getEnsaladas() {
  const { data, error } = await supabase
    .from('ensaladas')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar ensaladas:', error);
    return [];
  }

  return data;
}
