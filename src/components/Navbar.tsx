import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { PageId, NavItem } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPage, navigate } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'servicios', label: 'Servicios', href: '#servicios' },
    { id: 'capacidades', label: 'Capacidades', href: '#capacidades' },
    { id: 'cotizador', label: 'Cotizador', href: '#cotizador' },
    { id: 'cobertura', label: 'Zonas', href: '#cobertura' },
    { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
    { id: 'faq', label: 'Preguntas', href: '#faq' },
  ];

  const handleNavClick = (pageId: PageId, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top emergency & schedule bar */}
      <div className="bg-[#072559] text-white text-xs py-2 px-4 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-200">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
              <strong className="text-white">Servicio 24 hrs</strong> de Lunes a Viernes
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#4CAF50]" />
              Cobertura en CDMX y Estado de México
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              id="top-phone-link"
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 text-slate-100 hover:text-[#00AEEF] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00AEEF]" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a
              id="top-whatsapp-link"
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.quoteDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#4CAF50] hover:text-emerald-300 font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp 24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-slate-200'
            : 'bg-white shadow-md py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="nav-brand-logo"
            onClick={(e) => handleNavClick('inicio', e)}
            className="flex items-center group transition-transform hover:scale-[1.01] cursor-pointer text-left bg-transparent border-0 p-0"
            aria-label="Ir a página de Inicio"
          >
            <Logo variant="horizontal" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all cursor-pointer relative ${
                    isActive
                      ? 'text-[#0B3D91] bg-sky-50 shadow-xs border-b-2 border-[#00AEEF]'
                      : 'text-slate-700 hover:text-[#0B3D91] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-button"
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:border-[#0B3D91] hover:text-[#0B3D91] text-xs font-bold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B3D91]" />
              <span>Llamar</span>
            </a>

            <button
              id="nav-quote-button"
              onClick={(e) => handleNavClick('cotizador', e)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B3D91] hover:bg-blue-900 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Cotizar Pipa</span>
            </button>

            <a
              id="nav-whatsapp-cta"
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.quoteDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-bold shadow-md shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp 24 hrs</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#0B3D91]" /> : <Menu className="w-6 h-6 text-[#0B3D91]" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl px-4 py-4 animate-in slide-in-from-top-3">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={(e) => handleNavClick(link.id, e)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg font-bold text-base transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-sky-50 text-[#0B3D91] border-l-4 border-[#00AEEF]'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 mt-2">
                <button
                  onClick={(e) => handleNavClick('cotizador', e)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#0B3D91] text-white font-bold text-sm cursor-pointer"
                >
                  <span>Cotizador en Línea</span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-300 text-slate-800 font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#0B3D91]" />
                  <span>Llamar al {COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.quoteDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-emerald-600 text-white font-bold text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

