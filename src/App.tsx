import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CapacitiesPage } from './pages/CapacitiesPage';
import { QuotePage } from './pages/QuotePage';
import { CoveragePage } from './pages/CoveragePage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Transportes Reyes | Pipas de Agua Potable y Tratada 24 hrs',
    description: 'Servicio de pipas de agua potable y tratada 24 hrs en CDMX y Estado de México. Pipas de 10mil, 20mil y 45mil litros. 15 años de experiencia. Pago contra entrega.',
  },
  '/servicios': {
    title: 'Servicios de Pipas de Agua | Transportes Reyes',
    description: 'Pipas de agua para domicilio, llenado de cisternas, empresas, constructoras, albercas, eventos y emergencias. Servicio 24 hrs en CDMX y EdoMex.',
  },
  '/capacidades': {
    title: 'Capacidades de Pipas (10mil LT, 20mil LT, 45mil LT) | Transportes Reyes',
    description: 'Pipas de agua de 10,000, 20,000 y 45,000 litros. Conoce qué capacidad necesitas para tu hogar, empresa o construcción. 30 metros de manguera incluidos.',
  },
  '/cotizador': {
    title: 'Cotizador de Pipas de Agua en Línea | Transportes Reyes',
    description: 'Cotiza tu pipa de agua en línea en segundos. Selecciona litros, tipo de agua, zona y recibe tu cotización por WhatsApp al instante.',
  },
  '/cobertura': {
    title: 'Zonas de Cobertura CDMX y EdoMex | Transportes Reyes',
    description: 'Cobertura inmediata en Iztapalapa, Coyoacán, Benito Juárez, Miguel Hidalgo, Azcapotzalco, Neza y más alcaldías de CDMX y Estado de México.',
  },
  '/nosotros': {
    title: 'Nosotros y Calidad del Agua | Transportes Reyes',
    description: '15 años suministrando agua potable y tratada en CDMX y EdoMex. Conoce nuestra flota, calidad del agua y compromiso con el servicio puntual.',
  },
  '/faq': {
    title: 'Preguntas Frecuentes | Transportes Reyes',
    description: 'Preguntas frecuentes sobre pipas de agua: precios, tiempos de llegada, tipos de agua, capacidades y zonas de cobertura de Transportes Reyes.',
  },
};

function MetaUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta['/'];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#00AEEF] selection:text-white">
      <MetaUpdater />
      <Navbar />
      <main id="main-content" className="flex-1 transition-opacity duration-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/capacidades" element={<CapacitiesPage />} />
          <Route path="/cotizador" element={<QuotePage />} />
          <Route path="/cobertura" element={<CoveragePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
