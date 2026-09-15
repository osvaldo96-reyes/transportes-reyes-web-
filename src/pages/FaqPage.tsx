import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FaqSection } from '../components/FaqSection';
import { useNavigation } from '../context/NavigationContext';
import { HelpCircle, Phone, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const FaqPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        currentLabel="Preguntas Frecuentes"
        badge="Respuestas Inmediatas"
        title="Preguntas Frecuentes sobre el Servicio de Pipas"
        subtitle="Todo lo que necesitas saber antes de contratar: tiempos de entrega, métodos de pago, mangueras y maniobras de llenado."
        badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-[#00AEEF]" />}
      />

      {/* Main FAQ Component */}
      <FaqSection />

      {/* Still have questions? Help Banner */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-[#0B3D91] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                ¿Tienes alguna duda específica?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Habla directamente con nuestro centro de despacho
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Nuestros operadores y asesores te atenderán de inmediato para aclarar cualquier detalle sobre accesos de pipa, metros de manguera o cotizaciones especiales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Transportes Reyes, tengo una pregunta sobre el servicio de pipas.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Preguntar por WhatsApp</span>
              </a>
              <button
                onClick={() => navigate('cotizador')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Ir al Cotizador</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
