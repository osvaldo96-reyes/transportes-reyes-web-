import React from 'react';
import { CAPACITIES, COMPANY_INFO } from '../data';
import { Truck, Check, MessageCircle, ArrowRight, Gauge, Shield, Ruler } from 'lucide-react';

export const FleetCapacities: React.FC = () => {
  return (
    <section id="capacidades" className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5 text-[#0B3D91]" />
            Nuestra Flota
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] tracking-tight mb-4">
            Capacidades de Pipas Disponibles
          </h2>
          <p className="text-base text-slate-600">
            Contamos con unidades higiénicas, tanques de acero y bombas de alto caudal para ajustarnos a las dimensiones de tu calle y a tu volumen requerido.
          </p>
        </div>

        {/* 3 Capacities Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {CAPACITIES.map((cap) => {
            const waQuote = `Hola Transportes Reyes, requiero cotización para una pipa de ${cap.capacity}.`;
            const waLink = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(waQuote)}`;

            return (
              <div
                key={cap.capacity}
                className={`relative bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  cap.popular
                    ? 'border-[#00AEEF] ring-2 ring-[#00AEEF]/20 shadow-xl lg:-translate-y-2'
                    : 'border-slate-200 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {cap.popular && (
                  <div className="bg-gradient-to-r from-[#0B3D91] to-[#00AEEF] text-white text-center py-1.5 px-4 text-xs font-extrabold uppercase tracking-widest">
                    ★ Opción Más Solicitada ★
                  </div>
                )}

                {/* Top Image */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={cap.imageUrl}
                    alt={`Pipa de agua ${cap.capacity}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                      {cap.capacity}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B3D91]">
                      {cap.subtitle}
                    </h3>
                    
                    {/* Vehicle specs */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                        <span><strong>Tipo de Unidad:</strong> {cap.vehicleType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                        <span><strong>Alcance Manguera:</strong> {cap.hoseReach}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span><strong>Descarga:</strong> Bomba de alta presión incluida</span>
                      </div>
                    </div>

                    {/* Recommended for */}
                    <div className="mt-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2.5">
                        Ideal para:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {cap.recommendedFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quote button */}
                  <div className="pt-2">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                        cap.popular
                          ? 'bg-[#0B3D91] hover:bg-[#072559] text-white shadow-lg shadow-blue-900/25'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Cotizar {cap.capacity} por WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capacity guidance helper */}
        <div className="mt-12 bg-blue-50 border border-blue-200/80 rounded-2xl p-5 sm:p-6 text-center max-w-2xl mx-auto text-xs text-slate-700 space-y-1">
          <p className="font-bold text-[#0B3D91] text-sm">
            ¿No estás seguro de cuántos litros requieres?
          </p>
          <p>
            Mándanos las medidas de tu cisterna (largo × ancho × profundidad) o fotos de tu tinaco por WhatsApp y calculamos el volumen exacto en segundos sin costo.
          </p>
        </div>
      </div>
    </section>
  );
};
