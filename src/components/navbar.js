import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './navbar.css';

const ADMIN_KEY = 'antidotoSuperClave2024';

function Navbar() {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const key = params.get('key');

    if (key === ADMIN_KEY) {
      sessionStorage.setItem('adminKey', key);
      setIsAdmin(true);
    } else {
      const savedKey = sessionStorage.getItem('adminKey');
      setIsAdmin(savedKey === ADMIN_KEY);
    }
  }, [location]);

  const adminLink = isAdmin ? <li><Link to={`/admin?key=${ADMIN_KEY}`}>{t('admin')}</Link></li> : null;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
     <ul className="nav-links">
      <li><Link to="/">{t('inicio')}</Link></li>
      <li><Link to="/restaurante">{t('restaurante.title')}</Link></li>
      <li><Link to="/reservas">{t('reservas')}</Link></li>
      <li><Link to="/sobre-nosotros">{t('sobreNosotros')}</Link></li>
           {adminLink}
     </ul>

     <div className="language-selector">
       <button onClick={() => changeLanguage('es')}>{t('espanol')}</button>
       <button onClick={() => changeLanguage('en')}>{t('ingles')}</button>
     </div>
    </nav>

  );
}

export default Navbar;
