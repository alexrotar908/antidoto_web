import { supabase } from '../../antidotoDB/supaBaseClient';

export async function getMenuDelDia() {
  const { data, error } = await supabase
    .from('menu_dia')
    .select(`
      id,
      fecha,
      precio,
      menu_platos (
        id,
        tipo,
        plato,
        plato_es,
        plato_en
      )
    `)
    .order('fecha', { ascending: false }) // ordena por fecha descendente
    .limit(1) // solo el último

  if (error) {
    console.error('Error al cargar el menú del día:', error);
    return null;
  }

  if (!data || data.length === 0) return null;

  const latestMenu = data[0];

  // Ordenar los platos por tipo en el frontend
  latestMenu.menu_platos.sort((a, b) => {
    const order = { primero: 0, segundo: 1, postre: 2 };
    return order[a.tipo] - order[b.tipo];
  });

  return latestMenu;
}

// Crear nuevo menú del día
export async function crearMenuDelDia(fecha, precio) {
  const { data, error } = await supabase
    .from('menu_dia')
    .insert([{ fecha, precio }])
    .select()
    .single();

  if (error) {
    console.error('Error al crear menú del día:', error);
    return null;
  }

  return data;
}

// Añadir plato al menú
export async function agregarPlato(menu_id, tipo, plato, plato_es, plato_en) {
  const { data, error } = await supabase
    .from('menu_platos')
    .insert([{ menu_id, tipo, plato, plato_es, plato_en}])
    .select()
    .single();

  if (error) {
    console.error('Error al añadir plato:', error);
    return null;
  }

  return data;
}

// Actualizar plato
export async function actualizarPlato(id, nuevoPlato) {
  const { error } = await supabase
    .from('menu_platos')
    .update({ plato: nuevoPlato })
    .eq('id', id);

  return error ? false : true;
}

// Eliminar plato
export async function eliminarPlato(id) {
  const { error } = await supabase
    .from('menu_platos')
    .delete()
    .eq('id', id);

  return error ? false : true;
}

// Actualizar precio del menú
export async function actualizarPrecioMenu(id, precio) {
  const { error } = await supabase
    .from('menu_dia')
    .update({ precio })
    .eq('id', id);

  return error ? false : true;
}