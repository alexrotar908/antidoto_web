// src/components/MenuDelDia.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../menu_del_dia/menu_del_dia.css';
import { getMenuDelDia } from './menu_del_diaService';
import { useTranslation } from 'react-i18next';

const MenuDelDia = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchMenu() {
      const menuData = await getMenuDelDia();
      setMenu(menuData);
      setLoading(false);
    }

    fetchMenu();
  }, []);

  if (loading) return <p className="menu-loading">{t('menuDia.cargando')}</p>;
  if (!menu) return <p className="menu-error">{t('menuDia.error')}</p>;

  const groupedPlatos = {
    primero: [],
    segundo: [],
    postre: [],
  };

  menu.menu_platos.forEach(({ tipo, plato }) => {
    if (groupedPlatos[tipo]) {
      groupedPlatos[tipo].push(plato);
    }
  });

  const nombrePlato = (plato) => {
    if (i18n.language === 'en') return plato.plato_en || plato.tipo;
    return plato.plato || plato.tipo;
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">{t('menuDia.titulo')}</h1>
      <p className="menu-subtitle">{t('menuDia.disponible')}</p>

      {['primero', 'segundo', 'postre'].map((tipo) => (
        <section className="menu-section" key={tipo}>
          <h2 className="menu-section-title">
            {t(`menuDia.${tipo}`)} <span>({t('menuDia.aElegir')})</span>
          </h2>
          <ul>
            {groupedPlatos[tipo].map((plato, index) => (
              <li key={index}>{nombrePlato(plato)}</li>
            ))}
          </ul>
        </section>
      ))}

      <div className="menu-extra">
        <p>{t('menuDia.incluye')}</p>
        <p className="menu-price">
          {t('menuDia.precio', { precio: menu.precio.toFixed(2) })}
        </p>
        <Link to="/restaurante" className="back-button">← {t('menuDia.volver')}</Link>
      </div>
    </div>
  );
};

export default MenuDelDia;
