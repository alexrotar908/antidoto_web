import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const ADMIN_KEY = 'antidotoSuperClave2024';

function Navbar() {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const key = params.get('key');

    if (key === ADMIN_KEY) {
      sessionStorage.setItem('adminKey', key);
      setIsAdmin(true);
    } else {
      const savedKey = sessionStorage.getItem('adminKey');
      if (savedKey === ADMIN_KEY) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [location]);

  const adminLink = isAdmin ? <li><Link to={`/admin?key=${ADMIN_KEY}`}>Admin</Link></li> : null;

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/restaurante">Restaurante</Link></li>
        <li><Link to="/reservas">Reservas</Link></li>
        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        {adminLink}
      </ul>
    </nav>
  );
}

export default Navbar;
