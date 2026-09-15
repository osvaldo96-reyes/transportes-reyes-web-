export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  imageUrl: string;
  features: string[];
  waterType: 'potable' | 'tratada' | 'ambas';
}

export interface CapacityItem {
  capacity: string;
  liters: number;
  subtitle: string;
  recommendedFor: string[];
  vehicleType: string;
  hoseReach: string;
  imageUrl: string;
  popular?: boolean;
}

export interface CoverageZone {
  id: string;
  name: string;
  area: 'CDMX' | 'Estado de México';
  status: 'Cobertura Inmediata' | 'Cobertura Programada';
  description: string;
  coloniasPrincipales: string[];
  estimatedArrival: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'servicio' | 'calidad' | 'logistica';
}

export type PageId =
  | 'inicio'
  | 'servicios'
  | 'capacidades'
  | 'cotizador'
  | 'cobertura'
  | 'nosotros'
  | 'faq';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}
