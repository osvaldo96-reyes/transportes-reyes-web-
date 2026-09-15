import React, { useState } from 'react';
import { COVERAGE_ZONES, COMPANY_INFO } from '../data';
import { MapPin, CheckCircle, Clock, Search, MessageCircle, Navigation, ShieldCheck } from 'lucide-react';

export const CoverageZones: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZoneId, setSelectedZoneId] = useState<string>(COVERAGE_ZONES[0].id);

  const filteredZones = COVERAGE_ZONES.filter((z) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      z.name.toLowerCase().includes(q) ||
      z.area.toLowerCase().includes(q) ||
      z.coloniasPrincipales.some((c) => c.toLowerCase().includes(q))
    );
  });

  const selectedZone = COVERAGE_ZONES.find((z) => z.id === selectedZoneId) || COVERAGE_ZONES[0];

  return (
    <section id="cobertura" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-[#4CAF50]" />
            Zona de Cobertura
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] tracking-tight mb-4">
            Rutas Activas en CDMX y Estado de México
          </h2>
          <p className="text-base text-slate-600">
            Nuestra base y flotilla están estratégicamente ubicadas para responder con rapidez en las alcaldías y municipios de mayor demanda.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar tu colonia o alcaldía (ej. Balbuena, Condesa, Reyes)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF] bg-slate-50 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Coverage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Zones selector list */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Zonas de Servicio Prioritario:
            </span>
            {filteredZones.length === 0 ? (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center text-sm text-slate-600">
                <p className="font-semibold">¿No ves tu colonia en la lista?</p>
                <p className="text-xs mt-1 text-slate-500">
                  También cubrimos zonas aledañas y límites con Edomex. Consúltanos directamente por WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hola Transportes Reyes, ¿tienen servicio en la colonia: ${searchQuery}?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Consultar mi colonia por WhatsApp</span>
                </a>
              </div>
            ) : (
              filteredZones.map((zone) => {
                const isSelected = selectedZone.id === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZoneId(zone.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                      isSelected
                        ? 'border-[#0B3D91] bg-blue-50/70 shadow-md ring-1 ring-[#0B3D91]'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#0B3D91]' : 'text-slate-400'}`} />
                        <h3 className="font-extrabold text-base text-slate-900">
                          {zone.name}
                        </h3>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                          {zone.area}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 pl-6">
                        {zone.description}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                        <Clock className="w-3 h-3" />
                        {zone.estimatedArrival}
                      </span>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Active Zone Detail Card */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="bg-gradient-to-br from-slate-900 to-[#072559] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                    Detalle de Cobertura
                  </span>
                  <h3 className="text-2xl font-black mt-0.5 text-white">
                    {selectedZone.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#4CAF50]/20 text-[#4CAF50] text-xs font-bold border border-[#4CAF50]/40">
                  {selectedZone.status}
                </span>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedZone.description}
              </p>

              {/* Colonias destacadas */}
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-sky-300 block mb-2.5">
                  Colonias y Puntos con Servicio Habitual:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedZone.coloniasPrincipales.map((colonia, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium text-slate-100 border border-white/10"
                    >
                      {colonia}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 rounded-lg bg-[#00AEEF]/20 text-xs font-bold text-sky-200 border border-[#00AEEF]/30">
                    + Zonas aledañas
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-[11px] text-slate-400 block">Tiempo Estimado:</span>
                  <span className="text-base font-black text-amber-300">
                    {selectedZone.estimatedArrival}
                  </span>
                </div>
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-[11px] text-slate-400 block">Disponibilidad:</span>
                  <span className="text-base font-black text-emerald-400">
                    24 hrs L-V
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp quote for this zone */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hola Transportes Reyes, requiero pipa de agua para la zona de ${selectedZone.name}. ¿Tienen pipa disponible ahora?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Pedir Pipa para {selectedZone.name} por WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
                <span>Rutas vigiladas y conductores certificados con equipo de seguridad.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
