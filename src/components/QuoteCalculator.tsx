import React, { useState } from 'react';
import { MessageCircle, Phone, CheckCircle2, Calculator, Sparkles, Send, Copy, Check } from 'lucide-react';
import { COMPANY_INFO, generateWhatsAppUrl } from '../data';

export const QuoteCalculator: React.FC = () => {
  const [service, setService] = useState('Llenado de Cisternas');
  const [waterType, setWaterType] = useState('Agua Potable');
  const [liters, setLiters] = useState('10,000 Litros');
  const [zone, setZone] = useState('Venustiano Carranza');
  const [address, setAddress] = useState('');
  const [hoseLength, setHoseLength] = useState('Hasta 30 metros (estándar)');
  const [urgency, setUrgency] = useState('Inmediata / Hoy');
  const [copied, setCopied] = useState(false);

  const servicesList = [
    'Llenado de Cisternas',
    'Pipas a Domicilio (Casas)',
    'Servicio para Empresas',
    'Constructoras / Obra Civil',
    'Albercas / Jacuzzis',
    'Eventos Masivos',
    'Emergencia por Desabasto',
  ];

  const capacitiesList = [
    { label: '10,000 Litros', note: 'Ideal para casas y cisternas particulares' },
    { label: '20,000 Litros', note: 'Edificios, empresas, albercas y condominios' },
    { label: '45,000 Litros', note: 'Tractocamión para industrias y obras pesadas' },
  ];

  const zonesList = [
    'Venustiano Carranza (CDMX)',
    'Cuauhtémoc (CDMX)',
    'Parte Álvaro Obregón (CDMX)',
    'Iztapalapa (CDMX)',
    'Los Reyes (La Paz / Edomex)',
    'Estado de México (Zona Oriente)',
    'Otra Alcaldía o Municipio',
  ];

  const whatsappUrl = generateWhatsAppUrl({
    service,
    waterType,
    liters,
    zone,
    address: address || 'Por confirmar en llamada',
    hoseLength,
    urgency,
  });

  const handleCopy = () => {
    const text = `Cotización Transportes Reyes:
Servicio: ${service}
Agua: ${waterType}
Capacidad: ${liters}
Zona: ${zone}
Dirección: ${address || 'A acordar'}
Manguera: ${hoseLength}
Urgencia: ${urgency}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="cotizador" className="py-20 bg-gradient-to-b from-slate-50 to-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Cotizador Instantáneo
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] tracking-tight mb-4">
            Cotiza tu Pipa de Agua en 1 Minuto por WhatsApp
          </h2>
          <p className="text-base text-slate-600">
            Personaliza el servicio que necesitas. Al dar clic en el botón de WhatsApp se abrirá tu chat con todos los datos listos para que te atendamos de inmediato.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Controls */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            {/* Step 1: Tipo de Servicio */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. ¿Qué servicio requieres?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {servicesList.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setService(s)}
                    className={`text-left p-3 rounded-xl text-xs font-semibold border transition-all ${
                      service === s
                        ? 'border-[#0B3D91] bg-blue-50 text-[#0B3D91] ring-1 ring-[#0B3D91]'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tipo de Agua */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Tipo de Agua
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setWaterType('Agua Potable (Consumo y Cisternas)')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    waterType.includes('Potable')
                      ? 'border-[#00AEEF] bg-sky-50 ring-1 ring-[#00AEEF]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="block font-bold text-sm text-[#0B3D91]">💧 Agua Potable</span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    Certificada para casas, tinacos, cisternas, albercas y comercios.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setWaterType('Agua Tratada (Obras e Industria)')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    waterType.includes('Tratada')
                      ? 'border-[#4CAF50] bg-emerald-50 ring-1 ring-[#4CAF50]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="block font-bold text-sm text-emerald-800">🌱 Agua Tratada</span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    Económica para terracerías, construcción, riego y compactación.
                  </span>
                </button>
              </div>
            </div>

            {/* Step 3: Capacidad de la Pipa */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Capacidad requerida
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {capacitiesList.map((c) => (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => setLiters(c.label)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      liters === c.label
                        ? 'border-[#0B3D91] bg-blue-50/70 ring-1 ring-[#0B3D91]'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-black text-base text-[#0B3D91]">{c.label}</span>
                    <span className="block text-[11px] text-slate-500 mt-1 leading-tight">
                      {c.note}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Zona y Manguera */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  4. Zona o Alcaldía
                </label>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white"
                >
                  {zonesList.map((z) => (
                    <option key={z} value={z}>
                      {z}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  5. Metros de manguera
                </label>
                <select
                  value={hoseLength}
                  onChange={(e) => setHoseLength(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white"
                >
                  <option value="Hasta 30 metros (estándar)">Hasta 30 metros (estándar)</option>
                  <option value="De 30 a 60 metros">De 30 a 60 metros</option>
                  <option value="Más de 60 a 100 metros (especial)">Más de 60 a 100 metros (especial)</option>
                  <option value="Descarga directa a boca de cisterna">Descarga directa a banqueta</option>
                </select>
              </div>
            </div>

            {/* Step 5: Dirección aproximada y Urgencia */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Colonia o Calle (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Col. Balbuena / Col. Moctezuma"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  ¿Para cuándo la necesitas?
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white"
                >
                  <option value="Urgente / Inmediato">Lo antes posible (Emergencia)</option>
                  <option value="Hoy mismo">Hoy mismo</option>
                  <option value="Mañana programado">Mañana programado</option>
                  <option value="Esta semana o fecha posterior">Esta semana (programado)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Live Preview Card & Instant WhatsApp Dispatch */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-[#072559] text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-blue-900/40 relative overflow-hidden">
              {/* Background badge */}
              <div className="flex items-center justify-between pb-4 border-b border-blue-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#00AEEF]" />
                  <span className="font-extrabold text-sm tracking-wide uppercase text-sky-200">
                    Resumen de tu Cotización
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#4CAF50]/20 text-[#4CAF50] text-[11px] font-bold border border-[#4CAF50]/30">
                  Listo para Enviar
                </span>
              </div>

              {/* Data Summary Items */}
              <div className="py-5 space-y-3 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-400 text-xs">Servicio:</span>
                  <span className="font-bold text-white text-right">{service}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-400 text-xs">Tipo de Agua:</span>
                  <span className="font-bold text-[#00AEEF] text-right">{waterType}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-400 text-xs">Capacidad Pipa:</span>
                  <span className="font-black text-amber-300 text-base text-right">{liters}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-400 text-xs">Zona / Alcaldía:</span>
                  <span className="font-semibold text-white text-right">{zone}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-400 text-xs">Manguera:</span>
                  <span className="font-medium text-slate-200 text-right">{hoseLength}</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-400 text-xs">Tiempo:</span>
                  <span className="font-bold text-emerald-400 text-right">{urgency}</span>
                </div>
              </div>

              {/* Instant WhatsApp Action Button */}
              <div className="pt-2 space-y-2.5">
                <a
                  id="calculator-whatsapp-dispatch-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Solicitar Cotización por WhatsApp</span>
                  <Send className="w-4 h-4 ml-0.5" />
                </a>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#4CAF50]" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Datos</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-300" />
                    <span>Llamar Directo</span>
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-5 pt-4 border-t border-blue-900/60 flex items-center justify-between text-[11px] text-slate-300">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF50]" />
                  Respuesta en &lt; 5 min
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF]" />
                  Sin compromiso
                </span>
              </div>
            </div>

            {/* Note */}
            <p className="text-center text-xs text-slate-500 px-4">
              Horario de despacho 24 horas de Lunes a Viernes. Unidades equipadas con manguera de alta resistencia y motobomba de descarga acelerada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
