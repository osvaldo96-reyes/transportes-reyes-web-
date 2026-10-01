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
  capacidades: 'Capacidades de Pipas (10mil LT, 20mil LT, 45mil LT) | Transportes Reyes',
  cotizador: 'Cotizador de Pipas de Agua en Línea | Transportes Reyes',
  cobertura: 'Zonas de Cobertura CDMX y EdoMex | Transportes Reyes',
  nosotros: 'Nosotros y Calidad del Agua | Transportes Reyes',
  faq: 'Preguntas Frecuentes | Transportes Reyes',
};

const pageDescriptions: Record<PageId, string> = {
  inicio: 'Servicio de pipas de agua potable y tratada 24 hrs en CDMX y Estado de México. Pipas de 10mil, 20mil y 45mil litros. 15 años de experiencia. Pago contra entrega.',
  servicios: 'Pipas de agua para domicilio, llenado de cisternas, empresas, constructoras, albercas, eventos y emergencias. Servicio 24 hrs en CDMX y EdoMex.',
  capacidades: 'Pipas de agua de 10,000, 20,000 y 45,000 litros. Conoce qué capacidad necesitas para tu hogar, empresa o construcción. 30 metros de manguera incluidos.',
  cotizador: 'Cotiza tu pipa de agua en línea en segundos. Selecciona litros, tipo de agua, zona y recibe tu cotización por WhatsApp al instante.',
  cobertura: 'Cobertura inmediata en Iztapalapa, Coyoacán, Benito Juárez, Miguel Hidalgo, Azcapotzalco, Neza y más alcaldías de CDMX y Estado de México.',
  nosotros: '15 años suministrando agua potable y tratada en CDMX y EdoMex. Conoce nuestra flota, calidad del agua y compromiso con el servicio puntual.',
  faq: 'Preguntas frecuentes sobre pipas de agua: precios, tiempos de llegada, tipos de agua, capacidades y zonas de cobertura de Transportes Reyes.',
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

  const updateMetaTags = (page: PageId) => {
    if (pageTitles[page]) document.title = pageTitles[page];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && pageDescriptions[page]) metaDesc.setAttribute('content', pageDescriptions[page]);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && pageDescriptions[page]) ogDesc.setAttribute('content', pageDescriptions[page]);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && pageTitles[page]) ogTitle.setAttribute('content', pageTitles[page]);
  };

  const navigate = (page: PageId, scrollToTop = true) => {
    setCurrentPage(page);
    const targetHash = page === 'inicio' ? '#inicio' : `#${page}`;
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }
    updateMetaTags(page);
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      updateMetaTags(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    // Initial meta tags
    updateMetaTags(currentPage);

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
