import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageId } from '../types';

interface NavigationContextType {
  currentPage: PageId;
  navigate: (page: PageId, scrollToTop?: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const validPages: PageId[] = [
  'inicio',
  'servicios',
  'capacidades',
  'cotizador',
  'cobertura',
  'nosotros',
  'faq',
];

const pageTitles: Record<PageId, string> = {
  inicio: 'Transportes Reyes | Pipas de Agua Potable y Tratada 24 hrs',
  servicios: 'Servicios de Pipas de Agua | Transportes Reyes',
  capacidades: 'Capacidades de Pipas (10k, 20k, 45k L) | Transportes Reyes',
  cotizador: 'Cotizador de Pipas de Agua en Línea | Transportes Reyes',
  cobertura: 'Zonas de Cobertura CDMX y EdoMex | Transportes Reyes',
  nosotros: 'Nosotros y Calidad del Agua | Transportes Reyes',
  faq: 'Preguntas Frecuentes | Transportes Reyes',
};

function getPageFromHash(): PageId {
  if (typeof window === 'undefined') return 'inicio';
  const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
  if (validPages.includes(rawHash as PageId)) {
    return rawHash as PageId;
  }
  return 'inicio';
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  const navigate = (page: PageId, scrollToTop = true) => {
    setCurrentPage(page);
    const targetHash = page === 'inicio' ? '#inicio' : `#${page}`;
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }
    if (pageTitles[page]) {
      document.title = pageTitles[page];
    }
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      if (pageTitles[page]) {
        document.title = pageTitles[page];
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    // Initial title
    if (pageTitles[currentPage]) {
      document.title = pageTitles[currentPage];
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [currentPage]);

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
