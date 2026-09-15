import React from 'react';
import { Hero } from '../components/Hero';
import { useNavigation } from '../context/NavigationContext';
import { SERVICES, CAPACITIES, COVERAGE_ZONES, FAQS, COMPANY_INFO } from '../data';
import {
  Droplets,
  Truck,
  Calculator,
  MapPin,
  Sparkles,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Master Hero Section */}
      <Hero />

      {/* 2. Quick Value Proposition Bar */}
      <section className="bg-[#0B3D91] text-white py-6 border-y border-blue-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00AEEF] flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-sky-200 uppercase tracking-wider font-bold">Horario</span>
                <span className="text-sm font-black text-white">Servicio 24 Horas</span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#4CAF50] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-sky-200 uppercase tracking-wider font-bold">Experiencia</span>
                <span className="text-sm font-black text-white">10 Años en el Mercado</span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-sky-200 uppercase tracking-wider font-bold">Flota</span>
                <span className="text-sm font-black text-white">10k, 20k y 45k Litros</span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00AEEF] flex-shrink-0">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-sky-200 uppercase tracking-wider font-bold">Calidad</span>
                <span className="text-sm font-black text-white">Potable y Tratada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-black uppercase tracking-wider mb-2">
                <Droplets className="w-3.5 h-3.5 text-[#00AEEF]" />
                Nuestros Servicios
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] tracking-tight">
                Soluciones Integrales de Agua en Pipa
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
                Atendemos desde urgencias habitacionales hasta suministros programados para obras y grandes industrias.
              </p>
            </div>
            <button
              onClick={() => navigate('servicios')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs sm:text-sm font-bold transition-all cursor-pointer group flex-shrink-0"
            >
              <span>Ver catálogo completo de servicios</span>
              <ArrowRight className="w-4 h-4 text-[#00AEEF] group-hover:text-white transition-colors" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#00AEEF]/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-100 text-[#0B3D91] mb-3">
                    {service.badge}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0B3D91] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 capitalize">
                    Agua {service.waterType}
                  </span>
                  <button
                    onClick={() => navigate('servicios')}
                    className="text-xs font-bold text-[#00AEEF] hover:text-[#0B3D91] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Detalles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Fleet Capacities Teaser */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-black uppercase tracking-wider mb-2">
              <Truck className="w-3.5 h-3.5 text-[#00AEEF]" />
              Capacidades Disponibles
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] tracking-tight">
              Flota Adaptada a tus Necesidades
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Disponemos de tres tamaños de cisterna para adaptarnos al volumen requerido y a las condiciones viales de acceso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAPACITIES.map((cap) => (
              <div
                key={cap.capacity}
                className={`bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                  cap.popular
                    ? 'border-[#00AEEF] shadow-xl ring-2 ring-[#00AEEF]/20'
                    : 'border-slate-200 shadow-md hover:shadow-lg'
                }`}
              >
                {cap.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00AEEF] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                    Más Solicitada para Casas
                  </span>
                )}
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] block mb-1">
                    {cap.subtitle}
                  </span>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-black text-slate-900">{cap.capacity}</span>
                    <span className="text-xs text-slate-500 font-bold">Litros</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    Vehículo: <strong className="text-slate-800">{cap.vehicleType}</strong>. Incluye motobomba y manguera con alcance de hasta {cap.hoseReach}.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {cap.recommendedFor.map((rec, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => navigate('capacidades')}
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Ver Especificaciones Técnicas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('capacidades')}
              className="inline-flex items-center gap-2 text-sm font-black text-[#0B3D91] hover:text-[#00AEEF] transition-colors cursor-pointer"
            >
              <span>Explorar equipamiento y motobombas en la página de Capacidades</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Online Quote Calculator Banner */}
      <section className="py-14 bg-[#072559] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#0B3D91] to-[#072559] p-8 sm:p-12 rounded-3xl border border-blue-900/80 shadow-2xl">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00AEEF] text-xs font-black uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                Cotizador en Línea
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Calcula tu Presupuesto al Momento
              </h2>
              <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
                Selecciona litros (10k, 20k o 45k), tipo de agua y tu colonia en CDMX o Edomex para generar tu orden directa a WhatsApp con operador disponible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button
                onClick={() => navigate('cotizador')}
                className="px-8 py-4 rounded-xl bg-[#00AEEF] hover:bg-sky-400 text-white font-black text-base shadow-lg shadow-sky-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Abrir Cotizador Interactivo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.quoteDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp 24 hrs</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Coverage & Zones Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Rutas y Municipios
              </div>
              <h2 className="text-3xl font-black text-[#0B3D91] tracking-tight">
                Cobertura en CDMX y Estado de México
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
                Nuestra base operativa distribuye pipas en Los Reyes La Paz, Neza, Iztapalapa, Cuauhtémoc, Texcoco y más.
              </p>
            </div>
            <button
              onClick={() => navigate('cobertura')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs sm:text-sm font-bold transition-all cursor-pointer flex-shrink-0"
            >
              <span>Ver todas las zonas y tiempos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {COVERAGE_ZONES.slice(0, 6).map((zone) => (
              <div
                key={zone.id}
                onClick={() => navigate('cobertura')}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:bg-emerald-50/40 transition-all cursor-pointer text-center"
              >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  {zone.area}
                </span>
                <h4 className="text-sm font-black text-slate-900 mb-1">{zone.name}</h4>
                <span className="text-[11px] font-medium text-emerald-700 block">
                  {zone.estimatedArrival}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. About & Brand Master Teaser */}
      <section className="py-16 bg-gradient-to-b from-sky-50/40 to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
                Nuestra Razón, Un Mejor Mañana
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] leading-tight">
                Esencia y Compromiso de Transportes Reyes
              </h2>
              <blockquote className="border-l-4 border-[#00AEEF] pl-4 text-base sm:text-lg text-slate-700 italic font-medium">
                &ldquo;{COMPANY_INFO.slogan}&rdquo;
              </blockquote>
              <p className="text-sm text-slate-600 leading-relaxed">
                Con más de 10 años de experiencia comprobada en el transporte de agua potable y tratada, nos hemos consolidado como el servicio de pipas más confiable del oriente de la zona metropolitana.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('nosotros')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Conoce más sobre Transportes Reyes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Official Logo Master Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => navigate('nosotros')}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <img
                  src="/logo-transportes-reyes.svg"
                  alt="Logotipo Oficial Transportes Reyes"
                  className="w-full max-w-sm h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="block text-center text-xs font-black text-[#00AEEF] mt-4 uppercase tracking-wider">
                  Ver Identidad Oficial y Compromiso →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Preview */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                Preguntas Comunes
              </div>
              <h2 className="text-3xl font-black text-[#0B3D91] tracking-tight">
                ¿Dudas sobre el Servicio de Pipas?
              </h2>
            </div>
            <button
              onClick={() => navigate('faq')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs sm:text-sm font-bold transition-all cursor-pointer flex-shrink-0"
            >
              <span>Ver todas las preguntas frecuentes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAQS.slice(0, 3).map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">{faq.question}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
                <button
                  onClick={() => navigate('faq')}
                  className="mt-4 text-xs font-bold text-[#00AEEF] hover:text-[#0B3D91] flex items-center gap-1 cursor-pointer"
                >
                  <span>Leer más detalles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
