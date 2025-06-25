import { supabase } from '../../antidotoDB/supaBaseClient';

export async function getBocadillos() {
  const { data, error } = await supabase
    .from('bocadillos')
    .select('*')
    .order('id', { ascending: true }); // 👈 Orden fijo

  if (error) {
    console.error('Error al cargar bocadillos:', error);
    return [];
  }

  return data;
}
