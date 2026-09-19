import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ServicesSection } from '../components/ServicesSection';
import { useNavigation } from '../context/NavigationContext';
import { Droplets, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const ServicesPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        currentLabel="Servicios"
        badge="Catálogo Oficial de Suministro"
        title="Servicios de Pipas de Agua Potable y Tratada"
        subtitle="Abastecimiento puntual y garantizado para casas, comercios, obras de construcción, albercas y emergencias en CDMX y Estado de México."
        badgeIcon={<Droplets className="w-3.5 h-3.5 text-[#00AEEF]" />}
      />

      {/* Main Services Component */}
      <ServicesSection />

      {/* Informative Guide: Potable vs Treated Water */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#00AEEF] block mb-2">
              Guía de Selección
            </span>
            <h2 className="text-3xl font-black text-[#0B3D91]">
              ¿Qué tipo de agua necesitas para tu servicio?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Conoce la diferencia entre agua potable certificada y agua tratada para elegir la mejor opción según tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Agua Potable */}
            <div className="bg-gradient-to-br from-sky-50/70 to-white rounded-3xl p-8 border border-sky-100 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-black uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-[#0B3D91]" />
                Agua Potable Certificada
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                Para Consumo, Hogares y Negocios
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Agua cristalina, inodora y purificada que cumple estrictamente con las normas sanitarias mexicanas (NOM-127-SSA1). Ideal para uso humano directo.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Llenado de cisternas y tinacos domésticos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Restaurantes, hoteles, comedores y cafeterías</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Llenado de albercas residenciales y balnearios</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Clínicas, hospitales y escuelas</span>
                </li>
              </ul>
              <button
                onClick={() => navigate('cotizador')}
                className="w-full py-3 px-4 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Cotizar Pipa de Agua Potable</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Agua Tratada */}
            <div className="bg-gradient-to-br from-emerald-50/70 to-white rounded-3xl p-8 border border-emerald-100 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider mb-4">
                <Droplets className="w-4 h-4 text-emerald-600" />
                Agua Tratada y Reutilizada
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                Para Construcción y Riego
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Opción ecológica y económica procesada conforme a la NOM-003-SEMARNAT. No apta para consumo humano, diseñada para obras e industrias.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Compactación de terracerías y obra civil</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Mezclado de concreto y supresión de polvo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Riego de áreas verdes y campos deportivos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Lavado de maquinaria pesada e instalaciones</span>
                </li>
              </ul>
              <button
                onClick={() => navigate('cotizador')}
                className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Cotizar Pipa de Agua Tratada</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA Banner */}
      <section className="py-12 bg-[#072559] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black mb-1">¿Necesitas una pipa en este momento?</h3>
            <p className="text-slate-300 text-sm">Nuestras unidades están en ruta con servicio 24 horas de lunes a sábado.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('cotizador')}
              className="px-6 py-3 rounded-xl bg-[#00AEEF] hover:bg-sky-400 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
            >
              Usar Cotizador en Línea
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Transportes Reyes, requiero informes de sus servicios.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
