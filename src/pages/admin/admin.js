import React from 'react';
import { useLocation } from 'react-router-dom';
import useAdminKey from './hooks/useAdminKey';
import DesayunosSection from './sections/desayunosSection';
import ComidasSection from './sections/comidasSection';
import TostasBocadillosSection from './sections/tostasBocadillosSection';
import VinoSection from './sections/vinoSection';
import MenuDelDiaSection from './sections/menuDelDiaSection';
import './admin.css';

export default function AdminEditor() {
  const isAdmin = useAdminKey();

  if (!isAdmin) return <h2>Acceso no autorizado</h2>;

  return (
    <div className="admin-editor-container">
      <h1>Panel de administración</h1>
      <DesayunosSection />
      <ComidasSection />
      <TostasBocadillosSection />
      <VinoSection/>
      <MenuDelDiaSection/>
    </div>
  );
}