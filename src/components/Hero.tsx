import React from 'react';
import { MessageCircle, Phone, ArrowRight, ShieldCheck, Truck, Clock, Droplets } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { Logo } from './Logo';
import { useNavigation } from '../context/NavigationContext';

export const Hero: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#072559]"
    >
      {/* Big Hero Background Image with High Quality & Tint Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_pipa_agua_1789312454598.jpg"
          alt="Camión pipa de agua de Transportes Reyes en servicio"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
          fetchPriority="high"
        />
        {/* Multilayer gradient overlays to ensure extreme text legibility while showing the truck clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072559]/95 via-[#072559]/80 to-[#0B3D91]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#072559] via-transparent to-[#072559]/50" />
        
        {/* Subtle decorative water wave grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00AEEF_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 text-white space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-sky-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse"></span>
              <span className="text-white font-bold">{COMPANY_INFO.yearsExperience} Años de Experiencia</span>
              <span className="text-sky-300">•</span>
              <span>Servicio 24 hrs de Lunes a Viernes</span>
            </div>

            {/* H1 Primary Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Pipas de Agua Potable y Tratada con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] via-sky-300 to-[#4CAF50]">
                Entrega Inmediata
              </span>
            </h1>

            {/* Brand Commercial Slogan as requested */}
            <p className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed max-w-2xl">
              &ldquo;{COMPANY_INFO.slogan}&rdquo;
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-2 rounded-lg border border-white/15">
                <Truck className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">10k, 20k y 45k Litros</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-2 rounded-lg border border-white/15">
                <Droplets className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Potable &amp; Tratada</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-2 rounded-lg border border-white/15 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">Llegada en 30-45 min</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.quoteDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>Solicitar Pipa por WhatsApp</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>

              <button
                id="hero-quote-calculator-btn"
                onClick={() => navigate('cotizador')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 active:bg-white/30 text-white font-bold text-base border border-white/30 backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Calcular Cotización Online</span>
              </button>
            </div>

            {/* Service badges and assurance */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
                Factura Electrónica (CFDI)
              </span>
              <span>•</span>
              <span>Mangueras de hasta 100 metros</span>
              <span>•</span>
              <span>Bomba de alta presión para descarga rápida</span>
            </div>
          </div>

          {/* Quick Floating Quote Card / Summary Widget */}
          <div className="lg:col-span-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/40 text-slate-800 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo-transportes-reyes.svg"
                    alt="Transportes Reyes"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold animate-pulse">
                  Unidades Libres
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Abastecemos tu casa, cisterna, empresa o proyecto con respuesta rápida en CDMX y Edomex.
              </p>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-xs font-semibold text-slate-700">Capacidades:</span>
                  <span className="text-xs font-bold text-[#0B3D91]">10k, 20k y 45,000 L</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-xs font-semibold text-slate-700">Tipo de Agua:</span>
                  <span className="text-xs font-bold text-sky-700">Potable y Tratada</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-xs font-semibold text-slate-700">Horario:</span>
                  <span className="text-xs font-bold text-emerald-700">24 hrs Lunes a Viernes</span>
                </div>
              </div>

              <div className="pt-1 flex flex-col gap-2.5">
                <a
                  id="hero-card-whatsapp-cta"
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Transportes Reyes, necesito informes y cotización inmediata para una pipa de agua.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Pedir Cotización al WhatsApp</span>
                </a>
                <a
                  id="hero-card-phone-cta"
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:border-[#0B3D91] text-slate-700 hover:text-[#0B3D91] font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0B3D91]" />
                  <span>Llamada Directa: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 text-slate-50 fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.04,130.83,121.31,191,105.81,234.34,94.67,276.4,74.79,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
