import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FleetCapacities } from '../components/FleetCapacities';
import { useNavigation } from '../context/NavigationContext';
import { Truck, ShieldCheck, Zap, Gauge, Wrench, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const CapacitiesPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        currentLabel="Capacidades"
        badge="Flota y Equipamiento Especializado"
        title="Capacidades de Nuestras Pipas"
        subtitle="Manejamos pipas de 10,000, 20,000 y 45,000 litros listas para ajustarse exactamente al tamaño de tu cisterna o requerimiento de obra."
        badgeIcon={<Truck className="w-3.5 h-3.5 text-[#00AEEF]" />}
      />

      {/* Fleet Capacities Cards */}
      <FleetCapacities />

      {/* Technical Specifications of the Fleet */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#00AEEF] block mb-2">
              Equipamiento a Bordo
            </span>
            <h2 className="text-3xl font-black text-[#0B3D91]">
              Tecnología y Maniobras Seguras en Cada Entrega
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Nuestras unidades cuentan con equipo mecánico certificado para garantizar descargas rápidas y sin derrames.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#0B3D91] mb-4">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Motobombas de Alta Presión</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Descarga de alto caudal capaz de elevar agua hasta 4 niveles de altura y llenar tinacos de azotea sin pérdida de presión.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-[#00AEEF] mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Mangueras de hasta 100m</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tramos modulares de manguera grado sanitario para ingresar a privadas, callejones o estacionamientos de difícil acceso.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Tanques Sanitizados</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tanques con recubrimiento epóxico o acero inoxidable que previenen la proliferación de algas o bacterias.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Descarga Rápida</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vaciado de 10,000 litros en tan solo 15 a 20 minutos, minimizando obstrucciones en vía pública o predios.
              </p>
            </div>
          </div>

          {/* Quick Selection Helper */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-900 to-[#072559] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">¿No sabes qué pipa solicitar?</span>
              <h4 className="text-2xl font-black">Te asesoramos con la capacidad exacta de tu cisterna</h4>
              <p className="text-slate-200 text-sm max-w-xl">
                Un tinaco estándar almacena 1,100 litros, una cisterna habitacional promedio entre 5,000 y 10,000 litros.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('cotizador')}
                className="px-6 py-3 rounded-xl bg-[#00AEEF] hover:bg-sky-400 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Calcular en Cotizador</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola Transportes Reyes, necesito ayuda para saber qué capacidad de pipa necesito para mi cisterna.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                Preguntar a un Asesor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
