import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home/home';
import Comida from './pages/comida/comida';
import About from './pages/about/about';
import Reservas from './pages/reservas/reservas';
import Entrantes from './pages/comida/categorias/entrantes/entrantes';
import Sartenes from './pages/comida/categorias/sartenes/sartenes';
import Ensaladas from './pages/comida/categorias/ensaladas/ensaladas';
import Pescados from './pages/comida/categorias/pescados/pescados';
import Carnes from './pages/comida/categorias/carnes/carnes';
import Arroces from './pages/comida/categorias/arroces/arroces';
import Pecar from './pages/comida/categorias/pecar/pecar';
import Restaurante from './pages/restaurante';
import TostasBocadillos from './pages/tostas_bocadillos/tostas_bocadillos';
import Desayunos from './pages/desayunos/desayunos';
import Cafe from './pages/desayunos/cafe/cafe';
import Dulces from './pages/desayunos/dulces_salados/dulces_salados';
import Merienda from './pages/desayunos/merienda/merienda';
import MenuDelDia from './pages/menu_del_dia/menu_del_dia';
import Bebidas from './pages/bebidas/bebidas';
import Vino from './pages/bebidas/vino/vino';
import Cervezas from './pages/bebidas/cervezas/cervezas';
import Refrescos from './pages/bebidas/refrescos/refrescos';
import AdminEditor from './pages/admin/admin';
import GestionReserva from './pages/reservas/gestionarReserva/gestionarReserva';
import Terminos from './pages/reservas/terminos';
import Consentimiento from './pages/reservas/consentimiento';
import { useTranslation, Trans } from 'react-i18next'; 
import './App.css';



function App() {

  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurante" element={<Restaurante />} />
            <Route path="/comida" element={<Comida />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/reservas/gestionar" element={<GestionReserva />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/consentimiento" element={<Consentimiento />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/comida/entrantes" element={<Entrantes />} />
            <Route path="/comida/sartenes" element={<Sartenes />} />
            <Route path="/comida/ensaladas" element={<Ensaladas />} />
            <Route path="/comida/pescados" element={<Pescados />} />
            <Route path="/comida/carnes" element={<Carnes />} />
            <Route path="/comida/arroces" element={<Arroces />} />
            <Route path="/comida/pecar" element={<Pecar />} />
            <Route path="/tostas_bocadillos" element={<TostasBocadillos />} />
            <Route path="/desayunos-meriendas" element={<Desayunos />} />
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/dulces_salados" element={<Dulces />} />
            <Route path="/merienda" element={<Merienda />} />
            <Route path="/menu_del_dia" element={<MenuDelDia />} />
            <Route path="/bebidas" element={<Bebidas />} />
            <Route path="/vino" element={<Vino />} />
            <Route path="/cervezas" element={<Cervezas />} />
            <Route path="/refrescos" element={<Refrescos />} />
            <Route path="/admin" element={<AdminEditor />} />

          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-left">{t('footerLeft', { year: currentYear })}</div>
          <div className="footer-right">
            <Trans i18nKey="footerRight">
             <span className="autor-resaltado"></span>
            </Trans>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
