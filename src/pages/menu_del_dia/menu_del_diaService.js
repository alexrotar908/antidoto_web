// src/menu_del_dia/menu_del_diaService.js
import { supabase } from '../../antidotoDB/supaBaseClient';

const BUCKET = 'imagenes-antidoto';

/** Nombre único dentro de subcarpeta por idioma */
function uniqueFileName(lang, originalName) {
  const ext = (originalName?.split('.').pop() || 'jpg').toLowerCase();
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const rand = Math.random().toString(36).slice(2, 8);
  // p.ej.: menu-del-dia/es/2025-09-02-abc123.jpg
  return `menu-del-dia/${lang}/${stamp}-${rand}.${ext}`;
}

/** Sube a Storage y devuelve { path, url } */
async function uploadToStorage(path, file) {
  const opts = {
    upsert: true,                    // temporal para descartar "resource exists"
    contentType: file?.type || 'image/jpeg',
    cacheControl: '3600',
  };
  const { error: upErr } = await supabase.storage.from(BUCKET).upload(path, file, opts);
  if (upErr) {
    // 👇 verás el mensaje en la consola
    console.error('[Storage upload error]', { message: upErr.message, status: upErr.statusCode, name: upErr.name });
    throw upErr;
  }
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return { path, url: data?.publicUrl };
}

/** Último menú activo (por fecha desc) */
export async function getMenuDelDia() {
  const { data, error } = await supabase
    .from('menu_dia')
    .select('id, fecha, activo, imagen_url, imagen_path, imagen_url_en, imagen_path_en')
    .eq('activo', true)
    .order('fecha', { ascending: false })
    .limit(1);

  if (error) {
    console.error('Error al cargar el menú del día:', error);
    return null;
  }
  return data?.[0] || null;
}

/**
 * Crear menú con imagen ES y/o EN.
 * Compatibilidad: si pasas "file", se usa como ES.
 * @param {{fecha: string, file?: File, fileEs?: File, fileEn?: File}} params
 */
export async function crearMenuConImagen({ fecha, file, fileEs, fileEn } = {}) {
  try {
    // compat: permitir "file" para ES
    if (!fileEs && file) fileEs = file;
    if (!fileEs && !fileEn) throw new Error('Falta al menos una imagen (ES o EN)');

    let es = null, en = null;

    if (fileEs) {
      const pathEs = uniqueFileName('es', fileEs.name);
      es = await uploadToStorage(pathEs, fileEs); // { path, url }
    }
    if (fileEn) {
      const pathEn = uniqueFileName('en', fileEn.name);
      en = await uploadToStorage(pathEn, fileEn);
    }

    const insertRow = {
      fecha,
      activo: true,
      ...(es && { imagen_url: es.url, imagen_path: es.path }),
      ...(en && { imagen_url_en: en.url, imagen_path_en: en.path }),
    };

    const { data, error } = await supabase
      .from('menu_dia')
      .insert([insertRow])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (e) {
    console.error('Error al crear menú con imagen:', e);
    return null;
  }
}

/** Reemplaza la imagen ES (compatibilidad con tu UI actual) */
export async function actualizarImagenMenu(id, file) {
  try {
    if (!file) throw new Error('Falta el archivo de imagen');
    const path = uniqueFileName('es', file.name);
    const { path: newPath, url } = await uploadToStorage(path, file);

    const { data, error } = await supabase
      .from('menu_dia')
      .update({ imagen_url: url, imagen_path: newPath })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('[menu_dia update error]', error);
      throw error;
    }
    return data;
  } catch (e) {
    console.error('Error al actualizar la imagen (ES):', e);
    return null;
  }
}

/** Reemplaza la imagen por idioma: lang = 'es' | 'en' */
export async function actualizarImagenMenuPorIdioma(id, lang, file) {
  try {
    if (!file) throw new Error('Falta el archivo de imagen');
    if (!['es', 'en'].includes(lang)) throw new Error('Idioma inválido');

    const path = uniqueFileName(lang, file.name);
    const { path: newPath, url } = await uploadToStorage(path, file);

    const patch =
      lang === 'es'
        ? { imagen_url: url, imagen_path: newPath }
        : { imagen_url_en: url, imagen_path_en: newPath };

    const { data, error } = await supabase
      .from('menu_dia')
      .update(patch)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('[menu_dia update error]', error);
      throw error;
    }
    return data;
  } catch (e) {
    console.error('Error al actualizar la imagen por idioma:', e);
    return null;
  }
}

/** Desactiva un menú (deja de mostrarse públicamente) */
export async function desactivarMenu(id) {
  const { error } = await supabase.from('menu_dia').update({ activo: false }).eq('id', id);
  return !error;
}

/** Elimina el menú y sus imágenes del Storage (ES/EN si existen) */
export async function eliminarMenu(id) {
  try {
    const { data: row, error: selErr } = await supabase
      .from('menu_dia')
      .select('imagen_path, imagen_path_en')
      .eq('id', id)
      .single();
    if (selErr) throw selErr;

    const { error: delRowErr } = await supabase.from('menu_dia').delete().eq('id', id);
    if (delRowErr) throw delRowErr;

    const toRemove = [];
    if (row?.imagen_path) toRemove.push(row.imagen_path);
    if (row?.imagen_path_en) toRemove.push(row.imagen_path_en);
    if (toRemove.length) {
      const { error: rmErr } = await supabase.storage.from(BUCKET).remove(toRemove);
      if (rmErr) console.error('[Storage remove error]', rmErr);
    }
    return true;
  } catch (e) {
    console.error('Error al eliminar el menú:', e);
    return false;
  }
}
