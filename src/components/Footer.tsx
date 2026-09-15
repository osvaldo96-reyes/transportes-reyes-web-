import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, COVERAGE_ZONES } from '../data';
import { Phone, MessageCircle, MapPin, Clock, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-[#072559] text-white pt-16 pb-12 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/60">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => navigate('inicio')}
              className="flex items-start cursor-pointer text-left bg-transparent border-0 p-0 hover:opacity-95 transition-opacity"
              aria-label="Ir a Inicio"
            >
              <Logo variant="horizontal" theme="dark" />
            </button>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              &ldquo;{COMPANY_INFO.slogan}&rdquo;
            </p>
            <div className="flex flex-col gap-1.5 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
                {COMPANY_INFO.yearsExperience} Años de Experiencia Comprobada
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00AEEF]" />
                {COMPANY_INFO.schedule}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400" />
                Base operativa en Estado de México y CDMX
              </span>
            </div>

            {/* Quick Navigation Pills in Footer */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => navigate('inicio')}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              >
                Inicio
              </button>
              <button
                onClick={() => navigate('servicios')}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              >
                Servicios
              </button>
              <button
                onClick={() => navigate('capacidades')}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              >
                Capacidades
              </button>
              <button
                onClick={() => navigate('cotizador')}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              >
                Cotizador
              </button>
              <button
                onClick={() => navigate('cobertura')}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              >
                Zonas
              </button>
              <button
                onClick={() => navigate('nosotros')}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              >
                Nosotros
              </button>
              <button
                onClick={() => navigate('faq')}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              >
                Preguntas
              </button>
            </div>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#00AEEF]">
              Nuestros Servicios
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => navigate('servicios')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pipas de agua a domicilio y casas
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('servicios')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Llenado de cisternas y tinacos
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('servicios')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Servicio para empresas y comercios
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('servicios')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Constructoras y obra civil (Agua tratada)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('servicios')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Llenado de albercas y balnearios
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('servicios')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Abastecimiento para eventos masivos
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('servicios')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Emergencias 24 hrs por desabasto
                </button>
              </li>
            </ul>
          </div>

          {/* Coverage Zones Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#4CAF50]">
              Zonas de Entrega
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {COVERAGE_ZONES.map((z) => (
                <li key={z.id}>
                  <button
                    onClick={() => navigate('cobertura')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {z.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and WhatsApp CTA Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              Contacto y Cotizaciones
            </h4>
            <p className="text-xs text-slate-300">
              Cotiza al momento con nuestros asesores en línea o solicita una pipa de emergencia.
            </p>

            <div className="space-y-2.5">
              <button
                onClick={() => navigate('cotizador')}
                className="w-full py-3 px-4 rounded-xl bg-[#00AEEF] hover:bg-sky-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <span>Abrir Cotizador en Línea</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.quoteDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp 24/7: {COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-600 hover:border-white text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>Llamada: {COMPANY_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Transportes Reyes. Todos los derechos reservados.
            <span className="block sm:inline sm:ml-2 text-[11px] text-slate-400">
              Servicio de Agua Potable y Tratada • Edomex y CDMX
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-300 font-semibold">Puntualidad · Higiene · Seguridad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
