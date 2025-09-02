// src/components/MenuDelDia.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../menu_del_dia/menu_del_dia.css';
import { getMenuDelDia } from './menu_del_diaService';
import { useTranslation } from 'react-i18next';

const MenuDelDia = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      const menuData = await getMenuDelDia();
      setMenu(menuData);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p className="menu-loading">{t('menuDia.cargando')}</p>;
  if (!menu) return <p className="menu-error">{t('menuDia.error')}</p>;

  // Elegir imagen según idioma, con fallback
  const isEnglish = i18n.language?.toLowerCase().startsWith('en');
  const imgUrl = isEnglish
    ? (menu.imagen_url_en || menu.imagen_url)
    : (menu.imagen_url || menu.imagen_url_en);

  return (
    <div className="menu-container">
      <h1 className="menu-title">{t('menuDia.titulo')}</h1>
      <p className="menu-subtitle">{t('menuDia.disponible')}</p>

      {imgUrl ? (
        <div className="menu-imagen-wrapper">
          <div className="menu-imagen-box">
            <img
              className="menu-imagen"
              src={imgUrl}
              alt={t('menuDia.titulo')}
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <p className="menu-error">
          {t('menuDia.sinImagen') || 'El menú del día aún no tiene imagen.'}
        </p>
      )}

      <div className="menu-extra">
        <Link to="/restaurante" className="back-button">
          ← {t('menuDia.volver')}
        </Link>
      </div>
    </div>
  );
};

export default MenuDelDia;
