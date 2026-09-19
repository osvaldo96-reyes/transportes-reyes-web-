import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { BrandEssence } from '../components/BrandEssence';
import { useNavigation } from '../context/NavigationContext';
import { Sparkles, Award, Users, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        currentLabel="Nosotros"
        badge="15 Años de Trayectoria y Confianza"
        title="Esencia y Compromiso de Transportes Reyes"
        subtitle="“En Transportes Reyes creemos en el poder del agua para generar bienestar, impulsar comunidades y construir un futuro más saludable”"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />}
      />

      {/* Brand Essence component containing the official master logo */}
      <BrandEssence />

      {/* Company Pillar Cards */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#00AEEF] block mb-2">
              Nuestra Filosofía de Servicio
            </span>
            <h2 className="text-3xl font-black text-[#0B3D91]">
              15 Años Siendo el Aliado Confiable de CDMX y EdoMex
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Nos distinguimos por la calidad humana de nuestros operadores, la puntualidad en cada entrega y la pureza certificada de nuestra agua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0B3D91] mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">15 Años de Experiencia</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Una década transportando millones de litros de agua potable y tratada para miles de hogares, residenciales, comercios y desarrollos de construcción.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Compromiso Sanitario</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Desinfección periódica de tanques, mangueras herméticas grado alimenticio y constante verificación de cloración y pureza en cada carga.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-[#00AEEF] mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Trato Cercano y Honesto</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Medición transparente del litraje entregado, operadores uniformados y capacitados, y facturación inmediata para todos nuestros clientes.
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="mt-14 text-center">
            <button
              onClick={() => navigate('cotizador')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white font-black text-sm shadow-lg transition-all cursor-pointer"
            >
              <span>Solicitar Pipa con Transportes Reyes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
