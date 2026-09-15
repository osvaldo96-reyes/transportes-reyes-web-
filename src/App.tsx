import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Dedicated individual pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CapacitiesPage } from './pages/CapacitiesPage';
import { QuotePage } from './pages/QuotePage';
import { CoveragePage } from './pages/CoveragePage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage />;
      case 'servicios':
        return <ServicesPage />;
      case 'capacidades':
        return <CapacitiesPage />;
      case 'cotizador':
        return <QuotePage />;
      case 'cobertura':
        return <CoveragePage />;
      case 'nosotros':
        return <AboutPage />;
      case 'faq':
        return <FaqPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#00AEEF] selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Page Content Area */}
      <main id="main-content" className="flex-1 transition-opacity duration-200">
        {renderCurrentPage()}
      </main>

      {/* Comprehensive SEO & Contact Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quote Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
