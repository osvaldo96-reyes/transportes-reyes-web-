import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CoverageZones } from '../components/CoverageZones';
import { useNavigation } from '../context/NavigationContext';
import { MapPin, Navigation, Clock, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const CoveragePage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        currentLabel="Zonas de Cobertura"
        badge="Rutas en CDMX y Estado de México"
        title="Zonas de Cobertura y Tiempos de Llegada"
        subtitle="Unidades ubicadas estratégicamente para llegar a tu colonia o municipio en el menor tiempo posible, con servicio 24 horas de lunes a sábado."
        badgeIcon={<MapPin className="w-3.5 h-3.5 text-[#00AEEF]" />}
      />

      {/* Coverage Zones Component */}
      <CoverageZones />

      {/* Direct Logistics Callout */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B3D91] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                ¿No encuentras tu colonia o municipio en la lista?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Consultamos tu ubicación GPS de inmediato
              </h3>
              <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
                Nuestras pipas de 10k, 20k y 45k litros cubren rutas extendidas en todo el Valle de México y municipios conurbados del Edomex. Escríbenos con tu código postal para confirmarte tiempo de arribo.
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Transportes Reyes, quiero consultar si tienen cobertura en mi colonia / código postal.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enviar Ubicación por WhatsApp</span>
                </a>
                <button
                  onClick={() => navigate('cotizador')}
                  className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 transition-colors cursor-pointer"
                >
                  Ir al Cotizador
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
