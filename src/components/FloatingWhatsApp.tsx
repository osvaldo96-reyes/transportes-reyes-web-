import React, { useState } from 'react';
import { MessageCircle, X, Send, Clock, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const quickMessages = [
    'Quiero cotizar pipa de 10,000 Litros',
    'Quiero cotizar pipa de 20,000 Litros',
    'Tengo una emergencia sin agua',
    'Cotización para constructora / empresa',
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const text = userMsg.trim() || COMPANY_INFO.quoteDefaultMessage;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setUserMsg('');
    setIsOpen(false);
  };

  const handleQuickClick = (msg: string) => {
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hola Transportes Reyes! ${msg}. ¿Me podrían dar informes?`)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#0B3D91] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 text-[#0B3D91] font-bold">
                <MessageCircle className="w-6 h-6 text-emerald-600 fill-emerald-600" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-sm leading-tight">Transportes Reyes</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>En línea • Servicio 24 hrs</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-80 overflow-y-auto">
            {/* Agent speech bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-xs border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <p className="font-bold text-[#0B3D91]">
                ¡Hola! Bienvenido a Transportes Reyes 💧
              </p>
              <p>
                ¿En qué zona te encuentras y cuántos litros de agua potable o tratada requieres? Escríbenos y te cotizamos al momento.
              </p>
              <div className="flex items-center gap-1 text-[10px] text-slate-400 pt-1">
                <Clock className="w-3 h-3" />
                <span>Tiempo de respuesta habitual: &lt; 3 minutos</span>
              </div>
            </div>

            {/* Quick message options */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Opciones rápidas:
              </span>
              <div className="flex flex-col gap-1.5">
                {quickMessages.map((msg, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickClick(msg)}
                    className="text-left text-xs bg-white hover:bg-blue-50 hover:text-[#0B3D91] hover:border-blue-300 border border-slate-200 p-2 rounded-xl transition-all font-medium text-slate-700 flex items-center justify-between"
                  >
                    <span>{msg}</span>
                    <Sparkles className="w-3 h-3 text-[#00AEEF]" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form input */}
          <form onSubmit={handleSendCustom} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribe tu colonia o mensaje..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              aria-label="Enviar por WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Direct phone option */}
          <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 text-center">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="text-[11px] font-bold text-[#0B3D91] hover:underline inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>O prefiere llamarnos al {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group">
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold whitespace-nowrap shadow-lg animate-bounce">
            <span>¡Cotiza tu Pipa Aquí!</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
        )}

        <button
          id="floating-whatsapp-main-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none ring-4 ring-emerald-500/30"
          aria-label="Abrir WhatsApp para cotizar pipa de agua"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <>
              <MessageCircle className="w-8 h-8 fill-white" />
              {/* Notification badge */}
              <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-black">
                1
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
