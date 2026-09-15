import React from 'react';
import { COMPANY_INFO } from '../data';
import { Sparkles } from 'lucide-react';

export const BrandEssence: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-sky-50/40 via-white to-slate-50 relative overflow-hidden">
      {/* Background soft geometric water ripples */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
            Nuestra Razón, Un Mejor Mañana
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] tracking-tight mb-4">
            Esencia y Compromiso de Transportes Reyes
          </h2>
          <p className="text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
            &ldquo;{COMPANY_INFO.slogan}&rdquo;
          </p>
        </div>

        {/* Display only the official logo image directly after the header */}
        <div className="flex flex-col items-center justify-center pt-2 pb-6">
          <div className="w-full max-w-2xl flex items-center justify-center p-4 sm:p-8 bg-white/80 backdrop-blur-xs rounded-3xl border border-slate-200/60 shadow-md transition-transform duration-300 hover:scale-[1.01]">
            <img
              src="/logo-transportes-reyes.svg"
              alt="Logotipo Oficial Transportes Reyes - Pipas de Agua Potable y Tratada"
              className="w-full max-w-xl h-auto object-contain select-none"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
