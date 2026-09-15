import React, { useState } from 'react';
import { SERVICES, COMPANY_INFO } from '../data';
import { CheckCircle, MessageCircle, ArrowRight, Droplet, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'potable' | 'tratada' | 'urgente'>('all');

  const filteredServices = SERVICES.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'potable') return service.waterType === 'potable' || service.waterType === 'ambas';
    if (activeFilter === 'tratada') return service.waterType === 'tratada' || service.waterType === 'ambas';
    if (activeFilter === 'urgente') return service.id === 'emergencias-desabasto' || service.id === 'llenado-cisternas';
    return true;
  });

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider mb-3">
            <Droplet className="w-3.5 h-3.5 text-[#00AEEF]" />
            Soluciones Integrales de Agua
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] tracking-tight mb-4">
            Nuestros Servicios de Pipas de Agua
          </h2>
          <p className="text-base text-slate-600">
            Abastecemos con puntualidad y máxima higiene a casas, conjuntos residenciales, empresas, constructoras y eventos especiales en CDMX y el Estado de México.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#0B3D91] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todos los Servicios ({SERVICES.length})
            </button>
            <button
              onClick={() => setActiveFilter('potable')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'potable'
                  ? 'bg-[#00AEEF] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              💧 Agua Potable Certificada
            </button>
            <button
              onClick={() => setActiveFilter('tratada')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'tratada'
                  ? 'bg-[#4CAF50] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              🌱 Agua Tratada e Industrial
            </button>
            <button
              onClick={() => setActiveFilter('urgente')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'urgente'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              🚨 Emergencias &amp; Cisternas
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const quoteMessage = `Hola Transportes Reyes, deseo cotizar el servicio de "${service.title}" en pipa.`;
            const waLink = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(quoteMessage)}`;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#00AEEF]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Badge */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#0B3D91] shadow-sm">
                      {service.badge}
                    </span>
                    {service.waterType === 'potable' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#00AEEF] text-white shadow-sm">
                        Potable
                      </span>
                    )}
                    {service.waterType === 'tratada' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#4CAF50] text-white shadow-sm">
                        Tratada
                      </span>
                    )}
                    {service.waterType === 'ambas' && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#0B3D91] text-white shadow-sm">
                        Potable / Tratada
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="pt-2">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 hover:border-emerald-300 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Cotizar este servicio por WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 ml-auto" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA for Special Requirement */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B3D91] via-[#072559] to-[#0B3D91] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#00AEEF] font-bold">
              <Sparkles className="w-4 h-4" />
              ¿Requieres un servicio especial o programado?
            </div>
            <h4 className="text-xl sm:text-2xl font-black">
              Brindamos contratos de suministro continuo y pipas para emergencias nocturnas
            </h4>
            <p className="text-sm text-slate-200 max-w-2xl">
              Atendemos naves industriales, comedores, hospitales, obras civiles y plazas con abonos periódicos o servicios bajo demanda 24 horas.
            </p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Transportes Reyes, requiero asesoría para un suministro periódico o servicio especial.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-[#00AEEF] hover:bg-sky-400 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Hablar con un asesor</span>
          </a>
        </div>
      </div>
    </section>
  );
};
