import React, { useState } from 'react';
import { FAQS, COMPANY_INFO } from '../data';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#00AEEF]" />
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] tracking-tight mb-4">
            Resolvemos tus Dudas sobre el Servicio de Pipas
          </h2>
          <p className="text-base text-slate-600">
            Todo lo que necesitas saber para contratar tu pipa de agua con confianza y sin complicaciones.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-[#00AEEF] bg-sky-50/30 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg text-[#072559]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00AEEF] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact direct card */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              ¿Tienes otra duda específica de tu domicilio o requerimiento especial?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Nuestro equipo responde directamente por WhatsApp en minutos.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Transportes Reyes, tengo una duda antes de contratar la pipa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Preguntar por WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded-xl border border-slate-300 hover:border-[#0B3D91] text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
