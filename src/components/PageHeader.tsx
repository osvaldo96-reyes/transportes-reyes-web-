import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ChevronRight, Home, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  currentLabel: string;
  badgeIcon?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  currentLabel,
  badgeIcon,
}) => {
  const { navigate } = useNavigation();

  return (
    <div className="relative pt-32 pb-14 bg-gradient-to-b from-[#072559] via-[#0B3D91] to-[#0d47a1] text-white overflow-hidden">
      {/* Soft background light ripples */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Miga de pan" className="flex items-center gap-2 text-xs text-sky-200/90 mb-6">
          <button
            onClick={() => navigate('inicio')}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span>Inicio</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-sky-300/60" />
          <span className="font-bold text-white tracking-wide">{currentLabel}</span>
        </nav>

        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-xs">
            {badgeIcon}
            <span>{badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed font-normal">
            {subtitle}
          </p>

          {/* Quick contact buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.quoteDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Pedir Pipa WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-[#00AEEF]" />
              <span>Llamar {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
