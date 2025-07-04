import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './navbar.css';

const ADMIN_KEY = 'antidotoSuperClave2024';

function Navbar() {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const { t, i18n } = useTranslation();
  const activeRef = useRef(null);

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

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [location.pathname]);

  const adminLink = isAdmin ? (
    <li>
      <Link
        to={`/admin?key=${ADMIN_KEY}`}
        ref={location.pathname === "/admin" ? activeRef : null}
      >
        {t('admin')}
      </Link>
    </li>
  ) : null;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-scroll">
        <ul className="nav-links">
          <li>
            <Link to="/" ref={location.pathname === "/" ? activeRef : null}>
              {t('inicio')}
            </Link>
          </li>
          <li>
            <Link
              to="/restaurante"
              ref={location.pathname === "/restaurante" ? activeRef : null}
            >
              {t('restaurantes')}
            </Link>
          </li>
          <li>
            <Link
              to="/reservas"
              ref={location.pathname === "/reservas" ? activeRef : null}
            >
              {t('reservas_1')}
            </Link>
          </li>
          <li>
            <Link
              to="/sobre-nosotros"
              ref={location.pathname === "/sobre-nosotros" ? activeRef : null}
            >
              {t('sobreNosotros')}
            </Link>
          </li>
          {adminLink}
        </ul>
        
      <div className="language-selector">
        <button onClick={() => changeLanguage('es')}>{t('espanol')}</button>
        <span className="language-separator">|</span>
        <button onClick={() => changeLanguage('en')}>{t('ingles')}</button>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
