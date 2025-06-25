import { supabase } from '../../antidotoDB/supaBaseClient';

export async function getMenuDelDia() {
  const { data, error } = await supabase
    .from('menu_dia')
    .select(`
      id,
      fecha,
      precio,
      menu_platos (
        tipo,
        plato
      )
    `);

  if (error) {
    console.error('Error al cargar el menú del día:', error);
    return null;
  }

  if (!data || data.length === 0) return null;

  const latestMenu = data[data.length - 1];

  // Ordenar los platos por tipo en el frontend
  latestMenu.menu_platos.sort((a, b) => {
    const order = { primero: 0, segundo: 1, postre: 2 };
    return order[a.tipo] - order[b.tipo];
  });

  return latestMenu;
}